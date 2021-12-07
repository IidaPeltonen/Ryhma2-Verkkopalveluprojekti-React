import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
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

  /* return (
    <div className='container'>
      <h2 id='otsikko keskita'>Tilaukset</h2><br />
      <div className='row'>
        <ul>
          {tilaukset?.map(tilaus => (
            <li key={tilaus.tilausnro}>
              <b><h2>Tilausnro: {tilaus.tilausnro}</h2></b>
              <p><b>Tilauksen tila:</b> {tilaus.tila}   <b>Tilausaika: </b>{tilaus.pvm} </p>
              <p><b>Asiakkaan tunnus:</b> {tilaus.astunnus} <b>Asiakas: </b>{tilaus.asetunimi} {tilaus.assukunimi}</p>
              <hr />
              <p>Tuote: {tilaus.kirjanimi} {tilaus.kpl} kpl</p>
              <hr />
               <div className="row">
               <ul>
                 {tilaukset?.map(tilaus => (
                   <li key={tilaus.kirjaid}>
                   <p>Tuote: {tilaus.kirjanimi} {tilaus.kpl} kpl</p>
                   <hr />
                 </li>
                 ))}
                </ul>
              </div> 
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) */

  let tilausnro = 0;

  return (
    <div className='container'>
      <h2 id='otsikko keskita'>Tilaukset</h2><br />
      <div className='row'>
        {tilaukset?.map(tilaus => {
          if (tilausnro != tilaus.tilausnro) {
            {tilausnro = tilaus.tilausnro}
            return (
              <>
              <b><h2>Tilausnro: {tilaus.tilausnro}</h2></b>
              <p><b>Tilauksen tila:</b> {tilaus.tila}   <b>Tilausaika: </b>{tilaus.pvm} </p>
              <p><b>Asiakkaan tunnus:</b> {tilaus.astunnus} <b>Asiakas: </b>{tilaus.asetunimi} {tilaus.assukunimi}</p>
              <hr />
              <p>{tilaus.kirjanimi} {tilaus.kpl} kpl</p>
              <hr />
              </>
            )
            } else {
              return (
                      <>
                        <p>{tilaus.kirjanimi} {tilaus.kpl} kpl</p>
                        <hr />
                      </>
                    )
              }
            })}
          
      </div>
    </div>
  )

}

export default Tilaus 