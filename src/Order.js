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
  function changeAmount(e, muutettavaKirja,index) {
    updateAmount(e.target.value.kirja);
  } 
  return (
    <div col="12">
      <table>
        <tbody>
        {cart.map((kirja, index) => (
          //sum+=parseFloat(kirja.hinta);
          <tr key={uuid()}>
            <td id="ostos" col="2">
              <img src={kirja.kuva} alt='kirjan kansikuva'></img>
            </td>
            <td col="2">{kirja.kirjailija}</td>
            <td col="2">{kirja.kirjanimi}</td>
            <td col="2">{kirja.hinta}</td>
            <td>
              <input col="2"
                style={{ width: '60p' }}
                type='number'
                step='1'
                min='1'
                onChange={e => changeAmount(e, kirja, index)}
                value={kirja.amount}
              />
            </td>
            <td>
              <a col="2" className='order' href='#' onClick={() => removeFromCart(kirja)}>
                POISTA OSTOSKORISTA
              </a>
            </td>
          </tr>
        ))} 
        <tr></tr>
        </tbody>
      </table>
      <button className='btn btn-primary' type='button' onClick={e => clear()}>
          Tyhjennä ostoskori
        </button>
    </div>
 
  )}

  /*  /*  <table>
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
