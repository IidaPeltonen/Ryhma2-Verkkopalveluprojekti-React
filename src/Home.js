import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
 import paa from './img/paa.png';
/*import karry from './img/karry.png';
import lasi from './img/lasi.png'; */
import piina from './piina.png';
import verta from '../src/img/verta.png';
import kummitus from '../src/img/kummitus.png';
import './App.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

export default function Home() {
  const URL = 'http://localhost/kauppa/index.php';
  const [kirjat, setKirjat] = useState([]);

  const properties = {
    duration: 5000,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: false,
    indicators: false,
    arrows: true
  };

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setKirjat(response.data)
      }).catch(error => {
        alert(error);
      })
  }, [])

  return (
    <ol>
      <Slide {...properties}>
        {kirjat?.map(kirjat => (
           <div key={kirjat.kirjaid}>
            <img src={kirjat.kuva} /><br />
            <b>{kirjat.kirjanimi} <br />
            {kirjat.kirjailija}</b> <br />
            Julkaisuvuosi: {kirjat.vuosi} <br />
            Kieli: {kirjat.kieli}<br />
            Kustantaja: {kirjat.kustantaja}<br />
            Genre: {kirjat.trnimi}<br />
            {kirjat.kuvaus}<br />
            Hinta: {kirjat.hinta} €<br />
            Varastossa: {kirjat.saldo} kpl <br />
          </div>
        ))}
      </Slide>
    </ol>

  );
};

 
         



