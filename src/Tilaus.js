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
  const [editTilaus, setEditTilaus] = useState('')
  const [editTila, setEditTila] = useState('')

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

  //olemassaolevan tilauksen päivitys, tilaa vain voi muuttaa
  function setEditedTilaus(tilaus) {
    setEditTilaus(tilaus)
    setEditTila(tilaus?.tila)
  }

  function paivita(e) {
    e.preventDefault()
    const json = JSON.stringify({
      tilausnro: editTilaus.tilausro,
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
        ].tila = editTila
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
              <b><h2>Tilausnro: {editTilaus.tilausnro !== tilaus.tilausnro && tilaus.tilausnro}</h2></b>
              <p><b>Tilauksen tila:</b> {editTilaus.tilausnro !== tilaus.tilausnro && tilaus.tila}
              </p>
              {/* EI TOIMI
              {editTilaus.tilausnro === tilaus.tilausnro && (
                <form onSubmit={{paivita}}>
                  <input
                    placeholder='tila'
                    value={editTila}
                    onChange={e => setEditTila(e.target.value)}
                  ></input>
                  <button className="btn adminbutton">Päivitä tila</button>
                  <button className="btn adminbutton" type="button" onClick={() => setEditedTilaus(null)}>Peruuta</button>
                  </form>
              )}
              {editTilaus === null && (
              <button className='edit btn adminbutton' onClick={() => setEditedTilaus(tilaus)}>
                Muokkaa
              </button> 
            )}*/}
              <p><b>Tilausaika: </b>{editTilaus.tilausnro !== tilaus.tilausnro && tilaus.pvm} </p>
              <p><b>Asiakkaan tunnus:</b> {editTilaus.tilausnro !== tilaus.tilausnro && tilaus.astunnus} <b>
                Asiakas: </b>{editTilaus.tilausnro !== tilaus.tilausnro && tilaus.asetunimi} {editTilaus.tilausnro !== tilaus.tilausnro && tilaus.assukunimi}
                {/* siirretty omalle sivulle
                <button className='delete' onClick={() => removeTilaus(tilaus.tilausnro)}>
                    Poista tilaus
                </button>   */}</p> 
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