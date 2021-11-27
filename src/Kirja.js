import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Kirja ({ url }) {
  const [kirjat, setKirjat] = useState([]);
  const [item, setItem] = useState('');
  const [items, setItems] = useState('');
  const [kirjanimi, setKirjanimi] = useState('');
  const [kirjailija, setKirjailija] = useState('');
  const [vuosi, setVuosi] = useState('');
  const [kieli, setKieli] = useState('');
  const [kustantaja, setKustantaja] = useState('');
  const [kuvaus, setKuvaus] = useState('');
  const [hinta, setHinta] = useState('');
  const [saldo, setSaldo] = useState('');
  const [kuva, setKuva] = useState('');
  const [category_id, setCategory_id] = useState('');


  //uuden tallennus
  function tallenna(e) {
    e.preventDefault();
    const json = JSON.stringify({kirjanimi:kirjanimi, kirjailija:kirjailija, vuosi:vuosi, kieli:kieli,
        kustantaja:kustantaja, kuvaus:kuvaus, hinta:hinta, saldo:saldo, kuva:kuva, category_id:category_id})
    axios.post(url + 'addKirja.php',json,{
      headers: {
        'Content-Type' : 'applicationJ/json'
      }
    })
    .then((response) => {
      setKirjat(kirjat => [...kirjat,response.data]);
      setItem('');
    }).catch (error => {
      alert(error.response.data.error)
    })
  }

  //olemassaolevan poisto
  function remove(id) {
    const json= JSON.stringify({kirjaid:id})
    axios.post(url + 'deleteKirja.php', json, {
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then((response) => {
      const newListWithoutRemoved = kirjat.filter((item) => item.kirjaid !== id);
      setItems(newListWithoutRemoved);
    }).catch (error => {
      alert(error.response ? error.response.data.error : error);
    });
  }

  function notify () {
    toast('Uusi kirja lisätty!')
  }

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setKirjat(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }, [])

  return (
      
    <div className='container'>
      <div className='row table-responsive-md'>
        <h2 id='otsikko keskita'>Kaikki kirjat</h2>
        <form onSubmit={tallenna}>
        <label>Lisää kirja</label>
        <input value={kirjanimi} placeholder="nimi" onChange={e => setKirjanimi(e.target.value)} />
        <input value={kirjailija} placeholder = "kirjailija" onChange={e => setKirjailija(e.target.value)} />
        <input value={vuosi} placeholder = "vuosi" onChange={e => setVuosi(e.target.value)} />
        <input value={kieli} placeholder = "kieli" onChange={e => setKieli(e.target.value)} />
        <input value={kustantaja} placeholder = "kustantaja" onChange={e => setKustantaja(e.target.value)} />
        <input value={kuvaus} placeholder = "kuvaus" onChange={e => setKuvaus(e.target.value)} />
        <input value={hinta} placeholder = "hinta" onChange={e => setHinta(e.target.value)} />
        <input value={saldo} placeholder = "saldo" onChange={e => setSaldo(e.target.value)} />
        <input value={kuva} placeholder = "https://www.students.oamk.fi/~n0peii00/kuvia/tyhja.png" onChange={e => setKuva(e.target.value)} />
        <input value={category_id} placeholder = "category_id" onChange={e => setCategory_id(e.target.value)} />
        <button>Tallenna</button>
      </form>
        <table id='kaikki' className='table col-12'>
            <thead>
                <tr>
                    <th scope='col'>Nimi</th>
                    <th scope='col'>Kirjailija</th>
                    <th scope='col'>Hinta</th>
                    <th scope='col'>Julkaisuvuosi</th>
                    <th scope='col'>Kieli</th>
                    <th scope='col'>Kustantaja</th>
                    <th scope='col'>Kuvaus</th>
                    <th scope='col'>Saldo</th>
                    <th scope='col'>Kuvan osoite</th>
                    <th scope='col'>Kategoria</th>
                </tr>
            </thead>
            {kirjat?.map(kirja => (
            <tbody key={kirja.kirjaid}>
              <tr >
                <td  id='notbold'>
                  {kirja.kirjanimi}
                </td>
                <td id='notbold'>
                  {kirja.kirjailija}
                </td>
                <td id='notbold'>
                  {kirja.hinta}
                </td>
                <td id='notbold'>
                  {kirja.vuosi}
                </td>
                <td id='notbold'>
                  {kirja.kieli}
                </td>
                <td id='notbold'>
                  {kirja.kustantaja}
                </td>
                <td id='notbold'>
                  {kirja.kuvaus}
                </td>
                <td id='notbold'>
                  {kirja.saldo}
                </td>
                <td id='notbold'>
                    '{kirja.kuva}'
                </td>
                <td id='notbold'>
                  {kirja.category_id}
                </td>
                <a href="#" className="delete" onClick={() => remove(kirja.kirjaid)}>Poista</a>
              </tr>
              </tbody>
            ))}
            <ToastContainer
              position='bottom-right'
              autoClose={4000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
        </table>
      </div>
    </div>
  )
}

export default Kirja
