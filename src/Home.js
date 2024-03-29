import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import karry from './img/karry.png'
import Top from './Top'
import { Link } from 'react-router-dom'

function Home ({ url, addToCart, info }) {
  const [kirjat, setKirjat] = useState([])
  const [valittuKirja, setValittuKirja] = useState(null)

  //toaster
  function notify () {
    toast('Kirja lisätty ostoskoriin!')
  }

  //muuttujat karusellille ja määritetään, montako kirjaa näytetään, kun resoluutio on x
  const items = kirjat 
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    767: { items: 3 },
    1023: { items: 5 }
  }
  const handleDragStart = e => e.preventDefault()

  //hakee kaikki kirjat
  useEffect(() => {
    axios
      .get(url + 'php/kirja/index.php')
      .then(response => {
        setKirjat(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }, [])

  return (
    <div className='container-fluid'>
      <div>
        <Top url={url} addToCart={addToCart} info={info} />
        <h2 id='heading' className='ms-4'>
          Kaikki kirjat
        </h2>
        <ol id='kaikki'>
          <AliceCarousel
            mouseTracking
            responsive={responsive}
            disableDotsControls={true}
            infinite={true}
            items={items?.map(kirja => (
              <div onDragStart={handleDragStart} key={kirja.kirjaid}>
                <div className='row' id='homerow' style={{ display: 'flex' }}>
                  <div onClick={e => setValittuKirja(kirja)}>
                    <img id='kirja' src={kirja.kuva} alt='kirjan kansikuva' />
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
                      <br />
                      <b>
                        {kirja.kirjanimi} <br />
                        {kirja.kirjailija} {info}
                      </b>
                      <br />
                      Hinta: {kirja.hinta}€<br />
                      {kirja.saldo > 0 ? (
                        <p>
                          Varastossa:{' '}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='#1b840e'
                            className='bi bi-circle-fill'
                            viewBox='0 0 16 16'
                          >
                            <circle cx='8' cy='8' r='8' />
                          </svg>
                        </p>
                      ) : (
                        <p>
                          Ei saatavilla:{' '}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='#ff0000'
                            className='bi bi-circle-fill'
                            viewBox='0 0 16 16'
                          >
                            <circle cx='8' cy='8' r='8' />
                          </svg>
                        </p>
                      )}
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
          ></AliceCarousel>
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
    </div>
  )
}

export default Home
