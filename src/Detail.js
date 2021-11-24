import React from 'react'
import './inc/styles/Details.css'
import { Link } from 'react-router-dom'
import karry from './img/karry.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//yhden kirjan tiedot
export default function Detail ({ url, valittuKirja, addToCart, close }) {
  function notify () {
    toast('Kirja lisätty ostoskoriin!')
  }

  return (
    <div id='detail' className='row'>
      <div className='col-5'>
        <img
          id='detailKuva'
          src={valittuKirja.kuva}
          alt='kirjan kansikuva'
        ></img>
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
          <Link
            className='backToList'
            to='/'
            onClick={e => close(valittuKirja)}
          >
            Takaisin listaukseen
          </Link>
        </button>
      </div>
      <div className='col-3'></div>
      <div className='col-4'>
        <p>Hinta: {valittuKirja.hinta}€</p>
        <button
          className='btn'
          type='button'
          onClick={function (event) {
            addToCart(valittuKirja)
            notify()
          }}
        >
          <img id='pieni' src={karry} alt='ostoskärry' />
        </button>
        <ToastContainer
          position='bottom-right'
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  )
}
