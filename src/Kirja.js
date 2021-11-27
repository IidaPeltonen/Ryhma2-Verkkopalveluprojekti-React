import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Kirja({url}) {
    const [kirjat, setKirjat] = useState([])

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
        <table id='kaikki' className='table'>
        <tbody className='col-12'>
            {kirjat?.map(kirja => (
            <tr key={kirja.kirjaid}>
                <th scope='col'>
                    <tr>{kirja.kirjanimi}</tr>
                </th>
                <th scope='col' >
                    <tr>{kirja.kirjailija}</tr>
                </th>
                <th scope='col' >
                    <tr>{kirja.hinta}</tr>
                </th>
                <th scope='col' >
                    <tr>{kirja.vuosi}</tr>
                </th>
                <th scope='col' >
                    Kieli
                    <tr>{kirja.kieli}</tr>
                </th>
                <th scope='col'>
                    <tr>{kirja.kustantaja}</tr>
                </th>
                <th scope='col' >
                    <tr>{kirja.kuvaus}</tr>
                </th>
                <th scope='col' >
                    <tr>{kirja.hinta}</tr>
                </th>
                <th scope='col' >
                    <tr>{kirja.saldo}</tr>
                </th>
                <th scope='col' >
                    Kuva
                </th>
                <th scope='col' >
                    <tr>{kirja.category_id}</tr>
                </th>
                <th scope='col' >
                    <button
                    className='btn'
                    type='button'
                    onClick={function (event) {
                    notify()
                    }}
                >
                     nappi
                    </button>
                </th>
            </tr>
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
        </tbody>
        </table>
        </div>
        </div>

    )
}

export default Kirja