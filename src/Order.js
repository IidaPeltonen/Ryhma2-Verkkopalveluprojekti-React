import React from 'react'
import uuid from 'react-uuid'
import { useState, useEffect } from 'react'
import './inc/styles/Order.css'
import './App.css'
import roskis from './img/roskis.png'

const riviSumma = 0

export default function Order ({
  url,
  cart,
  clear,
  removeFromCart,
  updateAmount
}) {
  const [inputs, setInputs] = useState([])
  const [inputIndex, setInputIndex] = useState(-1)

  function changeAmount (e, product, index) {
    updateAmount(e.target.value, product)
    setInputIndex(index)
  }

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      inputs[i] = React.createRef()
    }
  }, [cart.length])

  useEffect(() => {
    if (
      inputs.length > 0 &&
      inputIndex > -1 &&
      inputs[inputIndex.current] !== null
    ) {
      inputs[inputIndex].current.focus()
    }
  }, [cart])

  return (
    <div className='container'>
      <div className='row table-responsive-md'>
        <h1 id='keskita'>Ostoskorisi</h1>
        <table className='table'>
          <tbody className='col-12'>
            {cart.map((product, index) => (
              //sum+=parseFloat(product.hinta);
              //riviSumma+=(product.summa)
              <tr key={uuid()}>
                <td scope='col' className='align-middle'>
                  <img src={product.kuva} alt='kirjan kansikuva'></img>
                </td>
                <td scope='col' className='align-middle'>
                  {product.kirjailija}
                </td>
                <td scope='col' className='align-middle'>
                  {product.kirjanimi}
                </td>
                <td scope='col' className='align-middle'>
                  {product.hinta}€
                </td>
                <td scope='col' className='align-middle'>
                  <input
                    ref={inputs[index]}
                    style={{ width: '60px' }}
                    type='number'
                    step='1'
                    min='1'
                    onChange={e => changeAmount(e, product, index)}
                    value={product.amount}
                  />
                </td>
                <td scope='col' className='align-middle'>
                  Yhteensä: {riviSumma}{' '}
                </td>
                <td scope='col' className='align-middle'>
                  <button
                      className='btn'
                      type='button'
                      onClick={() => removeFromCart(product)}
                    >
                      <img id='roskis' src={roskis} alt='roskakori' />
                    </button>
                </td>
               {/*  <button
                  className='btn'
                  type='button'
                  onClick={function (event) {
                  addToCart(valittuKirja)
                  notify()
                  }}
                >
                <img id='pieni' src={karry} alt='ostoskärry' />
                </button> */}
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
        <div id='keskita'>
          <br />
          <br />
          <button
            className='tyhjenna btn btn-primary'
            type='button'
            onClick={e => clear()}
          >
            Tyhjennä ostoskori
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}
