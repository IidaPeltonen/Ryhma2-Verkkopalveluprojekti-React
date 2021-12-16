import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import karry from './img/karry.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'
import './inc/styles/Order.css'
import './App.css'

export default function Category ({ url, category, addToCart }) {
  const [kirjat, setKirjat] = useState([])
  const [valittuKirja, setValittuKirja] = useState(null)

  //toaster
  function notify () {
    toast('Kirja lisätty ostoskoriin!')
  }

  //hakee kaikki
  useEffect(() => {
    if (category !== null) {
      axios
        .get(url + 'php/kategoria/tuoteKategoriaTuotteet.php/' + category?.id)
        .then(response => {
          const json = response.data
          setKirjat(json)
        })
        .catch(error => {
          if (error.response === undefined) {
            alert(error)
          } else {
            alert(error.response.data.error)
          }
        })
    }
  }, [category])

  return (
    <div className='container'>
      <div className='row table-responsive'>
        <h2 id='heading'>{category?.name}</h2>
        <table id='kaikki' className='table'>
          <tbody className='col-12'>
            {kirjat.map(kirja => (
              <tr key={kirja.kirjaid}>
                <th
                  scope='col'
                  className='align-middle'
                  onClick={e => setValittuKirja(kirja)}
                >
                  <Link
                    to={{
                      pathname: '/detail',
                      state: {
                        kirjaid: kirja.kirjaid,
                        kirjanimi: kirja.kirjanimi,
                        kirjailija: kirja.kirjailija,
                        vuosi: kirja.vuosi,
                        kieli: kirja.kieli,
                        kustantaja: kirja.kustantaja,
                        kuvaus: kirja.kuvaus,
                        hinta: kirja.hinta,
                        saldo: kirja.saldo,
                        kuva: kirja.kuva
                      }
                    }}
                  >
                    <img id='kirja' src={kirja.kuva} alt='kirjan kansikuva' />
                  </Link>
                </th>
                <th
                  scope='col'
                  className='align-middle d-none d-sm-table-cell'
                  id='notbold'
                >
                  {kirja.kirjanimi}
                </th>
                <th
                  scope='col'
                  className='align-middle d-none d-sm-table-cell'
                  id='notbold'
                >
                  {kirja.kirjailija}
                </th>
                <th
                  scope='col'
                  className='align-middle d-none d-sm-table-cell'
                  id='notbold'
                >
                  {kirja.kuvaus}
                </th>
                <th
                  scope='col'
                  className='align-middle d-none d-sm-table-cell'
                  id='notbold'
                >
                  {kirja.hinta}€
                </th>
                <th scope='col' className='align-middle' id='notbold'>
                  <button
                    className='btn'
                    type='button'
                    onClick={function (event) {
                      addToCart(kirja)
                      notify()
                    }}
                  >
                    <img id='pieni' src={karry} alt='ostoskärry' />
                  </button>
                  <ToastContainer
                    position='bottom-right'
                    autoClose={4000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
