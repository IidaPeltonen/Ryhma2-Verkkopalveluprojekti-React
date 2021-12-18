import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import './inc/styles/Admin.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//toasterit
function notifyAdd () {
  toast('Uusi kategoria lisätty!')
}

function notifyEdit () {
  toast('Kategorian tiedot päivitetty!')
}

function notifyDel () {
  toast('Kategoria poistettu!')
}

function CategoryAdmin ({ url }) {
  const [kategoria, setKategoria] = useState('')
  const [kategoriat, setKategoriat] = useState([])
  const [editCategory, setEditCategory] = useState(null)
  const [editName, setEditName] = useState('')
  const [name, setName] = useState('')

  //hakee kaikki
  useEffect(() => {
    axios
      .get(url + 'php/kategoria/tuoteKategoriaLinkit.php')
      .then(response => {
        setKategoriat(response.data)
        console.log(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }, [])

  //uuden tallennus
  function tallenna (e) {
    e.preventDefault()
    const json = JSON.stringify({
      name: name
    })
    axios
      .post(url + 'php/kategoria/addTuoteKategoria.php', json, {
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
  function remove (id) {
    const json = JSON.stringify({ id: id })
    axios
      .post(url + 'php/kategoria/deleteTuoteKategoria.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        const newListWithoutRemoved = kategoriat.filter(
          kategoria => kategoria.id !== id
        )
        setKategoriat(newListWithoutRemoved)
      })
      .catch(error => {
        alert("Kategoriassa on kirjoja, ei voitu poistaa.")
      })
  }

  //olemassaolevan päivitys
  function setEditedCategory (kategoria) {
    setEditCategory(kategoria)
    setEditName(kategoria?.name)
  }

  //olemassaolevan päivitys
  function paivita (e) {
    e.preventDefault()
    const json = JSON.stringify({
      id: editCategory.id,
      name: editName
    })
    axios
      .post(url + 'php/kategoria/updateTuoteKategoria.php', json, {
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
      <h2 id='otsikko keskita'>Tuoteryhmät</h2>
      <ol>
        {kategoriat?.map(kategoria => (
          <li key={kategoria.id}>
            <p>{editCategory?.id !== kategoria.id && kategoria.name}</p>
            {editCategory?.id === kategoria.id && (
              <form onSubmit={paivita}>
                <input
                  type='text'
                  className='me-1 admininput align-middle'
                  value={editName}
                  placeholder='nimi'
                  onChange={e => setEditName(e.target.value)}
                />
                <button
                  className='btn adminbutton'
                  onClick={function (event) {
                    notifyEdit()
                  }}
                >
                  Tallenna
                </button>
                <button
                  className='btn adminbutton'
                  type='button'
                  onClick={() => setEditCategory(null)}
                >
                  Peruuta
                </button>
              </form>
            )}
            <button
              className='btn adminbutton'
              onClick={function (event) {
                notifyDel()
                remove(kategoria.id)
              }}
            >
              Poista
            </button>
            {editCategory === null && (
              <button
                className='btn adminbutton'
                onClick={() => setEditedCategory(kategoria)}
              >
                Muokkaa
              </button>
            )}
          </li>
        ))}
      </ol>
      <form onSubmit={tallenna}>
        <label>Lisää tuoteryhmä:</label>&nbsp;
        <input
          type='text'
          className='me-1 admininput align-middle'
          value={name}
          placeholder='Tuoteryhmän nimi'
          onChange={e => setName(e.target.value)}
        />
        <button
          className='btn adminbutton'
          onClick={function (event) {
            notifyAdd()
          }}
        >
          Tallenna
        </button>
      </form>
    </div>
  )
}

export default CategoryAdmin
