import React from 'react'
import logo from '../img/logo.png';
import './styles/NavBar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect} from 'react';

const URL = 'http://localhost/kauppa';

export default function NavBar() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(URL + '/tuoteKategoria.php')
            .then((response)=> {
                const json = response.data;
                console.log(response);
                setCategories(json);
            }).catch(error => {
                if (error.response === undefined) {
                    alert(error);
                } else {
                    alert(error.response.data.error);
                }
            })
    }, [])
    
    return (
      
      <div className="row">
        <nav id="id" className="navbar navbar-expand-md  ">
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
                <li className="nav-item dropdown" >
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Kirjat
                  </a>
                  <ul id="alasveto" className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {categories.map(kirja => (
                        <li>
                            <Link>
                            {kirja.trnimi}
                            </Link>
                        </li>
                    ))}
                   
                   { <li>
                      <hr className="dropdown-divider" />
                    </li>}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
    )
}