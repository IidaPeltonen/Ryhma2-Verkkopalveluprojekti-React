// import './App.css';
// import { useEffect, useState } from 'react';
// import { Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
// import Footer from './inc/Footer';
// // import Slider from '.inc/body';
// import Home from './Home';
// import paa from './img/paa.png';
// import karry from './img/karry.png';
// import logo from './img/logo.png';
// import lasi from './img/lasi.png';
// import NavBar from './inc/NavBar';
// import Header from './inc/Header';

// function App() {

//   return (
//     <>
//     <NavBar />  
//     <Header />
//       <div className="col-auto">
//         <Switch>
//           <Route path="/" component={Home} exact />
//         </Switch>
//       </div>
//       <Footer />
//     </>

//   );
// }

// export default App;

// Ylläoleva käyttöön, kun nav ym. toimii
   
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './inc/NavBar';
import Footer from './inc/Footer';
import Home from './Home';

import paa from './img/paa.png';
import karry from './img/karry.png';
import logo from './img/logo.png';
import lasi from './img/lasi.png';
import piina from './piina.png';

const URL = 'http://localhost/kauppa';

function App() {
  const [kirjat, setKirjat] = useState([]);
  const [kuva, setKuva] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setKirjat(response.data)
      }).catch(error => {
        alert(error);
      })
  }, [])

  return (
    // nav alkaa
    <div className="container-fluid">
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
          <div className="col-auto">
            <div className="p-0">
              <header className="header-style text-center text-lg-start">
                <div className="container p-4">
                  <h1>KIRJAKAUPPA X</h1>
                </div>

              </header>
              <div className="container">
                <ol>
                  {kirjat?.map(kirjat => (

                       <li key={kirjat.asid}>{kirjat.astunnus}{kirjat.asnimi}{kirjat.asosoite}{kirjat.postinro}{kirjat.puhelin}{kirjat.email}</li>

                  ))}
                </ol>
              </div>

            </div>
            <div className="container-fluid">
              <footer className="row">
                <div className="col-md-2 col-10">
                  <p className="text-center ms-4 ">Yhteystiedot</p>
                </div>
                <div className="col-md-2 col-10">
                  <p className="text-center">Tietoa meistä</p>
                </div>
                <div className="col-md-2 col-10">
                  <p className="text-center">UKK</p>
                </div>
                <div className="col-md-2 col-10">
                  <p className="text-center">Rekisteriseloste</p>
                </div>
                <div className="col-md-2 col-10 ">
                  <p className="text-center">Tilaa uutiskirje</p>
                </div>
              </footer>
            </div>

          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
