import React from 'react'
import { Link } from 'react-router-dom';
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
                <Link className="text-center " to="/ukk">UKK</Link>
                </div>
                <div className="col-md-2 col-10">
                <Link className="text-center " to="/rekisteri">Rekisteriseloste</Link>
                </div>
                <div className="col-md-2 col-10 ">
                <Link className="text-center " to="/uutiskirje">Tilaa uutiskirje</Link>
                </div>
              </footer>
        </div>
    )
}
