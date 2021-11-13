import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import './styles/Footer.css';


export default function Footer() {
    return (
        <div>
            <footer className="row">
                <div className="col-md-2 col-10">
                  <Link className="text-center " to="/contactus">Yhteystiedot</Link>
                </div>
                <div className="col-md-2 col-10">
                <Link className="text-center " to="/aboutus">Tietoa meistä</Link>
                </div>
                <div className="col-md-2 col-10">
                <Link className="text-center " to="/ukk">Tietoa meistä</Link>
                </div>
                <div className="col-md-2 col-10">
                  <p className="text-center">Rekisteriseloste</p>
                </div>
                <div className="col-md-2 col-10 ">
                  <p className="text-center">Tilaa uutiskirje</p>
                </div>
              </footer>
        </div>
    )
}
