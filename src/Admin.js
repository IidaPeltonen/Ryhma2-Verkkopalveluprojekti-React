import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './inc/styles/Admin.css'
import { Link } from 'react-router-dom'

let loginUrl = 'http://localhost/kauppa/login.php'
let resUrl = 'http://localhost/kauppa/resources.php'

function Admin() {
  //Formin tietojen hallinta
  const [username, setUsername] = useState('')
  const [pw, setPw] = useState('')
  //Pidetään yllä tieto, onko käyttäjä loggautunut sisään
  const [auth, setAuth] = useState(false)

  //Asetetaan loggautuneeksi, jos sessionStoragessa on talletettu token
  if (!auth && sessionStorage.getItem('token')) {
    setAuth(true)
  }

  //Login napin hallinta.
  const login = e => {
    e.preventDefault()

    //Basic auth header login tiedoista (windos.btoa, koska pelkkä btoa yrittää käyttää Reactin omaan deprekoitunutta)
    let params = {
      headers: { Authorization: 'Basic ' + window.btoa(username + ':' + pw) },
      withCredentials: true
    }

    //Lähetetään tiedot palvelimelle. Jos vastaus OK,
    //talletetaan vastauksen token, nollataan kentät ja asetetaan käyttäjä loggautuneeksi
    axios
      .post(loginUrl, null, params)
      .then(resp => {
        if (resp.status === 200) {
          sessionStorage.setItem('token', resp.data.token)
          setUsername('')
          setPw('')
          setAuth(true)
        }
      })
      .catch(e => console.log(e))
  }

  //Jos käyttäjä ei ole loggautunut, näytetään login-lomake. Muuten näytetään käyttäjän oma resurssi.
  if (!auth) {
    return (
      <div className="container">
        <form onSubmit={login}>
          <div className="col-3 col-md-6 mx-auto mb-4">
            <label className="form-label">Käyttäjätunnus:</label>
            <input
              className="form-control"
              type='text'
              value={username}
              onChange={e => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="col-3 col-md-6 mx-auto mb-4">
            <label className="form-label">Salasana:</label>
            <input
              className="form-control"
              type='password'
              value={pw}
              onChange={e => setPw(e.target.value)}
            ></input>
          </div>
          <div className="col-3 col-md-6 mx-auto">
            <input type='submit' value='Login'></input>
          </div>
        </form>
      </div>
    )
  } else {
    //Näytetään loggautuneen käyttäjän resurssi.
    //Välisetään myös setAuth, jotta resurssissa voidaan loggautua ulos.
    return <Resource login={setAuth} />
  }
}

//Komponentti käyttäjän resussin näyttämiseksi
function Resource(props) {
  //Käyttäjän henkkoht content
  const [content, setContent] = useState('')

  //useEffect, jota Kutsutaan yhden kerran komponentille.
  useEffect(() => {
    //Asetetaan bearer token headeriin
    var params = {
      headers: { authorization: 'Bearer ' + sessionStorage.getItem('token') },
      withCredentials: true
    }

    //Haetaan resurssia bearer-tokenin kanssa
    //Asetetaan saadusta resurssista sisältö sivulle.
    axios
      .get(resUrl, params)
      .then(resp => setContent(resp.data.message))
      .catch(e => console.log(e))
  }, [])

  //Logout-painike poistaa tokenin ja asettaa auth useStaten falseksi
  //Tämä aiheuttaa App-sivun lataamisen uudelleen, jolloin login-lomake tulee näkyviin.
  const logout = () => {
    sessionStorage.removeItem('token')
    props.login(false)
  }

  return (
    <div className='container'>
      <div className='row table-responsive'>
        <table>
          <tbody className='col'>
            <tr>
              <th scope='col' >
                {content}
              </th>
            </tr>
            <tr col-12>
              <th scope='col' id='notbold'>
                Mitä haluat tehdä?
              </th>
            </tr>
            <tr col-12>
              <th scope='col' id='notbold'>
                <Link
                  className='adminlinkit'
                  to={{
                    pathname: '/kirja',
                  }}
                >
                  * Lisää, muokkaa tai poista kirja *
                </Link>
              </th>
            </tr>
            <tr>
              <th scope='col' id='notbold'>
                <Link
                  className='adminlinkit'
                  to={{
                    pathname: '/category_admin'
                  }}
                >
                  * Lisää, muokkaa tai poista tuoteryhmä *
                </Link>
              </th>
            </tr>
            <tr>
              <th scope='col' id='notbold'>
                <Link
                  className='adminlinkit'
                  to={{
                    pathname: '/asiakas',
                  }}
                >
                  * Lisää, muokkaa tai poista asiakas *
                </Link>
              </th>
            </tr>
            <tr>
              <th scope='col' id='notbold'>
                <Link
                  className='adminlinkit'
                  to={{
                    pathname: '/user',
                  }}
                >
                  * Lisää, muokkaa tai poista pääkäyttäjä *
                </Link>
              </th>
            </tr>
            <tr>
              <th scope='col' id='notbold'>
                <Link
                  className='adminlinkit'
                  to={{
                    pathname: '/tilaus',
                  }}
                >
                  * Muokkaa tai poista tilaus *
                </Link>
              </th>
            </tr>
            <tr>
              <th scope='col' id='notbold'>
                <Link
                  className='adminlinkit'
                  to={{
                    pathname: '/tilaustesti',
                  }}
                >
                  * Muokkaa tai poista tilaus ****TESTIVERSIO***** *
                </Link>
              </th>
            </tr>
            <tr col-12>
              <th scopes='col'>
                <button className="logout" col='6' onClick={logout}>Kirjaudu ulos</button>
              </th>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admin
