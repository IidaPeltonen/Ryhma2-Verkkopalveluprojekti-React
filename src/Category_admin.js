import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import './inc/styles/Admin.css'

function CategoryAdmin({ url }) {
  const [kategoria, setKategoria] = useState('')
  const [kategoriat, setKategoriat] = useState([]);
  const [editCategory, setEditCategory] = useState(null)
  const [editName, setEditName] = useState('');
  const [name, setName] = useState('');


  useEffect(() => {
    axios
      .get(url + 'tuoteKategoriaLinkit.php')
      .then(response => {
        setKategoriat(response.data)
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
      name: name
    })
    axios
      .post(url + 'addTuoteKategoria.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        setKategoriat(kategoriat => [...kategoriat, response.data])
        setKategoria('')
      })
      .catch(error => {
        alert(error.response.data.error)
      })
  }

   //olemassaolevan poisto
   function remove(id) {
    const json = JSON.stringify({ id: id })
    axios
      .post(url + 'deleteTuoteKategoria.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        const newListWithoutRemoved = kategoriat.filter(kategoria =>
          kategoria.id !== id)
        setKategoriat(newListWithoutRemoved)
      })
      .catch(error => {
        alert(error.response ? error.response.data.error : error)
      })
  }
  //olemassaolevan päivitys
  function setEditedCategory(kategoria) {
    setEditCategory(kategoria)
    setEditName(kategoria?.name)  }

  function paivita(e) {
    e.preventDefault()
    const json = JSON.stringify({
      id: editCategory.id,
      name: editName,

    })
    axios
      .post(url + 'updateTuoteKategoria.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        kategoriat[
          kategoriat.findIndex(kategoria => kategoria.id === editCategory.id)
        ].name = editName
        setKategoriat([...kategoriat])
        setEditedCategory(null)
      })
      .catch(error => {
        alert(error.response ? error.response.data.error : error)
      })
  }
  return (
    <div className='container'>
      <h2 id='otsikko keskita'>Kaikki pääkäyttäjät</h2>
      <form onSubmit={tallenna}>
        <label>Lisää pääkäyttäjä</label>
        <input
          value={firstname}
          placeholder='etunimi'
          onChange={e => setFirstname(e.target.value)}
        />
        <input
          value={lastname}
          placeholder='sukunimi'
          onChange={e => setLastname(e.target.value)}
        />
        <input
          value={username}
          placeholder='käyttäjätunnus'
          onChange={e => setUsername(e.target.value)}
        />
        <input
          value={password}
          placeholder='salasana'
          onChange={e => setPassword(e.target.value)}
        />
        <button>Tallenna</button>
      </form>
      <ol>
        {users?.map(user => (
          <li key={user.userid}>
            <p>{editUser?.userid !== user.userid && user.firstname}</p>
            <p>{editUser?.userid !== user.userid && user.lastname}</p>
            <p>{editUser?.userid !== user.userid && user.username}</p>
            <p>{editUser?.userid !== user.userid && user.password}</p>
            {editUser?.userid === user.userid && (
              <form onSubmit={paivita}>
                <input
                  placeholder='Etunimi'
                  value={editFirstname}
                  onChange={e => setEditFirstname(e.target.value)}
                ></input>
                <input
                  placeholder='Sukunimi'
                  value={editLastname}
                  onChange={e => setEditLastname(e.target.value)}
                ></input>
                <input
                  placeholder='Käyttäjätunnus'
                  value={editUsername}
                  onChange={e => setEditUsername(e.target.value)}
                ></input>
                <input
                  placeholder='Salasana'
                  value={editPassword}
                  onChange={e => setEditPassword(e.target.value)}
                ></input>
                <button>Tallenna</button>
                <button type="button" onClick={() => setEditedUser(null)}>Peruuta</button>
              </form>
            )}
            <button className='delete' onClick={() => remove(user.userid)}>
              Poista
            </button>
            {editUser === null && (
              <button className='edit' onClick={() => setEditedUser(user)}>
                Muokkaa
              </button>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

  return (
    <div className='container'>
      <h2 id='otsikko keskita'>Tuoteryhmät</h2>
      <ol>
        {kategoriat?.map(kategoria => (
          <li key={kategoria.id}>
              <p>{kategoria.name}</p> 
              <button className='delete' onClick={() => remove(kategoria.id)}>
              Poista
            </button>
          </li>
          
          
        ))}
      </ol>
      <form onSubmit={tallenna}>
        <label>Lisää tuoteryhmä</label>&nbsp;
        <input
        type="text"
          value={name}
          placeholder='nimi'
          onChange={e => setName(e.target.value)}
        />
        <button>Tallenna</button>
      </form>
    </div>
  )
}

export default CategoryAdmin
