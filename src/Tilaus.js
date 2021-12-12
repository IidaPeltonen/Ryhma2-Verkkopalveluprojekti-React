import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './inc/styles/Admin.css'

function Tilaus ({ url }) {
  const [tilaukset, setTilaukset] = useState([])
  const [tilaus, setTilaus] = useState('')

  //tilauksen muuttujat
  const [tilausnumero, setTilausnumero] = useState('')
  const [asid, setAsid] = useState('')
  const [tila, setTila] = useState('')

  //tilausrivin muuttujat
  const [kirjaid, setKirjaid] = useState('') 
  const [kpl, setKpl] = useState('')


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

  //olemassaolevan tilauksen poisto
  function removeTilaus(tilausnumero) {
    const json = JSON.stringify({ tilausnro: tilausnumero })
    axios
      .post(url + 'deleteTilaus.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        const newListWithoutRemoved = tilaukset.filter(tilaus => tilaus.tilausnro !== tilausnumero)
        setTilaukset(newListWithoutRemoved)
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
              <p><b>Asiakkaan tunnus:</b> {tilaus.astunnus} <b>
                Asiakas: </b>{tilaus.asetunimi} {tilaus.assukunimi}
                <button className='delete' onClick={() => removeTilaus(tilaus.tilausnro)}>
                    Poista tilaus
                </button>  </p> 
              <hr />
              <p>{tilaus.kirjanimi} 
              {tilaus.kpl} kpl  
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