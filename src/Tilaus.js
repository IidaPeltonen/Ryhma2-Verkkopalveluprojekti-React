import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './inc/styles/Admin.css'

function Tilaus ({ url }) {
  const [tilaukset, setTilaukset] = useState([])
  const [tilaus, setTilaus] = useState('')
  const [editTilaus, setEditTilaus] = useState(null)
  //tilauksen muuttujat
  //const [tilausnro, setTilausnro] = useState('')
  const [asid, setAsid] = useState('')
  const [pvm, setPvm] = useState('') //tarvitaanko, jos tulee automaattina?
  const [tila, setTila] = useState('')
  const [editTilausnro, setEditTilausnro] = useState('') 
  const [editAsid, setEditAsid] = useState('')
  const [editPvm, setEditPvm] = useState('') //tarvitaanko, jos tulee automaattina?
  const [editTila, setEditTila] = useState('')
  //tilausrivin muuttujat
  const [tilausnro2, setTilausnro2] = useState('')
  const [kirjaid, setKirjaid] = useState('') 
  const [kpl, setKpl] = useState('')
  const [editTilausnro2, setEditTilausnro2] = useState('') //tarvitaanko, jos ei saa editoida?
  const [editKirjaid, setEditKirjaid] = useState('') //tarvitaanko, jos ei saa editoida?
  const [editKpl, setEditKpl] = useState('')

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


  /*   //TULEEKO NÄMÄ ERIKSEEN VAI OMAAN?
    //uuden tallennus tilaus
  function tallennaTilaus(e) {
    e.preventDefault()
    const json = JSON.stringify({
      tilausnro: tilausnro,
      asid: asid,
      pvm: pvm,
      tila: tila,
    })
    axios
      .post(url + 'addTilaus.php', json, {
        headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(response => {
      setTilaukset(tilaukset => [...tilaukset, response.data])
      setTilaus('')
    })
    .catch(error => {
      alert(error.response.data.error)
    })
  }

   function tallennaTilausrivi(e) {
    e.preventDefault()
    const json = JSON.stringify({
      tilausnro2: tilausnro, 
      kirjaid: kirjaid,
      kpl: kpl
    })
    axios
      .post(url + 'addTilausrivi.php', json, {
        headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(response => {
      setTilaukset(tilaukset => [...tilaukset, response.data])
      setTilaus('')
    })
    .catch(error => {
      alert(error.response.data.error)
    })
  } */

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