import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

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
    <div className='container-fluid'>
      <h2 id='otsikko keskita'>Kaikki asiakkaat</h2>
      <div className="row">
        <form onSubmit={tallenna}>
          <label className="col-12 ps-0 mb-2">Lisää asiakas</label>
          <input
            value={astunnus}
            className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
            placeholder='asiakastunnus'
            onChange={e => setAstunnus(e.target.value)}
          />
          <input
            value={asetunimi}
            className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
            placeholder='etunimi'
            onChange={e => setAsetunimi(e.target.value)}
          />
          <input
            value={assukunimi}
            className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
            placeholder='sukunimi'
            onChange={e => setAssukunimi(e.target.value)}
          />
          <input
            value={asosoite}
            className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
            placeholder='osoite'
            onChange={e => setAsosoite(e.target.value)}
          />
          <input
            value={postinro}
            className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
            placeholder='postinumero'
            onChange={e => setPostinro(e.target.value)}
          />
          <input
            value={postitmp}
            className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
            placeholder='postitoimipaikka'
            onChange={e => setPostitmp(e.target.value)}
          />
          <input
            value={puhelin}
            className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
            placeholder='puhelinnumero'
            onChange={e => setPuhelin(e.target.value)}
          />
          <input
            value={email}
            className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
            placeholder='e-mail'
            onChange={e => setEmail(e.target.value)}
          />
          <div className="row">
            <div className='col-sm-2 col-md-1'>
              <button className="btn adminbutton mt-3">Tallenna
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
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
                    className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
                    placeholder='Astunnus'
                    value={editAstunnus}
                    onChange={e => setEditAstunnus(e.target.value)}
                  ></input>
                  <input
                    className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
                    placeholder='etunimi'
                    value={editAsetunimi}
                    onChange={e => setEditAsetunimi(e.target.value)}
                  ></input>
                  <input
                    className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
                    placeholder='sukunimi'
                    value={editAssukunimi}
                    onChange={e => setEditAssukunimi(e.target.value)}
                  ></input>
                  <input
                    className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
                    placeholder='osoite'
                    value={EditAsosoite}
                    onChange={e => setEditAsosoite(e.target.value)}
                  ></input>
                  <input
                    className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
                    placeholder='postinumero'
                    value={EditPostinro}
                    onChange={e => setEditPostinro(e.target.value)}
                  ></input>
                  <input
                    className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
                    placeholder='postitoimipaikka'
                    value={EditPostitmp}
                    onChange={e => setEditPostitmp(e.target.value)}
                  ></input>
                  <input
                    className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
                    placeholder='puhelin'
                    value={EditPuhelin}
                    onChange={e => setEditPuhelin(e.target.value)}
                  ></input>
                  <input
                    className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
                    placeholder='email'
                    value={EditEmail}
                    onChange={e => setEditEmail(e.target.value)}
                  ></input>
                  <button className='btn adminbutton'>Tallenna</button>
                  <button className='btn adminbutton' type="button" onClick={() => setEditedAsiakas(null)}>Peruuta</button>
                </form>

              )}
              <button className='btn adminbutton' onClick={() => remove(asiakas.asid)}>
                Poista
              </button>
              {editAsiakas === null && (
                <button className='btn adminbutton' onClick={() => setEditedAsiakas(asiakas)}>
                  Muokkaa
                </button>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div >
  )
}

export default Asiakas