import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import karry from './img/karry.png';


function Top({ url, addToCart, Detail }) {
  const [kirjat, setKirjat] = useState([])
  const [valittuKirja, setValittuKirja] = useState(null);

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

  function close() {
    setValittuKirja(null);
  }

  if (valittuKirja != null) {
    return (<Detail
      kuva={valittuKirja.kuva}
      kirjanimi={valittuKirja.kirjanimi}
      kirjailija={valittuKirja.kirjailija}
      vuosi={valittuKirja.vuosi}
      kieli={valittuKirja.kieli}
      kustantaja={valittuKirja.kustantaja}
      kuvaus={valittuKirja.kuvaus}
      saldo={valittuKirja.saldo}
      hinta={valittuKirja.hinta}
      close={close}
    />
    )
  } else {
    return (
      <div id="reuna">
        <h2 className="ms-4">Myydyimmät kirjat</h2>
        <ol id='top7'>
          <Slide {...propertiesTop}>
            {kirjat?.map(kirja => (
              <div key={kirja.kirjaid}>
                <b> {kirja.rownum}. </b><br />
                <div onClick={e => setValittuKirja(kirja)}>
                  <img id="kirja" src={kirja.kuva} alt="kirjan kansikuva" />
                  <br />
                  <b>
                    {kirja.kirjanimi} <br />
                    {kirja.kirjailija}
                  </b>
                  <br />
                  Hinta: {kirja.hinta} €<br />
                  Myyty: {kirja.SUM} kpl <br />
                </div>
                <div>
                  <button className="btn" type="button" onClick={e => addToCart(kirja)}><img id='pieni' src={karry} alt="ostoskärry" /></button>
                </div>
              </div>
            ))}
          </Slide>
        </ol>
      </div>
    )
  }
}

export default Top
