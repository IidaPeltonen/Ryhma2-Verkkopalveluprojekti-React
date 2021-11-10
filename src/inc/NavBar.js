import React from 'react'
import logo from '../img/logo.png';

export default function NavBar() {
    return (
        <div className="row">
            <div className="col-2 d-none d-sm-block p-0 sidenav-container p-3 min-vh-100">
                <div className="mt-3">
                    <img className="logo" src={logo} />
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        KIRJAT
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Kauhukirjallisuus</a></li>
                        <li><a className="dropdown-item" href="#">Romantiikka</a></li>
                        <li><a className="dropdown-item" href="#">Fantasia</a></li>
                        <li><a className="dropdown-item" href="#">Jännitys</a></li>
                        <li><a className="dropdown-item" href="#">Placeholder</a></li>
                    </ul>
                </div>



                <ul className="list-group m-5">
                    <li className="list-unstyled border-0 p-2"> <a href="" className="text-light text-decoration-none"><span
                        className="ms-1 d-none d-sm-inline text-decoration-none">KIRJAT</span></a></li>
                    <li className="list-unstyled border-0 p-2"> <a href="" className="text-light text-decoration-none"><span
                        className="ms-1 d-none d-sm-inline text-decoration-none">TARJOUKSET</span></a></li>
                    <li className="list-unstyled border-0 p-2"> <a href="" className="text-light text-decoration-none"><span
                        className="ms-1 d-none d-sm-inline text-decoration-none">UUTUUDET</span></a></li>
                    <li className="list-unstyled border-0 p-2"> <a href="" className="text-light text-decoration-none"><span
                        className="ms-1 d-none d-sm-inline text-decoration-none">TILAUKSET</span></a></li>
                </ul>
            </div>
            <div className="col-12 col-sm-9 p-0">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="list-group d-block d-sm-none">
                            <li className="list-unstyled border-0 p-2"> <a href=""> Product 1 </a></li>
                            <li className="list-unstyled border-0 p-2"> <a href=""> Product 2 </a></li>
                            <li className="list-unstyled border-0 p-2"> <a href=""> Product 3 </a></li>
                            <li className="list-unstyled border-0 p-2"> <a href=""> Product 4 </a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
