import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Asiakas({ url }) {
  const [asiakkaat, setAsiakkaat] = useState([])
  const [asiakas, setAsiakas] = useState('');
  const [astunnus, setAstunnus] = useState('');
  const [asetunimi, setAsetunimi] = useState('');
  const [assukunimi, setAssukunimi] = useState('');
  const [asosoite, setAsosoite] = useState('');
  const [postinro, setPostinro] = useState('');
  const [postitmp, setPostitmp] = useState('');
  const [puhelin, setPuhelin] = useState('');
  const [email, setEmail] = useState('');
  const [editAsiakas, setEditAsiakas] = useState(null)
  const [editAstunnus, setEditAstunnus] = useState('');
  const [editAsetunimi, setEditAsetunimi] = useState('');
  const [editAssukunimi, setEditAssukunimi] = useState('');
  const [EditAsosoite, setEditAsosoite] = useState('');
  const [EditPostinro, setEditPostinro] = useState('');
  const [EditPostitmp, setEditPostitmp] = useState('');
  const [EditPuhelin, setEditPuhelin] = useState('');
  const [EditEmail, setEditEmail] = useState('');

  useEffect(() => {
    axios
      .get(url + 'indexAsiakas.php')
      .then(response => {
        setAsiakkaat(response.data)
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
      astunnus: astunnus,
      asetunimi: asetunimi,
      assukunimi: assukunimi,
      asosoite: asosoite,
      postinro: postinro,
      postitmp: postitmp,
      puhelin: puhelin,
      email: email
    })
    axios
      .post(url + 'addAsiakas.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        setAsiakkaat(asiakkaat => [...asiakkaat, response.data])
        setAsiakas('')
      })
      .catch(error => {
        alert(error.response.data.error)
      })
  }

  //olemassaolevan poisto
  function remove(asid) {
    const json = JSON.stringify({ asid: asid })
    axios
      .post(url + 'deleteAsiakas.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        const newListWithoutRemoved = asiakkaat.filter(asiakas =>
          asiakas.asid !== asid)
        setAsiakkaat(newListWithoutRemoved)
      })
      .catch(error => {
        alert(error.response ? error.response.data.error : error)
      })
  }

  //olemassaolevan päivitys
  function setEditedAsiakas(asiakas) {
    setEditAsiakas(asiakas)
    setEditAstunnus(asiakas?.astunnus)
    setEditAsetunimi(asiakas?.asetunimi)
    setEditAssukunimi(asiakas?.assukunimi)
    setEditAsosoite(asiakas?.asosoite)
    setEditPostinro(asiakas?.postinro)
    setEditPostitmp(asiakas?.postitmp)
    setEditPuhelin(asiakas?.puhelin)
    setEditPostinro(asiakas?.postinro)
    setEditEmail(asiakas?.email)
  }

  function paivita(e) {
    e.preventDefault()
    const json = JSON.stringify({
      asid: editAsiakas.asid,
      astunnus: editAstunnus,
      asetunimi: editAsetunimi,
      assukunimi: editAssukunimi,
      asosoite: EditAsosoite,
      postinro: EditPostinro,
      postitmp: EditPostitmp,
      puhelin: EditPuhelin,
      email: EditEmail
    })
    axios
      .post(url + 'updateAsiakas.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        asiakkaat[
          asiakkaat.findIndex(asiakas => asiakas.asid === editAsiakas.asid)
        ].astunnus = editAstunnus
        asiakkaat[
          asiakkaat.findIndex(asiakas => asiakas.asid === editAsiakas.asid)
        ].asetunimi = editAsetunimi
        asiakkaat[
          asiakkaat.findIndex(asiakas => asiakas.asid === editAsiakas.asid)
        ].assukunimi = editAssukunimi
        asiakkaat[
          asiakkaat.findIndex(asiakas => asiakas.asid === editAsiakas.asid)
        ].asosoite = EditAsosoite
        asiakkaat[
          asiakkaat.findIndex(asiakas => asiakas.asid === editAsiakas.asid)
        ].postinro = EditPostinro
        asiakkaat[
          asiakkaat.findIndex(asiakas => asiakas.asid === editAsiakas.asid)
        ].postitmp = EditPostitmp
        asiakkaat[
          asiakkaat.findIndex(asiakas => asiakas.asid === editAsiakas.asid)
        ].puhelin = EditPuhelin
        asiakkaat[
          asiakkaat.findIndex(asiakas => asiakas.asid === editAsiakas.asid)
        ].email = EditEmail
        setAsiakkaat([...asiakkaat])
        setEditedAsiakas(null)
      })
      .catch(error => {
        alert(error.response ? error.response.data.error : error)
      })
  }

  return (
    <div className='container'>
      <h2 id='otsikko keskita'>Kaikki asiakkaat</h2>
      <form onSubmit={tallenna}>
        <label>Lisää asiakas</label>
        <input
          value={astunnus}
          placeholder='asiakastunnus'
          onChange={e => setAstunnus(e.target.value)}
        />
        <input
          value={asetunimi}
          placeholder='etunimi'
          onChange={e => setAsetunimi(e.target.value)}
        />
        <input
          value={assukunimi}
          placeholder='sukunimi'
          onChange={e => setAssukunimi(e.target.value)}
        />
        <input
          value={asosoite}
          placeholder='osoite'
          onChange={e => setAsosoite(e.target.value)}
        />
        <input
          value={postinro}
          placeholder='postinumero'
          onChange={e => setPostinro(e.target.value)}
        />
        <input
          value={postitmp}
          placeholder='postitoimipaikka'
          onChange={e => setPostitmp(e.target.value)}
        />
        <input
          value={puhelin}
          placeholder='puhelinnumero'
          onChange={e => setPuhelin(e.target.value)}
        />
        <input
          value={email}
          placeholder='e-mail'
          onChange={e => setEmail(e.target.value)}
        />
        <button>Tallenna</button>
      </form>
      <ol>
        {asiakkaat?.map(asiakas => (
          <li key={asiakas.asid}>
            <p>{editAsiakas?.asid !== asiakas.asid && asiakas.astunnus}</p>
            <p>{editAsiakas?.asid !== asiakas.asid && asiakas.asetunimi}</p>
            <p>{editAsiakas?.asid !== asiakas.asid && asiakas.assukunimi}</p>
            <p>{editAsiakas?.asid !== asiakas.asid && asiakas.asosoite}</p>
            <p>{editAsiakas?.asid !== asiakas.asid && asiakas.postinro}</p>
            <p>{editAsiakas?.asid !== asiakas.asid && asiakas.postitmp}</p>
            <p>{editAsiakas?.asid !== asiakas.asid && asiakas.puhelin}</p>
            <p>{editAsiakas?.asid !== asiakas.asid && asiakas.email}</p>
            {editAsiakas?.asid === asiakas.asid && (
              <form onSubmit={paivita}>
                <input
                  placeholder='Astunnus'
                  value={editAstunnus}
                  onChange={e => setEditAstunnus(e.target.value)}
                ></input>
                <input
                  placeholder='etunimi'
                  value={editAsetunimi}
                  onChange={e => setEditAsetunimi(e.target.value)}
                ></input>
                <input
                  placeholder='sukunimi'
                  value={editAssukunimi}
                  onChange={e => setEditAssukunimi(e.target.value)}
                ></input>
                <input
                  placeholder='osoite'
                  value={EditAsosoite}
                  onChange={e => setEditAsosoite(e.target.value)}
                ></input>
                <input
                  placeholder='postinumero'
                  value={EditPostinro}
                  onChange={e => setEditPostinro(e.target.value)}
                ></input>
                <input
                  placeholder='postitoimipaikka'
                  value={EditPostitmp}
                  onChange={e => setEditPostitmp(e.target.value)}
                ></input>
                <input
                  placeholder='puhelin'
                  value={EditPuhelin}
                  onChange={e => setEditPuhelin(e.target.value)}
                ></input>
                <input
                  placeholder='email'
                  value={EditEmail}
                  onChange={e => setEditEmail(e.target.value)}
                ></input>
                <button>Tallenna</button>
                <button type="button" onClick={() => setEditedAsiakas(null)}>Peruuta</button>
              </form>
            )}
            <button className='delete' onClick={() => remove(asiakas.asid)}>
              Poista
            </button>
            {editAsiakas === null && (
              <button className='edit' onClick={() => setEditedAsiakas(asiakas)}>
                Muokkaa
              </button>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Asiakas