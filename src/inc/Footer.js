import React from 'react'
import { Link } from 'react-router-dom';
import './styles/Footer.css';
import { useState } from 'react'



export default function Footer() {

  const [uutiskirje, setUutiskirje] = useState('')

  const uutiskirjeenTilaus = (e)=> {
    setUutiskirje(e.target.value)
  }

  const uutiskirjeenTyhjennys = ()=> {
    setUutiskirje('')
  }

  return (
    <div>
      <footer className="row"  >
        <div className="col-md-2 col-10 my-auto mx-auto">
          <Link to="/contactus">Yhteystiedot</Link>
        </div>
        <div className="col-md-2 col-10 my-auto mx-auto">
          <Link to="/aboutus">Tietoa meistä</Link>
        </div>
        <div className="col-md-2 col-10 my-auto mx-auto">
          <Link to="/ukk">UKK</Link>
        </div>
        <div className="col-md-2 col-10 my-auto mx-auto">
          <Link to="/rekisteri">Rekisteriseloste</Link>
        </div>
        <div className="col-md-2 col-10 my-auto mx-auto">
          <p>Tilaa uutiskirje</p>
          <div class="input-group mb-3">
            <input type="email" value={uutiskirje} onChange={uutiskirjeenTilaus} className="form-control" placeholder="Sähköposti" aria-label="Sähköposti" aria-describedby="button-addon2"></input>
            <button className ="btn btn-outline-secondary" type ="button" id="button-addon2" onClick={uutiskirjeenTyhjennys}>Lähetä</button>
          </div>
        </div>
      </footer>
    </div>
  )
}
