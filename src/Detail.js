import React from 'react'
import './inc/styles/Details.css'
import { Link } from 'react-router-dom'
import karry from './img/karry.png'
 
 //yhden kirjan tiedot
 //MITEN SAADAAN PASSATTUA SEKÄ PARAMETRI ETTÄ FUNKTIO YHTÄAIKAA
 export default function Detail (product, addToCart) {
    return (
      <div id='detail' className='row'>
        <div className='col-5'>
          <img id='detailKuva' src={product.kuva} alt='kirjan kansikuva'></img>
        </div>
        <div className='col-1'></div>
        <div className='col-6'>
          <h1 id='centerh1'>{product.kirjanimi}</h1>
          <h2 id='centerh2'>{product.kirjailija}</h2>
          <p>{product.kuvaus}</p>
          <p>Julkaisuvuosi: {product.vuosi} </p>
          <p>Kieli: {product.kieli}</p>
          <p>Kustantaja: {product.kustantaja}</p>
        </div>
        <div className='col-1'></div>
        <div className='col-3'>
          <button className='btn-primary p-2 btnBacktoList'>
            <Link className='backToList' to='#' onClick={product.close}>
              Takaisin listaukseen
            </Link>
          </button>
        </div>
        <div className='col-3'></div>
        <div className='col-4'>
          <p>Hinta: {product.hinta}€</p>
          <img id='detailKarry' src={karry} alt='ostoskarry'></img>
          <br />
          <button
            className='btn btn-primary backToList'
            type='button'
            onClick={e => addToCart(product)}
          >
           Lisää ostoskoriin
          </button>
        </div>
      </div>
    )
  }
