import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function Tilaus({ url }) {
  const [tilaukset, setTilaukset] = useState([])
  const [tilaus, setTilaus] = useState('');
  const [tilausnro, setTilausnro] = useState('');
  const [asid, setAsid] = useState('');
  const [pvm, setPvm] = useState('');
  const [tila, setTila] = useState('');
  const [editTilaus, setEditTilaus] = useState(null)
  const [editTilausnro, setEditTilausnro] = useState('');
  const [editAsid, setEditAsid] = useState('');
  const [EditTila, setEditTila] = useState('');

  useEffect(() => {
    axios
      .get(url + 'indexTilaus.php')
      .then(response => {
        setTilaukset(response.data)
        console.log(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }, [])


  //uuden tallennus
  function tallenna(e) {
    e.preventDefault()
    const json = JSON.stringify({
      tilausnro: tilausnro,
      asid: asid,
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

  //olemassaolevan poisto
  function remove(tilausnro) {
    const json = JSON.stringify({ tilausnro: tilausnro })
    axios
      .post(url + 'deleteTilaus.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
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
    setEditTila(tilaus?.tila)
  }

  function paivita(e) {
    e.preventDefault()
    const json = JSON.stringify({
      tilausnro: editTilaus.tilausnro,
      asid: editAsid,
      tila: EditTila,
    })
    axios
      .post(url + 'updateTilaus.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        tilaukset[
            tilaukset.findIndex(tilaus => tilaus.tilausnro === editTilaus.tilausnro)
        ].asid = editAsid
        tilaukset[
            tilaukset.findIndex(tilaus => tilaus.tilausnro === editTilaus.tilausnro)
        ].tila = EditTila
        setTilaukset([...tilaukset])
        setEditedTilaus(null)
      })
      .catch(error => {
        alert(error.response ? error.response.data.error : error)
      })
  }

  return (
    <div className='container-fluid'>
      <h2 id='otsikko keskita'>Kaikki tilaukset </h2>
      <div className="row">
      <form onSubmit={tallenna}>
        <label className="col-12 ps-0 mb-2">Lisää tilaus</label>
        <input
          value={asid}
          className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
          placeholder='asiakasid'
          onChange={e => setAsid(e.target.value)}
        />
        <input
          value={tila}
          className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
          placeholder='tilauksen tila'
          onChange={e => setTila(e.target.value)}
        />
         <div className="row">
          <button className="btn adminbutton col-sm-2 col-md-1 ms-2 mt-3">Tallenna
          </button>
          </div>
      </form>
      </div>
      <ol>
        {tilaukset?.map(tilaus => (
          <li key={tilaus.asid}>
            <p>{editTilaus?.tilausnro !== tilaus.tilausnro && tilaus.asid}</p>
             <p>{editTilaus?.tilausnro !== tilaus.tilausnro && tilaus.pvm}</p>  
            <p>{editTilaus?.tilausnro !== tilaus.tilausnro && tilaus.tila}</p>
            {editTilaus?.tilausnro === tilaus.tilausnro && (
              <form onSubmit={paivita}>
                <input
                  placeholder='Asid'
                  value={editAsid}
                  onChange={e => setEditAsid(e.target.value)}
                ></input>
                <input
                  placeholder='tila'
                  value={EditTila}
                  onChange={e => setEditTila(e.target.value)}
                ></input>
                <button>Tallenna</button>
                <button type="button" onClick={() => setEditedTilaus(null)}>Peruuta</button>
              </form>
            )}
            <button className='delete' onClick={() => remove(tilaus.tilausnro)}>
              Poista
            </button>
            {editTilaus === null && (
              <button className='edit' onClick={() => setEditedTilaus(tilaus)}>
                Muokkaa
              </button>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Tilaus