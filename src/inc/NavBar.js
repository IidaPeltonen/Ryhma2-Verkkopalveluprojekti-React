import React from 'react'
import logo from '../img/logo.png'
import './styles/NavBar.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Cart from './Cart'
import SearchBar from './SearchBar'

export default function NavBar ({ url, setCategory, cart, Detail, addToCart }) {
  const [categories, setCategories] = useState([])
  const [kirjat, setKirjat] = useState([])

  useEffect(() => {
    axios
      .get(url + '/tuoteKategoriaLinkit.php')
      .then(response => {
        const json = response.data
        setCategories(json)
        setCategory(json[0])
        console.log(response)
      })
      .catch(error => {
        if (error.response === undefined) {
          alert(error)
        } else {
          alert(error.response.data.error)
        }
      })
  }, [])

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setKirjat(response.data)
        console.log(response)
      })
      .catch(error => {
        if (error.response === undefined) {
          alert(error)
        } else {
          alert(error.response.data.error)
        }
      })
  }, [])

  return (
    <div className='row'>
      <nav id='id' className='navbar navbar-expand-md'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#omaMenu'
            aria-controls='omaMenu'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='col-2'>
            <Link to='/'>
              <img
                className='img-fluid logo'
                src={logo}
                alt='yrityksen logo'
              ></img>
            </Link>
          </div>
          <div className='collapse navbar-collapse' id='omaMenu'>
            <ul className='navbar-nav'>
              <li className='nav-item dropdown ms-2 me-2'>
                <a
                  className='nav-link valkoinen dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Kirjat
                </a>
                <ul
                  id='alasveto'
                  className='dropdown-menu ps-2 pe-2'
                  aria-labelledby='navbarDropdown'
                >
                  {categories.map(category => (
                    <li key={category.id}>
                      <Link
                        className='valkoinen'
                        to={{
                          pathname: '/category',
                          state: {
                            id: category.id,
                            name: category.name
                          }
                        }}
                      >
                        {category.name}
                      </Link>
                      <hr className='dropdown-divider' />
                    </li>
                  ))}
                </ul>
              </li>
              <li className='nav-item ms-2 me-2'>
                <a className='nav-link valkoinen' href='#'>
                  Uutuudet
                </a>
              </li>
              <li className='nav-item  ms-2 me-2'>
                <a className='nav-link valkoinen' href='#'>
                  Tarjoukset
                </a>
              </li>
            </ul>
            <ul className='navbar-nav ms-auto'>
              {/* Tässä oli ennen nappeja, nyt tulostaa tuolta SearchBarista. SIellä on alkuperäinen koodi kyllä, josta itsekin yritin katsoa mallia, mutten osannut. */}
              <SearchBar
                placeHolder='Hae tuotteita tästä'
                kirjat={kirjat}
                Detail={Detail}
                addToCart={addToCart}
                // className="nav-item"
              />
              <li className='nav-item  ms-2 me-2'>
                <Cart cart={cart} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
