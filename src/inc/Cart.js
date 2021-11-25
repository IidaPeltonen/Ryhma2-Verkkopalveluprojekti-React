import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import karry from '../img/karry.png'

export default function Cart ({ cart }) {
   //lasketaan kaikki ostoskorin itemit etusivun näkymää varten
   let maara = 0;
    for (let i = 0; i < cart.length; i++) {
      //lasketaan taulukon rivi, sieltä tuotteen amount ja lisätään se maaraan
      maara+=parseInt(cart[i].amount)
    } 
  return (
    <div>
    <Link to='/order'>
      <img id='ostoskarry' src={karry} alt="ostoskärry" />
      <span className='no-underline mx-auto ms-2 me-2'>{(maara)}</span>
    </Link>
    </div>
  )
}
