
// EDITIN NÄYTTÖKENTTIEN TEKO KESKEN, SAA JATKAA

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './inc/styles/Admin.css'

function Tilaustesti ({ url }) {
  const [tilaukset, setTilaukset] = useState([])
  const [tilaus, setTilaus] = useState('')
  const [editTilaus, setEditTilaus] = useState(null)
  //tilauksen muuttujat
  const [tilausnro, setTilausnro] = useState('')
  const [asid, setAsid] = useState('')
  const [pvm, setPvm] = useState('') //tarvitaanko, jos tulee automaattina?
  const [tila, setTila] = useState('')
  const [editTilausnro, setEditTilausnro] = useState('')
  const [editAsid, setEditAsid] = useState('')
  const [editPvm, setEditPvm] = useState('') //tarvitaanko, jos tulee automaattina?
  const [editTila, setEditTila] = useState('')
  let numero = 0;

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

  //olemassaolevan poisto
  function remove(tilausnro) {
    const json = JSON.stringify({ tilausnro: tilausnro })
    axios
      .post(url + 'deleteTilaus.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        const newListWithoutRemoved = tilaukset.filter(tilaus =>
          tilaus.tilausnro !== tilausnro)
        setTilaukset(newListWithoutRemoved)
      })
      .catch(error => {
        alert(error.response ? error.response.data.error : error)
      })
  }

  //olemassaolevan päivitys
  function setEditedTilaus(tilaus) {
    setEditTilaus(tilaus)
    setEditTilausnro(tilaus?.tilausnro)
    setEditAsid(tilaus?.asid)
    //setEditPvm(tilaus?.pvm)
    setEditTila(tilaus?.tila)
  }

  function paivita(e) {
    e.preventDefault()
    const json = JSON.stringify({
      tilausnro: editTilaus.tilausnro,
      asid: editAsid,
      tila: editTila,
    })
    axios
      .post(url + 'updateTilaus.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        tilaukset[
          tilaukset.findIndex(tilaus => tilaus.tilausnro === editTilaus.tilausnro)
        ].tilausnro = editTilausnro
        tilaukset[
          tilaukset.findIndex(tilaus => tilaus.tilausnro === editTilaus.tilausnro)
        ].asid = editAsid
        tilaukset[
          tilaukset.findIndex(tilaus => tilaus.tilausnro === editTilaus.tilausnro)
        ].tila = editTila
        setTilaukset([...tilaukset])
        setEditedTilaus(null)
      })
      .catch(error => {
        alert(error.response ? error.response.data.error : error)
      })
  }

  return (
    <div className='container-fluid'>
      <h2 id='otsikko keskita'>Kaikki tilaukset</h2>
      <div className="row">

        
      <ol>
        {tilaukset?.map(tilaus => (
          <li key={tilaus.userid}>
            <p>Tilausnumero: {editTilaus?.tilausnro !== tilaus.tilausnro && tilaus.tilausnro}</p>
            <p>Asiakasid: {editTilaus?.tilausnro !== tilaus.tilausnro && tilaus.asid}</p>
            <p>Tilauspvm: {editTilaus?.tilausnro !== tilaus.tilausnro && tilaus.pvm}</p>
            <p>Tila: {editTilaus?.tilausnro !== tilaus.tilausnro && tilaus.tila}</p>
            {editTilaus?.tilausnro === tilaus.tilausnro && (
              <form onSubmit={paivita}>
                <input
                  placeholder='tila'
                  value={editTila}
                  onChange={e => setEditTila(e.target.value)}
                ></input>
                <button className="btn adminbutton">Tallenna</button>
                <button className="btn adminbutton" type="button" onClick={() => setEditedTilaus(null)}>Peruuta</button>
              </form>
            )}
            <button className='delete btn adminbutton' onClick={() => remove(tilaus.tilausnro)}>
              Poista
            </button>
            {editTilaus === null && (
              <button className='edit btn adminbutton' onClick={() => setEditedTilaus(tilaus)}>
                Muokkaa
              </button>
            )}
          </li>
        ))}
      </ol>
      </div>
    </div>
  )
}

export default Tilaustesti
