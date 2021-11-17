import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import karry from './img/karry.png'
import './App.css';
import Top from './Top';
import DetailsKirja from './DetailsKirja';



function Home({ url, category }) {
  const URL = 'http://localhost/kauppa/index.php'
  const [kirjat, setKirjat] = useState([])
  const [products, setProducts] = useState([])
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
      .get(URL)
      .then(response => {
        setKirjat(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }, [])

  useEffect(() => {
    if (category !== null) {
      axios.get('http://localhost/kauppa/tuoteKategoriaTuotteet.php/' + category?.id)
        .then((response) => {
          const json = response.data;
          setProducts(json);
        }).catch(error => {
          if (error.response === undefined) {
            alert(error);
          } else {
            alert(error.response.data.error);
          }
        })
    }
  }, [category])



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
      // trnimi={valittuKirja.trnimi}
      kuvaus={valittuKirja.kuvaus}
      saldo={valittuKirja.saldo}
      hinta={valittuKirja.hinta}
      close={close}
    />
  } else {
    return (

      <div>
        <Top />
        <h2>Kaikki kirjat</h2>
        <ol id='kaikki'>
          <Slide {...properties}>
            {kirjat?.map(kirjat => (
              <div key={kirjat.kirjaid} onClick={e => setValittuKirja(kirjat)}>
                <img id="kirja" src={kirjat.kuva} alt="kirjan kansikuva" />
                <br />
                <b>
                  {kirjat.kirjanimi} <br />
                  {kirjat.kirjailija}
                </b>
                <br />
                Hinta: {kirjat.hinta}€<br />
                Varastossa: {kirjat.saldo} kpl <br />
                <img id='pieni' src={karry} alt="ostoskärry" />
              </div>
            ))}
          </Slide>
        </ol>
        <div>
          <h3>products for {category?.name}</h3>
          {products.map(product => (
            <div key={product.kirjaid}>

              <p>{product.kirjanimi}</p>


            </div>
          ))}
        </div>
      </div>

    )
  }
}

export default Home
