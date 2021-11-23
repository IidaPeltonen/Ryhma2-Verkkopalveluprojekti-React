import React from 'react';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import './inc/styles/Order.css';
import './App.css';

const riviSumma = 0;
const loppusumma = 0;

export default function Order ({url, cart, clear, removeFromCart, updateAmount}) {
  const [inputs, setInputs] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);

  function changeAmount (e, product, index) {
    updateAmount(e.target.value, product);
    setInputIndex(index);
  } 

  useEffect(() => {
    for (let i = 0;i<cart.length;i++) {
      inputs[i] = React.createRef();
    }
  }, [cart.length])

  useEffect(() => {
    if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex.current] !== null) {
      inputs[inputIndex].current.focus();
    }
  }, [cart])

  return (
    <div className='container'>
      <div className='row'>
        <h1 id="keskita">Ostoskorisi</h1>
          <table>
            <tbody col="12">
              {cart.map((product, index) => (
                //sum+=parseFloat(product.hinta);
                //riviSumma+=(product.summa)
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
                      ref={inputs[index]}
                      style={{ width: '60px' }}
                      type='number'
                      step='1'
                      min='1'
                      onChange={e => changeAmount(e, product, index)}
                      value={product.amount}
                    />
                  </td>
                  <td>Yhteensä: {riviSumma} </td>
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

