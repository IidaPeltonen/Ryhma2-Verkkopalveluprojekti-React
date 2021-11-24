import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import karry from '../img/karry.png'

export default function Cart ({ cart }) {
   //lasketaan kaikki ostoskorin itemit etusivun näkymää varten
   let maara = 0;
    for (let i = 0; i < cart.length; i++) {
      //lasketaan taulukon rivi, sieltä tuotteen amount ja lisätään se maaraan
      maara+=cart[i].amount
    } 
  return (
    <div>
    <Link to='/order'>
      <img id='ostoskarry' src={karry} alt="ostoskärry" />
    {/*   <svg
        xmlns='http://www.w3.org/2000/svg'
        width='28'
        height='28'
        fill='white'
        className='bi bi-cart-fill ms-2'
        viewBox='0 0 16 16'
      >
        <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
      </svg> */}
      {/* KUINKA TÄHÄN SAADAAN KAIKKIEN ITEMEIDEN MÄÄRÄ */}
      <span className='no-underline mx-auto ms-2 me-2'>{(maara)}</span>
    </Link>
    </div>
  )
}
