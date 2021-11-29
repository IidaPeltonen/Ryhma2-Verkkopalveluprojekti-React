import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './inc/styles/Admin.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Kirja({ url }) {
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
    const json = JSON.stringify({
      kirjanimi: kirjanimi, kirjailija: kirjailija, vuosi: vuosi, kieli: kieli,
      kustantaja: kustantaja, kuvaus: kuvaus, hinta: hinta, saldo: saldo, kuva: kuva, category_id: category_id
    })
    axios.post(url + 'addKirja.php', json, {
      headers: {
        'Content-Type': 'applicationJ/json'
      }
    })
      .then((response) => {
        setKirjat(kirjat => [...kirjat, response.data]);
        setItem('');
      }).catch(error => {
        alert(error.response.data.error)
      })
  }

  //olemassaolevan poisto
  function remove(id) {
    const json = JSON.stringify({ kirjaid: id })
    axios.post(url + 'deleteKirja.php', json, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        const newListWithoutRemoved = kirjat.filter((item) => item.kirjaid !== id);
        setItems(newListWithoutRemoved);
      }).catch(error => {
        alert(error.response ? error.response.data.error : error);
      });
  }

  function notify() {
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
          <input className="muokkaus" value={kirjanimi} placeholder="nimi" onChange={e => setKirjanimi(e.target.value)} />
          <input className="muokkaus" value={kirjailija} placeholder="kirjailija" onChange={e => setKirjailija(e.target.value)} />
          <input className="muokkaus" value={vuosi} placeholder="vuosi" onChange={e => setVuosi(e.target.value)} />
          <input className="muokkaus" value={kieli} placeholder="kieli" onChange={e => setKieli(e.target.value)} />
          <input className="muokkaus" value={kustantaja} placeholder="kustantaja" onChange={e => setKustantaja(e.target.value)} />
          <input className="muokkaus" value={kuvaus} placeholder="kuvaus" onChange={e => setKuvaus(e.target.value)} />
          <input className="muokkaus" value={hinta} placeholder="hinta" onChange={e => setHinta(e.target.value)} />
          <input className="muokkaus" value={saldo} placeholder="saldo" onChange={e => setSaldo(e.target.value)} />
          <input className="muokkaus" value={kuva} placeholder="https://www.students.oamk.fi/~n0peii00/kuvia/tyhja.png" onChange={e => setKuva(e.target.value)} />
          <input className="muokkaus" value={category_id} placeholder="category_id" onChange={e => setCategory_id(e.target.value)} />
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
                <td id='notbold'>
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

// Tässä alemmassa toimii nyt kirjan päivitys tallennus ja poisto + olemassaolevien kategorioiden näyttö alasvetovalikossa(josta voi myös valita haluamansa kategorian). 
// On ruma kun mikä, testasin vaan toiminnallisuutta. feel free to fix

// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import './App.css'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// function Kirja({ url }) {
//   const [items, setItems] = useState([])
//   const [item, setItem] = useState('')
//   const [kirjanimi, setKirjanimi] = useState('')
//   const [kirjailija, setKirjailija] = useState('')
//   const [vuosi, setVuosi] = useState('')
//   const [kieli, setKieli] = useState('')
//   const [kustantaja, setKustantaja] = useState('')
//   const [kuvaus, setKuvaus] = useState('')
//   const [hinta, setHinta] = useState('')
//   const [saldo, setSaldo] = useState('')
//   const [kuva, setKuva] = useState('')
//   const [categories, setCategories] = useState([]);
//   const [category_name, setCategory_name] = useState('')
//   const [category_id, setCategory_id] = useState('')
//   const [editItem, setEditItem] = useState(null);
//   const [editKirjanimi, setEditKirjanimi] = useState('')
//   const [editKirjailija, setEditKirjailija] = useState('')
//   const [editVuosi, setEditVuosi] = useState('')
//   const [editKieli, setEditKieli] = useState('')
//   const [editKustantaja, setEditKustantaja] = useState('')
//   const [editKuvaus, setEditKuvaus] = useState('')
//   const [editHinta, setEditHinta] = useState('')
//   const [editSaldo, setEditSaldo] = useState('')
//   const [editKuva, setEditKuva] = useState('')
//   const [editCategory_id, setEditCategory_id] = useState('');


//   useEffect(() => {
//     axios
//       .get(url)
//       .then(response => {
//         setItems(response.data)
//       })
//       .catch(error => {
//         alert(error)
//       })
//   }, [])

//   // hakee olemassa olevat kategoriat

//   useEffect(() => {
//     const json = JSON.stringify({ id: category_id, name: category_name })
//     axios
//       .post(url + 'tuoteKategoriaLinkit.php', json, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       .then(response => {
//         const json = response.data
//         setCategories(json)
//         setCategory_id(json[0])
//         setCategory_name(json[0])
//       })
//       .catch(error => {
//         alert(error.response ? error.response.data.error : error)
//       })
//   }, [])

//   //uuden tallennus
//   function tallenna(e) {
//     e.preventDefault()
//     const json = JSON.stringify({
//       kirjanimi: kirjanimi,
//       kirjailija: kirjailija,
//       vuosi: vuosi,
//       kieli: kieli,
//       kustantaja: kustantaja,
//       kuvaus: kuvaus,
//       hinta: hinta,
//       saldo: saldo,
//       kuva: kuva,
//       category_id: category_id
//     })
//     axios
//       .post(url + 'addKirja.php', json, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       .then(response => {
//         setItems(items => [...items, response.data])
//         setItem('')
//       })
//       .catch(error => {
//         alert(error.response.data.error)
//       })
//   }

//   //olemassaolevan poisto
//   function remove(id) {
//     const json = JSON.stringify({ kirjaid: id })
//     axios
//       .post(url + 'deleteKirja.php', json, {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       .then(response => {
//         const newListWithoutRemoved = items.filter(item => item.kirjaid !== id)
//         setItems(newListWithoutRemoved)
//       })
//       .catch(error => {
//         alert(error.response ? error.response.data.error : error)
//       })
//   }

//   //olemassaolevan päivitys
//   function setEditedItem(item) {
//     setEditItem(item);
//     setEditKirjanimi(item?.kirjanimi);
//     setEditKirjailija(item?.kirjailija);
//     setEditVuosi(item?.vuosi);
//     setEditKieli(item?.kieli);
//     setEditKustantaja(item?.kustantaja);
//     setEditKuvaus(item?.kuvaus);
//     setEditHinta(item?.hinta);
//     setEditSaldo(item?.saldo);
//     setEditKuva(item?.kuva);
//     setEditCategory_id(item?.category_id)
//   }

//   function paivita(e) {
//     e.preventDefault();
//     const json = JSON.stringify({
//       kirjaid: editItem.kirjaid, kirjanimi: editKirjanimi, kirjailija: editKirjailija,
//       vuosi: editVuosi, kieli: editKieli, kustantaja: editKustantaja, kuvaus: editKuvaus, hinta: editHinta,
//       saldo: editSaldo, kuva: editKuva, category_id: editCategory_id
//     })
//     axios.post(url + 'updateKirja.php', json, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then((response) => {
//         items[(items.findIndex(item => item.kirjaid === editItem.kirjaid))].kirjanimi = editKirjanimi;
//         items[(items.findIndex(item => item.kirjaid === editItem.kirjaid))].kirjailija = editKirjailija;
//         items[(items.findIndex(item => item.kirjaid === editItem.kirjaid))].vuosi = editVuosi;
//         items[(items.findIndex(item => item.kirjaid === editItem.kirjaid))].kieli = editKieli;
//         items[(items.findIndex(item => item.kirjaid === editItem.kirjaid))].kustantaja = editKustantaja;
//         items[(items.findIndex(item => item.kirjaid === editItem.kirjaid))].kuvaus = editKuvaus;
//         items[(items.findIndex(item => item.kirjaid === editItem.kirjaid))].hinta = editHinta;
//         items[(items.findIndex(item => item.kirjaid === editItem.kirjaid))].saldo = editSaldo;
//         items[(items.findIndex(item => item.kirjaid === editItem.kirjaid))].kuva = editKuva;
//         items[(items.findIndex(item => item.kirjaid === editItem.kirjaid))].category_id = editCategory_id;
//         setItems([...items]);
//         setEditedItem(null);
//       }).catch(error => {
//         alert(error.response ? error.response.data.error : error);
//       });
//   }

//   //toaster
//   function notify() {
//     toast('Uusi kirja lisätty!')
//   }

//   return (
//     <div className='container'>
//       <h2 id='otsikko keskita'>Kaikki kirjat</h2>
//       <form onSubmit={tallenna}>
//         <label>Lisää kirja</label>
//         <input value={kirjanimi} placeholder='nimi' onChange={e => setKirjanimi(e.target.value)} />
//         <input value={kirjailija} placeholder='kirjailija' onChange={e => setKirjailija(e.target.value)} />
//         <input value={vuosi} placeholder='vuosi' onChange={e => setVuosi(e.target.value)} />
//         <input value={kieli} placeholder='kieli' onChange={e => setKieli(e.target.value)} />
//         <input value={kustantaja} placeholder='kustantaja' onChange={e => setKustantaja(e.target.value)} />
//         <input value={kuvaus} placeholder='kuvaus' onChange={e => setKuvaus(e.target.value)} />
//         <input value={hinta} placeholder='hinta' onChange={e => setHinta(e.target.value)} />
//         <input value={saldo} placeholder='saldo' onChange={e => setSaldo(e.target.value)} />
//         <input value={kuva} placeholder='https://www.students.oamk.fi/~n0peii00/kuvia/tyhja.png' onChange={e => setKuva(e.target.value)} />
//         <select placeholder='category_id' value={category_id} onChange={e => setCategory_id(e.target.value)}>
//           {categories.map(category => (
//             <option>{category.id} {category.name}</option>
//           ))}
//         </select>
//         <button>Tallenna</button>
//       </form>
//       <ol>
//         {items?.map(item => (
//           <li key={item.kirjaid}>
//             <p>{editItem?.id !== item.kirjaid &&
//               item.kirjanimi}</p>
//             <p>{editItem?.id !== item.kirjaid &&
//               item.kirjailija}</p>
//             <p>{editItem?.id !== item.kirjaid &&
//               item.vuosi}</p>
//             <p>{editItem?.id !== item.kirjaid &&
//               item.kieli}</p>
//             <p>{editItem?.id !== item.kirjaid &&
//               item.kustantaja}</p>
//             <p>{editItem?.id !== item.kirjaid &&
//               item.kuvaus}</p>
//             <p>{editItem?.id !== item.kirjaid &&
//               item.hinta}</p>
//             <p>{editItem?.id !== item.kirjaid &&
//               item.saldo}</p>
//             <p>{editItem?.id !== item.kirjaid &&
//               item.kuva}</p>
//             <p>{editItem?.id !== item.kirjaid &&
//               item.category_id}</p>
//             {editItem?.kirjaid === item.kirjaid &&
//               <form onSubmit={paivita}>
//                 <input placeholder='Kirjan nimi' value={editKirjanimi} onChange={e => setEditKirjanimi(e.target.value)}></input>
//                 <input placeholder='Kirjailija' value={editKirjailija} onChange={e => setEditKirjailija(e.target.value)}></input>
//                 <input placeholder='Vuosi' value={editVuosi} onChange={e => setEditVuosi(e.target.value)}></input>
//                 <input placeholder='Kieli' value={editKieli} onChange={e => setEditKieli(e.target.value)}></input>
//                 <input placeholder='Kustantaja' value={editKustantaja} onChange={e => setEditKustantaja(e.target.value)}></input>
//                 <input placeholder='Kuvaus' value={editKuvaus} onChange={e => setEditKuvaus(e.target.value)}></input>
//                 <input placeholder='Hinta' value={editHinta} onChange={e => setEditHinta(e.target.value)}></input>
//                 <input placeholder='Saldo' value={editSaldo} onChange={e => setEditSaldo(e.target.value)}></input>
//                 <input placeholder='Kuvan osoite' value={editKuva} onChange={e => setEditKuva(e.target.value)}></input>
//                 <select placeholder='Category_id' value={editCategory_id} onChange={e => setEditCategory_id(e.target.value)}>
//                   {categories.map(category => (
//                     <option>{category.id} {category.name}</option>
//                   ))}
//                 </select>

//                 <button>Tallenna</button>
//               </form>
//             }
//             <button className="delete" onClick={() => remove(item.kirjaid)}>Poista</button>
//             {editItem === null &&
//               <button className="edit" onClick={() => setEditedItem(item)}>
//                 Muokkaa
//               </button>
//             }
//           </li>
//         ))}
//       </ol>
//     </div >
//   );
// }


// export default Kirja
