import React from 'react'
import logo from '../img/logo.png';
import './styles/NavBar.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

const URL = 'http://localhost/kauppa';

export default function NavBar() {
    return (
      
        
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#omaMenu"
              aria-controls="omaMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="omaMenu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Etusivu</Link >
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ukk">UKK</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Kirjat
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="avaruusvisa.html">Avaruusvisa</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="elaimet.html">Eläinvisa</a></li>
                    <li>

                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="elaimet2.html">Eläinvisa 2</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="englantivisa.html">Englantivisa</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="helppo_matikkavisa.html">Helppo matikkavisa</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="historiavisa.html">Historiavisa</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="maantieto.html">Maantietovisa</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="matikka1.html">Matikkavisa</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="ruotsivisa.html">Ruotsivisa</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}