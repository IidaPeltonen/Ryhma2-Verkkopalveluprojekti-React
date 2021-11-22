import React from 'react'
import uuid from 'react-uuid'
import './inc/styles/Order.css'
import './App.css'



export default function Order ({
  url,
  cart,
  clear,
  removeFromCart,
  updateAmount
})
{
  function changeAmount(e,muutettavaKirja,index) {
    updateAmount(e.target.value.muutettavaKirja);
  } 
  return (
    <div>
      {cart.map((kirja, index) => (
        //sum+=parseFloat(kirja.hinta);
        <tr key={uuid()}>
          <td>{kirja.kirjanimi}</td>
          <td>{kirja.hinta}</td>
          <td>
            <img src={kirja.kuva} alt='kirjan kansikuva'></img>
          </td>
          <td>
            <input
              style={{ width: '60p' }}
              type='number'
              step='1'
              min='1'
              onChange={e => changeAmount(e, kirja, index)}
              value={kirja.amount}
            />
          </td>
          <td>
            <a className='order' href='#' onClick={() => removeFromCart(kirja)}>
              POISTA OSTOSKORISTA
            </a>
          </td>
        </tr>
      ))} 
      <hr></hr>
      <button className='btn btn-primary' type='button' onClick={e => clear()}>
        Tyhjennä ostoskori
      </button>
    </div>
 
  )}

   /*  <table>
    <tbody>
      {cart.map((kirja, index) => {
        //sum+=parseFloat(kirja.hinta);
        return (
          <tr key={uuid()}>
            <td>{kirja.kirjanimi}</td>
            <td>{kirja.hinta}</td>
            <td>
              <img src={kirja.kuva} alt='kirjan kansikuva'></img>
            </td>
            <td>
              <input
                style={{ width: '60p' }}
                type='number'
                step='1'
                min='1'
                onChange={e => changeAmount(e, kirja, index)}
                value={kirja.amount}
              />
            </td>
            <td>
              <a className='order' href='#' onClick={() => removeFromCart(kirja)}>
                POISTA OSTOSKORISTA
              </a>
            </td>
          </tr>
      )
      })}
  </tbody>
  </table> 
}*/
