import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import karry from './img/karry.png'

export default function Category ({ url, category, addToCart, Detail }) {
  const [kirjat, setKirjat] = useState([])
  const [valittuKirja, setValittuKirja] = useState(null)

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
            <div className='container'>
              <div key={kirja.kirjaid} className='row table-responsive-md'>
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
                    onClick={e => addToCart(kirja)}
                  >
                    <img id='pieni' src={karry} alt='ostoskärry' />
                  </button>
                </div>
                <div className='col-4'>
                
                </div>
                <div className='col-8'>
                  
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
