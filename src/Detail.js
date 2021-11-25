import React from 'react'
import './inc/styles/Details.css'
import karry from './img/karry.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useHistory } from 'react-router-dom'

//yhden kirjan tiedot
export default function Detail ({  kirja, addToCart}) {

  const history = useHistory();
  function notify () {
    toast('Kirja lisätty ostoskoriin!')
  }

  return (
    <div id='detail' className='row'>
      <div className='col-5'>
        <img
          id='detailKuva'
          src={kirja.kuva}
          alt='kirjan kansikuva'
        ></img>
      </div>
      <div className='col-1'></div>
      <div className='col-6'>
        <h1 className='centerh1'>{kirja.kirjanimi}</h1>
        <h2 className='centerh2'>{kirja.kirjailija}</h2>
        <p>{kirja.kuvaus}</p>
        <p>Julkaisuvuosi: {kirja.vuosi} </p>
        <p>Kieli: {kirja.kieli}</p>
        <p>Kustantaja: {kirja.kustantaja}</p>
      </div>
      <div className='col-1'></div>
      <div className='col-3'>
        <button className='btn-primary p-2 backtoList' 
        onClick={history.goBack}>
          
            Takaisin listaukseen
          
        </button>
      </div>
      <div className='col-3'></div>
      <div className='col-4'>
        <p>Hinta: {kirja.hinta}€</p>
        <button
          className='btn'
          type='button'
          onClick={function (event) {
            addToCart(kirja)
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
