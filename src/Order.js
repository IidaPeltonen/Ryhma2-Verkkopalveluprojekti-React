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
}) {
  function changeAmount (e, product, index) {
    updateAmount(e.target.value,product)
  } 
  return (
    <div className='container'>
      <div className='row'>
        <h1 id="keskita">Ostoskorisi</h1>
          <table>
            <tbody col="12">
              {cart.map((product, index) => (
                //sum+=parseFloat(product.hinta);
                <tr key={uuid()}>
                  <td col='2'>
                    <img src={product.kuva} alt='kirjan kansikuva'></img>
                  </td> 
                  <td col='2'>{product.kirjailija}</td>
                  <td col='2'>{product.kirjanimi}</td>
                  <td col='2'>{product.hinta}€</td>
                  <td>
                    <input
                      col='2'
                      style={{ width: '70px' }}
                      type='number'
                      step='1'
                      min='1'
                      onChange={e => changeAmount(e, product, index)}
                      value={product.amount}
                    />
                  </td>
                  <td>
                    <a
                      col='2'
                      className='order'
                      href='#'
                      onClick={() => removeFromCart(product)} 
                    >
                      POISTA OSTOSKORISTA
                    </a>
                  </td>
                </tr>
              ))}
              <tr></tr>
            </tbody>
          </table>
          <div id="keskita">
          <br /><br />
            <button 
              className='btn btn-primary'
              type='button'
              onClick={e => clear()}
            >
              Tyhjennä ostoskori
            </button>
            <br /><br />
          </div>
        </div>
    </div>
  )
}

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
