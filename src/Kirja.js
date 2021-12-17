import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './inc/styles/Admin.css'

function Kirja ({ url }) {
  const [items, setItems] = useState([])
  const [item, setItem] = useState('')
  const [kirjanimi, setKirjanimi] = useState('')
  const [kirjailija, setKirjailija] = useState('')
  const [vuosi, setVuosi] = useState('')
  const [kieli, setKieli] = useState('')
  const [kustantaja, setKustantaja] = useState('')
  const [kuvaus, setKuvaus] = useState('')
  const [hinta, setHinta] = useState('')
  const [saldo, setSaldo] = useState('')
  const [kuva, setKuva] = useState(
    'https://www.students.oamk.fi/~n0peii00/kuvia/tyhja.png'
  )
  const [categories, setCategories] = useState([])
  const [category_name, setCategory_name] = useState('')
  const [category_id, setCategory_id] = useState('')
  const [editItem, setEditItem] = useState(null)
  const [editKirjanimi, setEditKirjanimi] = useState('')
  const [editKirjailija, setEditKirjailija] = useState('')
  const [editVuosi, setEditVuosi] = useState('')
  const [editKieli, setEditKieli] = useState('')
  const [editKustantaja, setEditKustantaja] = useState('')
  const [editKuvaus, setEditKuvaus] = useState('')
  const [editHinta, setEditHinta] = useState('')
  const [editSaldo, setEditSaldo] = useState('')
  const [editKuva, setEditKuva] = useState('')
  const [editCategory_id, setEditCategory_id] = useState('')

  //hakee kaikki
  useEffect(() => {
    axios
      .get(url + 'php/kirja/index.php')
      .then(response => {
        setItems(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }, [])

  // hakee olemassa olevat kategoriat
  useEffect(() => {
    const json = JSON.stringify({ id: category_id, name: category_name })
    axios
      .post(url + 'php/kategoria/tuoteKategoriaLinkit.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        const json = response.data
        setCategories(json)
        setCategory_id(json[0])
        setCategory_name(json[0])
      })
      .catch(error => {
        alert(error.response ? error.response.data.error : error)
      })
  }, [])

  //uuden kirjan tallennus
  function tallenna (e) {
    e.preventDefault()
    const json = JSON.stringify({
      kirjanimi: kirjanimi,
      kirjailija: kirjailija,
      vuosi: vuosi,
      kieli: kieli,
      kustantaja: kustantaja,
      kuvaus: kuvaus,
      hinta: hinta.replace(',', '.'),
      saldo: saldo,
      kuva: kuva,
      category_id: category_id
    })
    axios
      .post(url + 'php/kirja/addKirja.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        setItems(items => [...items, response.data])
        setItem('')
      })
      .catch(error => {
        alert(error.response.data.error)
      })
  }

  //olemassaolevan kirjan poisto
  function remove (id) {
    const json = JSON.stringify({ kirjaid: id })
    axios
      .post(url + 'php/kirja/deleteKirja.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        const newListWithoutRemoved = items.filter(item => item.kirjaid !== id)
        setItems(newListWithoutRemoved)
      })
      .catch(error => {
        alert(error.response ? error.response.data.error : error)
      })
  }

  //olemassaolevan kirjan päivitys
  function setEditedItem (item) {
    setEditItem(item)
    setEditKirjanimi(item?.kirjanimi)
    setEditKirjailija(item?.kirjailija)
    setEditVuosi(item?.vuosi)
    setEditKieli(item?.kieli)
    setEditKustantaja(item?.kustantaja)
    setEditKuvaus(item?.kuvaus)
    setEditHinta(item?.hinta)
    setEditSaldo(item?.saldo)
    setEditKuva(item?.kuva)
    setEditCategory_id(item?.category_id)
  }

  //olemassaolevan päivitys
  function paivita (e) {
    e.preventDefault()
    const json = JSON.stringify({
      kirjaid: editItem.kirjaid,
      kirjanimi: editKirjanimi,
      kirjailija: editKirjailija,
      vuosi: editVuosi,
      kieli: editKieli,
      kustantaja: editKustantaja,
      kuvaus: editKuvaus,
      hinta: editHinta.replace(',', '.'),
      saldo: editSaldo,
      kuva: editKuva,
      category_id: editCategory_id
    })
    axios
      .post(url + 'php/kirja/updateKirja.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        ;<br></br>
        items[
          items.findIndex(item => item.kirjaid === editItem.kirjaid)
        ].kirjanimi = editKirjanimi
        items[
          items.findIndex(item => item.kirjaid === editItem.kirjaid)
        ].kirjailija = editKirjailija
        items[
          items.findIndex(item => item.kirjaid === editItem.kirjaid)
        ].vuosi = editVuosi
        items[
          items.findIndex(item => item.kirjaid === editItem.kirjaid)
        ].kieli = editKieli
        items[
          items.findIndex(item => item.kirjaid === editItem.kirjaid)
        ].kustantaja = editKustantaja
        items[
          items.findIndex(item => item.kirjaid === editItem.kirjaid)
        ].kuvaus = editKuvaus
        items[
          items.findIndex(item => item.kirjaid === editItem.kirjaid)
        ].hinta = editHinta
        items[
          items.findIndex(item => item.kirjaid === editItem.kirjaid)
        ].saldo = editSaldo
        items[
          items.findIndex(item => item.kirjaid === editItem.kirjaid)
        ].kuva = editKuva
        items[
          items.findIndex(item => item.kirjaid === editItem.kirjaid)
        ].category_id = editCategory_id
        setItems([...items])
        setEditedItem(null)
      })
      .catch(error => {
        alert(error.response ? error.response.data.error : error)
      })
  }

  return (
    <div className='container-fluid'>
      <h2 id='otsikko keskita'>Kaikki kirjat</h2>
      <div className='row'>
        <form onSubmit={tallenna}>
          <label className='col-12 ps-0 mb-2'>Lisää kirja</label>
          <input
            value={kirjanimi}
            className='col-sm-10 col-md-5 mt-2 me-2 mb-2'
            placeholder='nimi'
            onChange={e => setKirjanimi(e.target.value)}
          />
          <input
            value={kirjailija}
            className='col-sm-10 col-md-5 mt-2 me-2 mb-2'
            placeholder='kirjailija'
            onChange={e => setKirjailija(e.target.value)}
          />
          <input
            value={vuosi}
            className='col-sm-10 col-md-5 mt-2 me-2 mb-2'
            placeholder='vuosi'
            onChange={e => setVuosi(e.target.value)}
          />
          <input
            value={kieli}
            className='col-sm-10 col-md-5 mt-2 me-2 mb-2'
            placeholder='kieli'
            onChange={e => setKieli(e.target.value)}
          />
          <input
            value={kustantaja}
            className='col-sm-10 col-md-5 mt-2 me-2 mb-2'
            placeholder='kustantaja'
            onChange={e => setKustantaja(e.target.value)}
          />
          <input
            value={kuvaus}
            className='col-sm-10 col-md-5 mt-2 me-2 mb-2'
            placeholder='kuvaus'
            onChange={e => setKuvaus(e.target.value)}
          />
          <input
            value={hinta}
            className='col-sm-10 col-md-5 mt-2 me-2 mb-2'
            placeholder='hinta'
            onChange={e => setHinta(e.target.value)}
          />
          <input
            value={saldo}
            className='col-sm-10 col-md-5 mt-2 me-2 mb-2'
            placeholder='saldo'
            onChange={e => setSaldo(e.target.value)}
          />
          <input
            value={kuva}
            className='col-sm-10 col-md-5 mt-2 me-2 mb-2'
            placeholder='https://www.students.oamk.fi/~n0peii00/kuvia/tyhja.png'
            onChange={e => setKuva(e.target.value)}
          />
          <select
            placeholder='category_id'
            className='col-sm-10 col-md-5 mt-2 me-2 mb-2'
            value={category_id}
            onChange={e => setCategory_id(e.target.value)}
          >
            <option>Kategoria</option>
            {categories.map(category => (
              <option key={category.id}>
                {category.id} {category.name}
              </option>
            ))}
          </select>
          <div className='row'>
            <button className='btn adminbutton col-sm-2 col-md-1 ms-2 mt-3'>
              Tallenna
            </button>
          </div>
        </form>
      </div>
      <table id='kaikki' className='table col-12'>
        <thead>
          <tr>
            <th scope='col'>Nimi</th>
            <th scope='col'>Kirjailija</th>
            <th scope='col'>Vuosi</th>
            <th scope='col'>Kieli</th>
            <th scope='col'>Kustantaja</th>
            <th scope='col'>Kuvaus</th>
            <th scope='col'>Hinta</th>
            <th scope='col'>Saldo</th>
            <th scope='col'>Kuvan osoite</th>
            <th scope='col'>Kategoria</th>
          </tr>
        </thead>
        {items?.map(item => (
          <tbody key={item.kirjaid}>
            <tr>
              <td id='notbold'>
                {editItem?.id !== item.kirjaid && item.kirjanimi}
              </td>
              <td id='notbold'>
                {editItem?.id !== item.kirjaid && item.kirjailija}
              </td>
              <td id='notbold'>
                {editItem?.id !== item.kirjaid && item.vuosi}
              </td>
              <td id='notbold'>
                {editItem?.id !== item.kirjaid && item.kieli}
              </td>
              <td id='notbold'>
                {editItem?.id !== item.kirjaid && item.kustantaja}
              </td>
              <td id='notbold'>
                {editItem?.id !== item.kirjaid && item.kuvaus}
              </td>
              <td id='notbold'>
                {editItem?.id !== item.kirjaid && item.hinta}
              </td>
              <td id='notbold'>
                {editItem?.id !== item.kirjaid && item.saldo}
              </td>
              <td id='notbold'>{editItem?.id !== item.kirjaid && item.kuva}</td>
              <td id='notbold'>
                {editItem?.id !== item.kirjaid && item.category_id}
              </td>
            </tr>
            <tr id='notbold'>
              {editItem?.kirjaid === item.kirjaid && (
                <td>
                  <form onSubmit={paivita}>
                    <input
                      placeholder='Kirjan nimi'
                      value={editKirjanimi}
                      onChange={e => setEditKirjanimi(e.target.value)}
                    ></input>

                    <input
                      placeholder='Kirjailija'
                      value={editKirjailija}
                      onChange={e => setEditKirjailija(e.target.value)}
                    ></input>
                    <input
                      placeholder='Vuosi'
                      value={editVuosi}
                      onChange={e => setEditVuosi(e.target.value)}
                    ></input>
                    <input
                      placeholder='Kieli'
                      value={editKieli}
                      onChange={e => setEditKieli(e.target.value)}
                    ></input>
                    <input
                      placeholder='Kustantaja'
                      value={editKustantaja}
                      onChange={e => setEditKustantaja(e.target.value)}
                    ></input>
                    <input
                      placeholder='Kuvaus'
                      value={editKuvaus}
                      onChange={e => setEditKuvaus(e.target.value)}
                    ></input>
                    <input
                      placeholder='Hinta'
                      value={editHinta}
                      onChange={e => setEditHinta(e.target.value)}
                    ></input>
                    <input
                      placeholder='Saldo'
                      value={editSaldo}
                      onChange={e => setEditSaldo(e.target.value)}
                    ></input>
                    <input
                      placeholder='Kuvan osoite'
                      value={editKuva}
                      onChange={e => setEditKuva(e.target.value)}
                    ></input>

                    <select
                      placeholder='Category_id'
                      value={editCategory_id}
                      onChange={e => setEditCategory_id(e.target.value)}
                    >
                      <option>Valitse</option>
                      {categories.map(category => (
                        <option key={category.id}>
                          {category.id} {category.name}
                        </option>
                      ))}
                    </select>

                    <td id='inrow'>
                      <button className='btn adminbutton'>Tallenna</button>
                      <button
                        className='btn adminbutton'
                        onClick={() => setEditedItem(null)}
                      >
                        Peruuta
                      </button>
                    </td>
                  </form>
                </td>
              )}

              <button
                className='delete btn adminbutton'
                onClick={() => remove(item.kirjaid)}
              >
                Poista
              </button>
              {editItem === null && (
                <button
                  className='edit btn adminbutton'
                  onClick={() => setEditedItem(item)}
                >
                  Muokkaa
                </button>
              )}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}

export default Kirja
