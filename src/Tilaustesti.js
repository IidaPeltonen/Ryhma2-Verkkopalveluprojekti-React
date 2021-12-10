
// EDITIN NÄYTTÖKENTTIEN TEKO KESKEN, SAA JATKAA

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './inc/styles/Admin.css'

function Tilaustesti ({ url }) {
  const [tilaukset, setTilaukset] = useState([])
  const [tilausrivi, setTilausrivi] = useState('')
  const [editTilausrivi, setEditTilausrivi] = useState(null)
  //tilauksen muuttujat
  const [tilausnumero, setTilausnumero] = useState('')
  const [asid, setAsid] = useState('')
  const [pvm, setPvm] = useState('') //tarvitaanko, jos tulee automaattina?
  const [tila, setTila] = useState('')
  const [editTilausnro, setEditTilausnro] = useState('')
  const [editAsid, setEditAsid] = useState('')
  const [editPvm, setEditPvm] = useState('') //tarvitaanko, jos tulee automaattina?
  const [editTila, setEditTila] = useState('')
  //tilausrivin muuttujat
  const [kirjaid, setKirjaid] = useState('')
  const [kpl, setKpl] = useState('')
  const [editTilausnro2, setEditTilausnro2] = useState('') //tarvitaanko, jos ei saa editoida?
  const [editKirjaid, setEditKirjaid] = useState('') //tarvitaanko, jos ei saa editoida?
  const [editKpl, setEditKpl] = useState('')
  let numero = 1;

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

  //olemassaolevan tilausrivin poisto
  function removeRivi(tilausnumero, kirjaid) {
    const json = JSON.stringify({ tilausnro: tilausnumero, kirjaid: kirjaid })
    axios
      .post(url + 'deleteTilausrivi.php', json, {
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

  //olemassaolevan tilausrivin päivitys
  function setEditedTilausrivi(tilausrivi) {
    setEditTilausrivi(tilausrivi)
    setEditKpl(tilausrivi?.kpl)
    setEditKirjaid(tilausrivi?.kirjaid)
  }
  // update tilausrivi set kpl=:kpl 
  //         where tilausnro=:tilausnro AND kirjaid=:kirjaid');
  function paivitaRivi(e) {
    e.preventDefault()
    const json = JSON.stringify({
      tilausnro: numero, //ei muuteta
      kirjaid: editKirjaid, //ei muuteta
      kpl: editKpl
    })
    axios
      .post(url + 'updateTilausrivi.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        <br></br>
        tilaukset[
          tilaukset.findIndex(tilaus => tilaus.tilausnro === editTilausrivi.tilausnro && tilaus.kirjaid === editTilausrivi.kirjaid) // eimuuteta
        ].kpl = editKpl

        setTilaukset([...tilaukset])
        setEditedTilausrivi(null)
      })
      .catch(error => {
        alert(error.response ? error.response.data.error : error)
      })
  }

  let tillausnro = 0;

  return (
    <div className='container'>
      <h2 id='otsikko keskita'>Tilaukset</h2><br />
      <div className='row'>
        {tilaukset?.map(tilaus => {
          if (tillausnro != tilaus.tilausnro) {
            { tillausnro = tilaus.tilausnro }
            return (
              <>
                <b><h2>Tilausnro: {tilaus.tilausnro}</h2></b>
                <p><b>Tilauksen tila:</b> {tilaus.tila}</p>
                <p><b>Tilausaika: </b>{tilaus.pvm} </p>
                <p><b>Asiakkaan tunnus:</b> {tilaus.astunnus} <b>
                  Asiakas: </b>{tilaus.asetunimi} {tilaus.assukunimi}</p>
                <hr />
                {/* tilaus.tilausnro === editTilausrivi.tilausnro && tilaus.kirjaid === editTilausrivi.kirjaid */}
                <p>{editTilausrivi?.tilausnro !== tilaus.tilausnro && editTilausrivi?.kirjaid !== tilaus.kirjaid && tilaus.kirjanimi}&nbsp;
                  {editTilausrivi?.tilausnro !== tilaus.tilausnro && editTilausrivi?.kirjaid !== tilaus.kirjaid && tilaus.kpl} kpl
                  <button className='delete' onClick={() => removeRivi(tilaus.tilausnro, tilaus.kirjaid)}>
                    Poista rivi
                  </button>
                </p>
                <p>{editTilausrivi?.tilausnro !== tilaus.tilausnro && editTilausrivi?.kirjaid !== tilaus.kirjaid && (
                  
                  <form onSubmit={paivitaRivi}>
                
                  <input
                    placeholder='Kpl'
                    value={editKpl}
                    onChange={e => setEditKpl(e.target.value)}
                  ></input>
                  <button className="btn adminbutton">Tallenna</button>
                  <button className="btn adminbutton" onClick={() => setEditedTilausrivi(null)}>Peruuta</button>
                  </form>
                )}
                {editTilausrivi === null && (
                  <button className='edit btn adminbutton' onClick={() => setEditedTilausrivi(tilaus)}>
                    Muokkaa
                  </button>
                )}
                  </p>
                <hr />
              </>
            )
          } else {
            return (
              <>
                 
                  <p>{editTilausrivi?.tilausnro !== tilaus.tilausnro && editTilausrivi?.kirjaid !== tilaus.kirjaid && tilaus.kirjanimi}&nbsp;
                  {editTilausrivi?.tilausnro !== tilaus.tilausnro && editTilausrivi?.kirjaid !== tilaus.kirjaid && tilaus.kpl} kpl
                  <button className='delete' onClick={() => removeRivi(tilaus.tilausnro, tilaus.kirjaid)}>
                    Poista rivi
                  </button>
                </p>
                <p>{editTilausrivi?.tilausnro !== tilaus.tilausnro && editTilausrivi?.kirjaid !== tilaus.kirjaid && (
                  
                  <form onSubmit={paivitaRivi}>
                
                  <input
                    placeholder='Kpl'
                    value={editKpl}
                    onChange={e => setEditKpl(e.target.value)}
                  ></input>
                  <button className="btn adminbutton">Tallenna</button>
                  <button className="btn adminbutton" onClick={() => setEditedTilausrivi(null)}>Peruuta</button>
                  </form>
                )}
                {editTilausrivi === null && (
                  <button className='edit btn adminbutton' onClick={() => setEditedTilausrivi(tilaus)}>
                    Muokkaa
                  </button>
                )}
                </p>
                <hr />

              </>
            )
          }
        })}

      </div>
    </div>
  )
}

export default Tilaustesti