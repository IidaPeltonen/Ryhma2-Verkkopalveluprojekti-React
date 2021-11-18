import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import karry from './img/karry.png'
import './App.css';
import Top from './Top';
// import DetailsKirja from './DetailsKirja';



function Home({ url, addToCart, Detail }) {

  const [kirjat, setKirjat] = useState([])
  const [valittuKirja, setValittuKirja] = useState(null);

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
    setValittuKirja(null);
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
        <Top />
        <h2>Kaikki kirjat</h2>
        <ol id='kaikki'>
          <Slide {...properties}>
            {kirjat?.map(kirja => (
              <div key={kirja.kirjaid}>
                <img id="kirja" src={kirja.kuva} alt="kirjan kansikuva" onClick={e => setValittuKirja(kirja)} />
                <br />
                <b onClick={e => setValittuKirja(kirja)}>
                  {kirja.kirjanimi}  <br />
                  {kirja.kirjailija}
                </b>
                <br />
                Hinta: {kirja.hinta}€<br />
                Varastossa: {kirja.saldo} kpl <br />
                <img id='pieni' src={karry} alt="ostoskärry" />
                <button className="btn btn-primary" type="button" onClick={e => addToCart(kirja)}>Add</button>
              </div>
            ))}
          </Slide>
        </ol>
      </div>

    )
  }
}

export default Home
