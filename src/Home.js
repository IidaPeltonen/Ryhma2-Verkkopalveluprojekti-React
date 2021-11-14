import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import paa from './img/paa.png'
import karry from './img/karry.png'
import lasi from './img/lasi.png'
import './App.css'
import Top from './Top';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

function Home () {
  const URL = 'http://localhost/kauppa/index.php'
  const [kirjat, setKirjat] = useState([])

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
  <Top />
      <h2>Kaikki kirjat</h2>
      <ol id='kaikki'>
        <Slide {...properties}>
          {kirjat?.map(kirjat => (
            <div key={kirjat.kirjaid}>
              <img id="kirja" src={kirjat.kuva} />
              <br />
              <b>
                {kirjat.kirjanimi} <br />
                {kirjat.kirjailija}
              </b>{' '}
              <br />
              {/*Julkaisuvuosi: {kirjat.vuosi} <br />
            Kieli: {kirjat.kieli}<br />
            Kustantaja: {kirjat.kustantaja}<br />
            Genre: {kirjat.trnimi}<br />
            {kirjat.kuvaus}<br /> */}
              Hinta: {kirjat.hinta}€<br />
              Varastossa: {kirjat.saldo} kpl <br />
              <img id='pieni' src={karry} />
            </div>
          ))}
        </Slide>
      </ol>
    </div>
    
  )
}

export default Home
