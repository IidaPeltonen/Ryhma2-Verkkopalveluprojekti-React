import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import './inc/styles/Admin.css'

function Tilaus ({ url }) {
  const [tilaukset, setTilaukset] = useState([])
  const [tilaus, setTilaus] = useState('')
  const [tilausnro, setTilausnro] = useState('')
  const [asid, setAsid] = useState('')
  const [pvm, setPvm] = useState('')
  const [tila, setTila] = useState('')
  const [asiakas, setAsiakas] = useState('')
  const [kirja, setKirja] = useState('')
  const [tilausrivi, setTilausrivi] = useState('')

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
        <ol>
          {tilaukset?.map(tilaus => (
            <li key={tilaus.tilausnro}>
              <b><p>Tilausnro: {tilaus.tilausnro}</p></b>
              {/* <p>Asiakasid: {tilaus.asid}</p> */}
              <p>Asiakkaan tunnus: {tilaus.astunnus}</p>
              <p>Asiakkaan etunimi: {tilaus.asetunimi}</p>
              <p>Asiakkaan sukunimi: {tilaus.assukunimi}</p><br />
              <p>Tilausaika: {tilaus.pvm}</p>
              <p>Tilauksen tila: {tilaus.tila}</p>
              <ol>
             {tilaukset?.map(tilaus => (
                <li key={tilaus.tilausnro}>
                <p>Tuote: {tilaus.kirjanimi}</p>
                <p>Kpl: {tilaus.kpl}</p>
                </li>
              ))} 
             </ol>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Tilaus 