import React from 'react'
import uuid from 'react-uuid'
import './inc/styles/Order.css'
import './App.css'

export default function Order ({ url, cart, clear, removeFromCart }) {
  return (
    <div>
      {cart.map(kirja => (
        <tr key={uuid()}>
          <td>{kirja.kirjanimi}</td>
          <td>{kirja.hinta}</td>
          <td>
            <img src={kirja.kuva} alt="kirjan kansikuva"></img>
          </td>
          <td>
            <a className='order' href='#' onClick={() => removeFromCart(kirja)}>
              POISTA OSTOSKORISTA
            </a>
          </td>
        </tr>
      ))}
      <hr></hr>
      <button className="btn btn-primary" type="button" onClick={e => clear() }>Tyhjennä ostoskori</button>
     </div>



  )
}
