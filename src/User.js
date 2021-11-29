import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function User({ url }) {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [editUser, setEditUser] = useState(null)
  const [editFirstname, setEditFirstname] = useState('');
  const [editLastname, setEditLastname] = useState('');
  const [editUsername, setEditUsername] = useState('');
  const [editPassword, setEditPassword] = useState('');

  useEffect(() => {
    axios
      .get(url + 'indexUser.php')
      .then(response => {
        setUsers(response.data)
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
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password
    })
    axios
      .post(url + 'addUser.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        setUsers(users => [...users, response.data])
        setUser('')
      })
      .catch(error => {
        alert(error.response.data.error)
      })
  }

  //olemassaolevan poisto
  function remove(id) {
    const json = JSON.stringify({ userid: id })
    axios
      .post(url + 'deleteUser.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        const newListWithoutRemoved = users.filter(user =>
          user.userid !== id)
        setUsers(newListWithoutRemoved)
      })
      .catch(error => {
        alert(error.response ? error.response.data.error : error)
      })
  }

  //olemassaolevan päivitys
  function setEditedUser(user) {
    setEditUser(user)
    setEditFirstname(user?.firstname)
    setEditLastname(user?.lastname)
    setEditUsername(user?.username)
    setEditPassword(user?.password)
  }

  function paivita(e) {
    e.preventDefault()
    const json = JSON.stringify({
      userid: editUser.userid,
      firstname: editFirstname,
      lastname: editLastname,
      username: editUsername,
      password: editPassword
    })
    axios
      .post(url + 'updateUser.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        users[
          users.findIndex(user => user.userid === editUser.userid)
        ].firstname = editFirstname
        users[
          users.findIndex(user => user.userid === editUser.userid)
        ].lastname = editLastname
        users[
          users.findIndex(user => user.userid === editUser.userid)
        ].username = editUsername
        users[
          users.findIndex(user => user.userid === editUser.userid)
        ].password = editPassword
        setUsers([...users])
        setEditedUser(null)
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

export default User
