import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import karry from './img/karry.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Category ({ url, category, addToCart, Detail }) {
  const [kirjat, setKirjat] = useState([])
  const [valittuKirja, setValittuKirja] = useState(null)

  function notify() {
    toast("Kirja lisätty ostoskoriin!");
  }

  useEffect(() => {
    if (category !== null) {
      axios
        .get(url + '/tuoteKategoriaTuotteet.php/' + category?.id)
        .then(response => {
          const json = response.data
          setKirjat(json)
        })
        .catch(error => {
          if (error.response === undefined) {
            alert(error)
          } else {
            alert(error.response.data.error)
          }
        })
    }
  }, [category])

  function close () {
    setValittuKirja(null)
  }

  if (valittuKirja != null) {
    return (
      <Detail
        valittuKirja={valittuKirja}
        addToCart={addToCart}
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
        <h2 id='otsikko'>{category?.name}</h2>
        <ol id='kaikki'>
          {kirjat.map(kirja => (
            <div className='container' key={kirja.kirjaid} d>
              <div className='row table-responsive-md'>
                <div className='col-2' onClick={e => setValittuKirja(kirja)}>
                  <img id='kirja' src={kirja.kuva} alt='kirjan kansikuva' />
                </div>
                <div className='col-2'>
                  <b>{kirja.kirjanimi}</b>
                </div>
                <div className='col-2'>
                  <b>{kirja.kirjailija}</b>
                </div>
                <div className='col-4'>
                  {kirja.kuvaus}
                </div>
                <div className='col-1'>
                  <b>{kirja.hinta}€</b>
                </div>
                <div className='col-1'>
                  <button
                    className='btn'
                    type='button'
                    onClick={function(event){addToCart(kirja);notify()}}
                  >
                    <img id='pieni' src={karry} alt='ostoskärry' />
                  </button>
                  <ToastContainer
                    position="bottom-right"
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
              <br /><br />
            </div>
            
          ))}
        </ol>
      </div>
    )
  }
}
