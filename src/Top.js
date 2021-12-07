import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import karry from './img/karry.png'
import { Link } from 'react-router-dom'

function Top ({ url, addToCart }) {
  const [kirjat, setKirjat] = useState([])
  const [valittuKirja, setValittuKirja] = useState(null)

  function notify () {
    toast('Kirja lisätty ostoskoriin!')
  }

  const propertiesTop = {
    duration: 5000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    indicators: false,
    arrows: true
  }

  useEffect(() => {
    axios
      .get(url + '/Top.php')
      .then(response => {
        setKirjat(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }, [])

  return (
    <div id='reuna' className='container-fluid'>
      <h2 id='heading' className='ms-4'>
        Myydyimmät kirjat
      </h2>
      <ol id='top7' className='row'>
        <Slide {...propertiesTop}>
          {kirjat?.map(kirja => (
            <div key={kirja.kirjaid}>

              <div className="row" id="homerow"> 
                <b> {kirja.rownum}. </b>
                <br />
                <div onClick={e => setValittuKirja(kirja)}>
                  <Link
                    className='musta'
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
                    <br />
                    <b>
                      {kirja.kirjanimi} <br />
                      {kirja.kirjailija}
                    </b>
                    <br />
                    Hinta: {kirja.hinta} €<br />
                    Myyty: {kirja.SUM} kpl <br />
                  </Link>
                </div>
                <div>
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
                </div>
            
              </div>
            </div>
          ))}
        </Slide>
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
      </ol>
    </div>
  )
}

export default Top
