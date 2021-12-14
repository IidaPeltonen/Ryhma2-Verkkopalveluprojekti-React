import React from 'react'
import uuid from 'react-uuid'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './inc/styles/Order.css'
import axios from 'axios'

export default function Order ({
  url,
  cart,
  clear,
  removeFromCart,
  updateAmount
}) {
  const [inputs, setInputs] = useState([])
  const [inputIndex, setInputIndex] = useState(-1)
  const [finished, setFinished] = useState(false)
  const [asetunimi, setAsetunimi] = useState('')
  const [assukunimi, setAssukunimi] = useState('')
  const [asosoite, setAsosoite] = useState('')
  const [postinro, setPostinro] = useState('')
  const [postitmp, setPostitmp] = useState('')
  const [puhelin, setPuhelin] = useState('')
  const [email, setEmail] = useState('')

  function changeAmount (e, product, index) {
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

  function tilaa (e) {
    e.preventDefault()
    const json = JSON.stringify({
      asetunimi: asetunimi,
      assukunimi: assukunimi,
      asosoite: asosoite,
      postinro: postinro,
      postitmp: postitmp,
      puhelin: puhelin,
      email: email,
      cart: cart
    })
    axios
      .post(url + 'php/tilaus/tilaus.php', json, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        clear()
        setFinished(true)
      })
      .catch(error => {
        alert(error.response.data.error)
      })
  }

  let riviSumma = 0
  let loppuSumma = 0

  if (finished === false) {
    return (
      <div className='container'>
        <div>
          <h1 id='keskita'>Ostoskorisi</h1>
        </div>
        <div id='reuna' className='row'>
          <div className='col-10'></div>
          <button
            className='tyhjenna orderbutton btn ms-2'
            type='button'
            onClick={e => clear()}
          >
            Tyhjennä ostoskori
          </button>
        </div>
        <div className='row table-responsive'>
          <table className='table'>
            <tbody className='col-12'>
              {cart.map((product, index) => {
                riviSumma = product.hinta * product.amount
                loppuSumma += parseFloat(riviSumma)
                return (
                  <tr key={uuid()}>
                    <th scope='col' className='align-middle'>
                      <img src={product.kuva} alt='kirjan kansikuva'></img>
                      <Link
                        className='musta'
                        to={{
                          pathname: '/detail',
                          state: {
                            kirjaid: product.kirjaid,
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
                        }}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='40'
                          height='40'
                          fill='#447f43'
                          className='bi bi-info-square ms-5'
                          viewBox='0 0 16 16'
                        >
                          <path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
                          <path d='m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
                        </svg>
                      </Link>
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
                        min='1'
                        step='1'
                        type='number'
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
                )
              })}
            </tbody>
          </table>

          {cart.length > 0 && (
            <div className="col">
              <p>Tilauksesi loppusumma on {loppuSumma.toFixed(2)} €</p>

              <form onSubmit={tilaa} className="container-fluid">
                <div className="row">
                <label className="col-12 ps-0 mb-2">Täytä asiakastiedot:</label>
                <input
                  value={asetunimi}
                  className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
                  placeholder='etunimi'
                  onChange={e => setAsetunimi(e.target.value)}
                />
                <input
                  value={assukunimi}
                  className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
                  placeholder='sukunimi'
                  onChange={e => setAssukunimi(e.target.value)}
                />
                <input
                  value={asosoite}
                  className="col-sm-10 col-md-3 mt-2 me-2 mb-2"
                  placeholder='osoite'
                  onChange={e => setAsosoite(e.target.value)}
                />
                <input
                  value={postinro}
                  className="col-sm-10 col-md-3 mt-2 me-2 mb-2"
                  placeholder='postinumero'
                  onChange={e => setPostinro(e.target.value)}
                />
                <input
                  value={postitmp}
                  className="col-sm-10 col-md-3 mt-2 me-2 mb-2"
                  placeholder='postitoimipaikka'
                  onChange={e => setPostitmp(e.target.value)}
                />
                <input
                  value={puhelin}
                  className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
                  placeholder='puhelinnumero'
                  onChange={e => setPuhelin(e.target.value)}
                />
                <input
                  value={email}
                  className="col-sm-10 col-md-5 mt-2 me-2 mb-2"
                  placeholder='e-mail'
                  onChange={e => setEmail(e.target.value)}
                />
                </div>
                <div className="row">
                <button className="btn orderbutton col-sm-4 col-md-2 mt-3">Tallenna ja tilaa
                </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    )
  } else {
    return <h3>Kiitos tilauksesta!</h3>
  }
}
