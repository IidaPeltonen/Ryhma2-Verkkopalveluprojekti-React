import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Footer.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function notifyOk() {
  toast("🦄 Uutiskirje tilattu!");
}

function notifyErr() {
  toast("Kirjoita osoite!");
}

export default function Footer () {
  const [uutiskirje, setUutiskirje] = useState('')
  const uutiskirjeenTilaus = e => {
    setUutiskirje(e.target.value)
  }
  const uutiskirjeenTyhjennys = () => {
    setUutiskirje('')
  }
  /* const uutiskirjeenTarkistus = () => {
    //const osoite = document.getElementById("id");
    //console.log(osoite);
    if (osoite === "") {
      notifyErr()
    }
    else {
      notifyOk()
    }
  }
 */
  return (
    <div>
      <footer className='row'>
        <div className='col-md-2 col-10 my-auto mx-auto'>
          <Link to='/contactus'>Yhteystiedot</Link>
        </div>
        <div className='col-md-2 col-10 my-auto mx-auto'>
          <Link to='/aboutus'>Tietoa meistä</Link>
        </div>
        <div className='col-md-2 col-10 my-auto mx-auto'>
          <Link to='/ukk'>UKK</Link>
        </div>
        <div className='col-md-2 col-10 my-auto mx-auto'>
          <Link to='/rekisteri'>Rekisteriseloste</Link>
        </div>
        <div className='col-md-2 col-10 my-auto mx-auto'>
          <p id='uutiskirje'>Tilaa uutiskirje</p>
          <div className='input-group mb-3'>
            <input
              id='maili'
              type='email'
              value={uutiskirje}
              onChange={uutiskirjeenTilaus}
              className='form-control'
              placeholder='Sähköposti'
              aria-label='Sähköposti'
              aria-describedby='button-addon2'
            ></input>

            <button
              className='btn btn-outline-secondary'
              type='button'
              id='button-addon2'
              onClick={function(event){uutiskirjeenTyhjennys();notifyOk()}}
            >
              Lähetä
            </button>
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
          </div>
        </div>
      </footer>
    </div>
  )
}
