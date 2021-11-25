import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import karry from './img/karry.png'
import Top from './Top'
import { Link } from 'react-router-dom'

function Home({ url, addToCart, Detail }) {
  const [kirjat, setKirjat] = useState([])
  const [valittuKirja, setValittuKirja] = useState(null)

  function notify() {
    toast('Kirja lisätty ostoskoriin!')
  }

  const properties = {
    duration: 5000,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: false,
    indicators: false,
    arrows: true
  }

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setKirjat(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }, [])

  function close() {
    setValittuKirja(null)
  }

  return (
    <div>
      <div>
        <Top url={url} addToCart={addToCart} Detail={Detail} />
        <h2 id='otsikko' className='ms-4'>
          Kaikki kirjat
        </h2>
        <ol id='kaikki'>
          <Slide {...properties}>
            {kirjat?.map(kirja => (
              <div key={kirja.kirjaid}>
                <div onClick={e => setValittuKirja(kirja)}>
                  <Link to={{
                    pathname: "/detail", state: {
                      id: kirja.id, kirjanimi: kirja.kirjanimi, kirjailija: kirja.kirjailija,
                      vuosi: kirja.vuosi, kieli: kirja.kieli, kustantaja: kirja.kustantaja, kuvaus: kirja.kuvaus,
                      hinta: kirja.hinta, saldo: kirja.saldo, kuva: kirja.kuva
                    }
                  }}>
                  <img id='kirja' src={kirja.kuva} alt='kirjan kansikuva' />
                  <br />
                  <b>
                  {kirja.kirjanimi} <br />
                  {kirja.kirjailija}
                  </b>
                  <br />
                  Hinta: {kirja.hinta}€<br />
                  Varastossa: {kirja.saldo} kpl <br />
                  </Link>
                </div>
                <div>
                  <button
                    className='btn'
                    type='button'
                    onClick={function (event) {
                      addToCart(kirja)
                      notify()
                    }}>
                    <img id='pieni' src={karry} alt='ostoskärry' />
                  </button>
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
      </div >
    )
}

export default Home
