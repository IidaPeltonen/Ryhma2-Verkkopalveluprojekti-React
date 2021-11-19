import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import karry from './img/karry.png';
import './App.css';
import DetailsKirja from './DetailsKirja';

function Top () {
  const URL = 'http://localhost/kauppa/Top.php'
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
      .get(URL)
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
    return <DetailsKirja
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
  } else    {
    return (
      <div>
        <h2>Myydyimmät kirjat</h2>
        <ol id='top7'>
          <Slide {...propertiesTop}>
            {kirjat?.map(top => (
              <div key={top.kirjaid} onClick={e => setValittuKirja(top)}>
              <b> {top.rownum}. </b><br />
                <img id="kirja" src={top.kuva} alt="kirjan kansikuva"/>
                <br />
                <b>
                  {top.kirjanimi} <br />
                  {top.kirjailija}
                </b>
                <br />
                Hinta: {top.hinta} €<br />
                Myyty: {top.SUM} kpl <br />
                <img id="pieni" src={karry} alt="ostoskärry"/>
              </div>  
            ))}
          </Slide>
        </ol>
      </div>
    )
  }
}

export default Top
