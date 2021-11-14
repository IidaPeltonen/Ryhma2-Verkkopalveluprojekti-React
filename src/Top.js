import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import paa from './img/paa.png'
import karry from './img/karry.png'
import lasi from './img/lasi.png'
import './App.css'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

function Top () {
  const URL = 'http://localhost/kauppa/Top.php'
  const [kirjat, setKirjat] = useState([])

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
      .get(URL)
      .then(response => {
        setKirjat(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }, [])

  return (
    <div>
      <h2>Myydyimmät kirjat</h2>
      <ol id='top7'>
        <Slide {...propertiesTop}>
          {kirjat?.map(top => (
            <div key={top.kirjaid}>
              {/* TÄHÄN TARVITAAN SIJOITUSNRO */}
              <img src={top.kuva} />
              <br />
              <b>
                {top.kirjanimi} <br />
                {top.kirjailija}
              </b>
              <br />
              {/*Julkaisuvuosi: {top.vuosi} <br />
            Kieli: {top.kieli}<br />
            Kustantaja: {top.kustantaja}<br />
            Genre: {top.trnimi}<br />
            {top.kuvaus}<br /> */}
              Hinta: {top.hinta} €<br />
              Varastossa: {top.saldo} kpl <br />
              <img id='pieni' src={karry} />
            </div>
          ))}
        </Slide>
      </ol>
    </div>
  )
}

export default Top
