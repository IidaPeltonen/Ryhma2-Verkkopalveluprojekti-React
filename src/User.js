import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function User ({ url }) {
  const [users, setUsers] = useState([])
  
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

  

  return (
    <div className='container'>
      <h2 id='otsikko keskita'>Kaikki pääkäyttäjät</h2>
      <table>
        {users?.map(user => (
            <tr key={user.userid}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
        ))}
      </table>
    </div>
  )
}

export default User
