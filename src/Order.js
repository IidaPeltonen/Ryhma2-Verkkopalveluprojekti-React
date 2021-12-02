import React from 'react'
import uuid from 'react-uuid'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './inc/styles/Order.css'

//yhden rivin summa



//riviSumma: (product.hinta * (product.amount)),

export default function Order({
  url,
  cart,
  clear,
  removeFromCart,
  updateAmount
}){
  const [inputs, setInputs] = useState([])
  const [inputIndex, setInputIndex] = useState(-1)
  const [finished, setFinished] = useState(false)

  function changeAmount(e, product, index) {
    updateAmount(e.target.value, product)
    setInputIndex(index)
  }

  useEffect(() => {
    for (let i = 0; i < cart.length; i++) {
      inputs[i] = React.createRef()
    }
  }, [cart.length])

  //ostoskorin määräkentän fokuksen määrittely
  useEffect(() => {
    if (
      inputs.length > 0 &&
      inputIndex > -1 &&
      inputs[inputIndex].current !== null &&
      inputs[inputIndex].current !== undefined
    ) {
      inputs[inputIndex].current.focus()
    }
  }, [cart])


  let riviSumma = 0
  let loppuSumma = 0

  if (finished === false) {
  return (
    <div className='container'>
      <div className='row table-responsive-md'>
        <h1 id='keskita'>Ostoskorisi</h1>
        <table className='table'>
          <tbody className='col-12'>
            {cart.map((product, index) => {
            riviSumma=(product.hinta * product.amount)
            loppuSumma+=parseFloat(riviSumma)
            return (
              <tr key={uuid()}>
                <th scope='col' className='align-middle'>
                  <img src={product.kuva} alt='kirjan kansikuva'></img>
                  <Link
                    className='musta'
                    to={{
                      pathname: '/detail',
                      state: {
                        id: product.id,
                        kirjanimi: product.kirjanimi,
                        kirjailija: product.kirjailija,
                        vuosi: product.vuosi,
                        kieli: product.kieli,
                        kustantaja: product.kustantaja,
                        kuvaus: product.kuvaus,
                        hinta: product.hinta,
                        saldo: product.saldo,
                        kuva: product.kuva
                    }
                    }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#447f43" className="bi bi-info-square ms-5" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg></Link>
                    
                </th>
                <th scope='col' className='align-middle' id='notbold'>
                  {product.kirjailija}
                </th>
                <th scope='col' className='align-middle' id='notbold'>
                  {product.kirjanimi}
                </th>
                <th scope='col' className='align-middle' id='notbold'>
                  {product.hinta}€
                </th>
                <th scope='col' className='align-middle' id='notbold'>
                  <input
                    ref={inputs[index]}
                    min = '1'
                    step = '1'
                    type = 'number'
                    style={{ width: '60px' }}
                    onChange={e => changeAmount(e, product, index)}
                    value={product.amount}
                  />
                </th>
                <th scope='col' className='align-middle' id='notbold'>
                  Yhteensä: {riviSumma.toFixed(2)}€
                </th>
               
                <th scope='col' className='align-middle'>
                  <button
                    className='btn'
                    type='button'
                    onClick={() => removeFromCart(product)}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='25'
                      fill='#00000'
                      className='bi bi-trash'
                      viewBox='0 0 16 16'
                    >
                      <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
                      <path
                        fillRule='evenodd'
                        d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
                      />
                    </svg>
                  </button>
                </th>
              </tr>
            )})}
                </tbody>
                </table>
        
         
        <div id='keskita'>
          <br />
          <br />
          <p>Tilauksesi loppusumma on {loppuSumma.toFixed(2)} €</p>
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
} else {
    return (<h3>Thank you for your order!</h3>)
}
}
