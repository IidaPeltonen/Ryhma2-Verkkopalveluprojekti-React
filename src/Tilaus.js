import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './inc/styles/Admin.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function notifyDelRow() {
  toast('Tilausrivi poistettu!')
}

function notifyEdit() {
  toast('Tilauksen tila vaihdettu!')
}

function notifyDel() {
  toast('Tilaus poistettu!')
}

function Tilaus ({ url }) {
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
      .get(url + 'php/tilaus/indexTilaus.php')
      .then(response => {
        setTilaukset(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }, [])

  //olemassaolevan tilauksen poisto
  function remove(tilausnro) {
    const json = JSON.stringify({ tilausnro: tilausnro })
    axios
      .post(url + 'php/tilaus/deleteTilaus.php', json, {
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

    //olemassaolevan tilausrivin poisto
    function removeRivi(tilausnumero, kirjaid) {
      const json = JSON.stringify({ tilausnro: tilausnumero, kirjaid: kirjaid })
      axios
        .post(url + 'php/tilaus/deleteTilausrivi.php', json, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          const newListWithoutRemoved = tilaukset.filter(tilaus => tilaus.kirjaid !== kirjaid && tilaus.asid !== asid)
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
      tila: editTila,
    })
    axios
      .post(url + 'php/tilaus/updateTilaus.php', json, {
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
      <ul>
        {tilaukset?.map(tilaus => {
          if (numero != tilaus.tilausnro) {
            {numero = tilaus.tilausnro}
            return (
          <li key ={tilaus.tilausnro}>
            <b><p>Tilausnumero: {editTilaus?.tilausnro !== tilaus.tilausnro && tilaus.tilausnro}</p></b>
            <p>Asiakastunnus: {tilaus.astunnus}</p>
            <p>Asiakkaan nimi: {tilaus.asetunimi} {tilaus.assukunimi}</p>
            <p>Tilauspvm: {editTilaus?.tilausnro !== tilaus.tilausnro && tilaus.pvm}</p>
            <p>Tila: {editTilaus?.tilausnro !== tilaus.tilausnro && tilaus.tila}</p>
            {editTilaus?.tilausnro === tilaus.tilausnro && (
              <form onSubmit={paivita}>
                Anna uusi tilakoodi: <input
                className='admininput align-middle'
                  placeholder='tila'
                  value={editTila}
                  onChange={e => setEditTila(e.target.value)}
                ></input>
                <button className="btn adminbutton"onClick={function (event) {
              notifyEdit()
            }}>Tallenna</button>
                <button className="btn adminbutton" type="button" onClick={() => setEditedTilaus(null)}>Peruuta</button>
              </form>
            )}
            <button className='btn adminbutton' onClick={function (event) {
              notifyDel()
              remove(tilaus.tilausnro)
            }}>
              Poista tilaus
            </button>
            {editTilaus === null && (
              <button className='btn adminbutton' onClick={() => setEditedTilaus(tilaus)}>
                Muokkaa tilaa
              </button>
            )}
             <hr />
              <p>{tilaus.kirjanimi} 
              {tilaus.kpl} kpl  
                <button className='btn adminbutton ms-2' onClick={function (event) {
              notifyDelRow()
              removeRivi(tilaus.tilausnro, tilaus.kirjaid)
            }}>
                    Poista rivi
                </button>  
              </p>
              <hr />
          </li>
            )} else {
              return (
                <>
                  <p>{tilaus.kirjanimi} {tilaus.kpl} kpl 
                    <button className='btn adminbutton ms-2' onClick={function (event) {
              notifyDelRow()
              removeRivi(tilaus.tilausnro, tilaus.kirjaid)
            }}>
                      Poista rivi
                    </button>
                  </p>
                  <hr />
                </>
              )
            }
            })}
      </ul>
      </div>
    </div>
  )
}

export default Tilaus
