import React from 'react'
import './inc/styles/Details.css'
import karry from './img/karry.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useHistory } from 'react-router-dom'

//yhden kirjan tiedot
export default function Detail({ kirja, addToCart }) {
  const history = useHistory()
  function notify() {
    toast('Kirja lisätty ostoskoriin!')
  }

  return (
    <div className='container'>
      <div className="row detailreuna">
        <div className='col-1'></div>
        <div className='col-sm-12 col-md-4'>
          <img id='detailKuva' src={kirja.kuva} alt='kirjan kansikuva'></img>
        </div>
        <div className='col-sm-12 col-md-6'>
          <h1 className='centerh1'>{kirja.kirjanimi}</h1>
          <h2 className='centerh2'>{kirja.kirjailija}</h2>
          <p>{kirja.kuvaus}</p>
          <p>Julkaisuvuosi: {kirja.vuosi} </p>
          <p>Kieli: {kirja.kieli}</p>
          <p>Kustantaja: {kirja.kustantaja}</p>
          <p>Hinta: {kirja.hinta}€</p>
          <button
            className='btn detailbutton mt-4'
            type='button'
            onClick={function (event) {
              addToCart(kirja)
              notify()
            }}
          >
            Lisää ostoskoriin
          </button>
        </div>
        <div className='col-1'></div>
      </div>
      <div className="row">
        <div className="col-1 d-none d-md-block"></div>
        <div className="col-sm-12 col-md-11">
          <button className='btn detailbutton ms-md-4 mt-3 mb-3 align-middle' onClick={history.goBack}>
            Takaisin listaukseen
          </button>
        </div>

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
