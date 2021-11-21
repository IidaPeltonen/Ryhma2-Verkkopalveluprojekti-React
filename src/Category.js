import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import karry from './img/karry.png'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export default function Category ({ url, category, addToCart, Detail }) {
  const [kirjat, setKirjat] = useState([])
  const [valittuKirja, setValittuKirja] = useState(null)

  const properties = {
    duration: 5000,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: false,
    indicators: false,
    arrows: true
  }

  useEffect(() => {
    if (category !== null) {
      axios
        .get(url + '/tuoteKategoriaTuotteet.php/' + category?.id)
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

  function close () {
    setValittuKirja(null)
  }

  if (valittuKirja != null) {
    return (
      <Detail
        kirjaid={valittuKirja.kirjaid}
        kirjanimi={valittuKirja.kirjanimi}
        kirjailija={valittuKirja.kirjailija}
        vuosi={valittuKirja.vuosi}
        kieli={valittuKirja.kieli}
        kustantaja={valittuKirja.kustantaja}
        kuva={valittuKirja.kuva}
        kuvaus={valittuKirja.kuvaus}
        saldo={valittuKirja.saldo}
        hinta={valittuKirja.hinta}
        close={close}
      />
    )
  } else {
    return (
      <div>
        <h2 id='otsikko'>{category?.name}</h2>
        <ol id='kaikki'>
          <Slide {...properties}>
            {kirjat.map(kirja => (
              <div key={kirja.kirjaid}>
                <div onClick={e => setValittuKirja(kirja)}>
                  <img id='kirja' src={kirja.kuva} alt='kirjan kansikuva' />
                  <br />
                  <b>
                    {kirja.kirjanimi} <br />
                    {kirja.kirjailija}
                  </b>
                  <br />
                  Hinta: {kirja.hinta}€<br />
                  Varastossa: {kirja.saldo} kpl <br />
                </div>
                <div>
                  <button
                    className='btn'
                    type='button'
                    onClick={e => addToCart(kirja)}
                  >
                    <img id='pieni' src={karry} alt='ostoskärry' />
                  </button>
                </div>
              </div>
            ))}
          </Slide>
        </ol>
      </div>
    )
  }
}
