import React from 'react';
import './inc/styles/Details.css'
// import './App.css';
import { Link } from 'react-router-dom';
import karry from './img/karry.png';
 
 //yhden kirjan tiedot
 export default function Detail ({valittuKirja, addToCart, close}) {
    return (
      <div id='detail' className='row'>
        <div className='col-5'>
          <img id='detailKuva' src={valittuKirja.kuva} alt='kirjan kansikuva'></img>
        </div>
        <div className='col-1'></div>
        <div className='col-6'>
          <h1 className='centerh1'>{valittuKirja.kirjanimi}</h1>
          <h2 className='centerh2'>{valittuKirja.kirjailija}</h2>
          <p>{valittuKirja.kuvaus}</p>
          <p>Julkaisuvuosi: {valittuKirja.vuosi} </p>
          <p>Kieli: {valittuKirja.kieli}</p>
          <p>Kustantaja: {valittuKirja.kustantaja}</p>
        </div>
        <div className='col-1'></div>
        <div className='col-3'>
          <button className='btn-primary p-2 backtoList'>
            <Link className='backToList' to='/' onClick={e => close(valittuKirja)}>
              Takaisin listaukseen
            </Link>
          </button>
        </div>
        <div className='col-3'></div>
        <div className='col-4'>
          <p>Hinta: {valittuKirja.hinta}€</p>
          <img id='detailKarry' src={karry} alt='ostoskarry'></img>
          <br />
          <button
            className='btn btn-primary backToList'
            type='button'
            onClick={e => addToCart(valittuKirja)}
          >
           Lisää ostoskoriin
          </button>
        </div>
      </div>
    )
  }
