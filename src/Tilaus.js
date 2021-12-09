
// EDITIN NÄYTTÖKENTTIEN TEKO KESKEN, SAA JATKAA

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './inc/styles/Admin.css'

function Tilaus ({ url }) {
  const [tilaukset, setTilaukset] = useState([])
  const [tilaus, setTilaus] = useState('')
  const [editTilaus, setEditTilaus] = useState(null)
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
function setEditedTilaus(tilaus) {
  setEditTilaus(tilaus)
  setEditKirjaid(kirjaid)
  setEditKpl(tilaus?.kpl)
}

function paivitaRivi(e) {
  e.preventDefault()
  const json = JSON.stringify({
    tilausnumero: tilausnumero, //ei muuteta
    kirjaid: kirjaid, //ei muuteta
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
        tilaukset.findIndex(tilaus => tilaus.tilausnro === editTilaus.tilausnro && tilaus.kirjaid === editTilaus.kirjaid) // eimuuteta
      ].kpl = editKpl
     
      setTilaukset([...tilaukset])
      setEditedTilaus(null)
    })
    .catch(error => {
      alert(error.response ? error.response.data.error : error)
    })
}



  let unuunun = 0;

  return (
    
    <div className='container'>
      <h2 id='otsikko keskita'>Tilaukset</h2><br />
      <div className='row'>
        {tilaukset?.map(tilaus => {
          if (unuunun != tilaus.tilausnro) {
            {unuunun = tilaus.tilausnro}
            return (
              <>
              <b><h2>Tilausnro: {tilaus.tilausnro}</h2></b>
              <p><b>Tilauksen tila:</b> {tilaus.tila}</p>
              <p><b>Tilausaika: </b>{tilaus.pvm} </p>
              <p><b>Asiakkaan tunnus:</b> {tilaus.astunnus} <b>Asiakas: </b>{tilaus.asetunimi} {tilaus.assukunimi}</p> 
              <hr />
              <p>{tilaus.kirjanimi} {tilaus.kpl} kpl  
                <button className='delete' onClick={() => removeRivi(tilaus.tilausnro, tilaus.kirjaid)}>
                    Poista rivi
                </button>  
              </p>
              <hr />
              </>
            )
            } else {
              return (
                      <>
                        <p>{tilaus.kirjanimi} {tilaus.kpl} kpl 
                          <button className='delete' onClick={() => removeRivi(tilaus.tilausnro, tilaus.kirjaid)}>
                            Poista rivi
                          </button>
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

export default Tilaus 