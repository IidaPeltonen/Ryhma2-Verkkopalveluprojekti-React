import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import karry from './img/karry.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Category({url,category,addToCart,Detail}) {

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
        
        if (category !== null) {
           
          axios.get('http://localhost/kauppa/tuoteKategoriaTuotteet.php/'  + category?.id )
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
        return( <Detail
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
          <h2>{category?.name}</h2>
        <ol id='kaikki'>
          <Slide {...properties}>
            {products.map(product => (
              <div key={product.kirjaid}>
                <img id="kirja" src={product.kuva} alt="kirjan kansikuva" onClick={e => setValittuKirja(product)} />
                <br />
                <b onClick={e => setValittuKirja(product)}>
                  {product.kirjanimi} <br />
                  {product.kirjailija}
                </b>
                <br />
                Hinta: {product.hinta}€<br />
                Varastossa: {product.saldo} kpl <br />
                <img id='pieni' src={karry} alt="ostoskärry" />
                <button className="btn btn-primary" type="button" onClick={e => addToCart(product)}>Add</button>
              </div>
            ))}
          </Slide>
        </ol>
        </div>
    )
  }
}
