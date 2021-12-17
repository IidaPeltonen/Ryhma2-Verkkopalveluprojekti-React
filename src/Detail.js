import React from 'react'
import './inc/styles/Details.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useHistory } from 'react-router-dom'

//yhden kirjan tiedot
export default function Detail ({ kirja, addToCart }) {
  const history = useHistory()

  //toaster
  function notify () {
    toast('Kirja lisätty ostoskoriin!')
  }

  return (
    <div className='container'>
      <div className='row detailreuna'>
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
          {/* Näytetään varastosaldo-indikaattori, jos isompi kun 0 näytetään vihreä pallo */}
          {kirja.saldo > 0 ? (
            <p>
              Varastossa:{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='#1b840e'
                className='bi bi-circle-fill'
                viewBox='0 0 16 16'
              >
                <circle cx='8' cy='8' r='8' />
              </svg>
            </p>
           /* Näytetään varastosaldo-indikaattori, jos pienempi kun 0 näytetään punainen pallo */
          ) : (   
            <p>
              Ei saatavilla:{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='#ff0000'
                className='bi bi-circle-fill'
                viewBox='0 0 16 16'
              >
                <circle cx='8' cy='8' r='8' />
              </svg>
            </p>
          )}
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
      <div className='row'>
        <div className='col-1 d-none d-md-block'></div>
        <div className='col-sm-12 col-md-11'>
          <button
            className='btn detailbutton ms-md-4 mt-3 mb-3 align-middle'
            onClick={history.goBack}
          >
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
