import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import './inc/styles/Admin.css'

function Tilaus ({ url }) {
  const [tilaukset, setTilaukset] = useState([])
  const [tilaus, setTilaus] = useState([])
  const [rivi, setRivi] = useState('')


  useEffect(() => {
    axios
      .get(url + 'indexTilaus.php')
      .then(response => {
        setTilaukset(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }, [])

  return (
    <div className='container'>
      <h2 id='otsikko keskita'>Tilaukset</h2>
      <div className='row'>
        <ul>
          {tilaukset?.map(tilaus => (
            <li key={tilaus.tilausnro}>
              <b><p>Tilausnro: {tilaus.tilausnro}</p></b><p>Tilausaika: {tilaus.pvm}</p><p>Tilauksen tila: {tilaus.tila}</p>
              <p>Asiakkaan tunnus: {tilaus.astunnus}</p><p>Asiakas: {tilaus.asetunimi} {tilaus.assukunimi}</p>
              <div className="row">
               <ul>
                 {tilaukset?.map(tilaus => (
                   <li key={tilaus.kirjaid}>
                   <p>Tuote: {tilaus.kirjanimi}</p>
                   <p>Kpl: {tilaus.kpl}</p>
                 </li>
                 ))}
                </ul>
              </div> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Tilaus 