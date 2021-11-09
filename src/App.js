import './App.css';

import paa from './img/paa.png';
import karry from './img/karry.png';
import logo from './img/logo.png';
import lasi from './img/lasi.png';
// <div classNameName="App">
//   <header classNameName="App-header">
//     <h1>KAUPPAsite1</h1>
//     <p>KAUPPAsite1</p>
//   </header>
// </div>
function App() {
  return (


    <div className="row content">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-2 col-xl-2 px-sm-2 px-0 sidenav-container">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
            <div className="logo mt-3">
              <img src={logo} />
            </div>
            <div className="my-auto mx-auto">
              {/* <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a> */}
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <a href="site9" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">KIRJAT</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="site9" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">TARJOUKSET</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="site9" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">UUTUUDET</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="site9" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">TILAUKSET</span>
                  </a>
                </li>
              </ul>
            </div>
            <hr />

            {/* <div className="dropdown pb-4">
                  <a href="site5" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                    <span className="d-none d-sm-inline mx-1">loser</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="site1">New project...</a></li>
                    <li><a className="dropdown-item" href="site2">Settings</a></li>
                    <li><a className="dropdown-item" href="site3">Profile</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="site4">Sign out</a></li>
                  </ul>

                </div> */}

          </div>

        </div>

        <div classname="row ">

          {/* header */}

          <div className="col-auto no-left-space">
            <div className="p-0 no-left-space-header">
              <header className="header-style text-center text-lg-start">
                <div className="container p-4">
                  <h1>KIRJAKAUPPA X</h1>
                </div>

              </header>

              {/* header päättyy */}

            </div>
            {/* content*/}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nesciunt illo eaque ab molestias dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nesciunt illo eaque ab molestias dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nesciunt illo eaque ab molestias dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nesciunt illo eaque ab molestias dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nesciunt illo eaque ab molestias dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nesciunt illo eaque ab molestias dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
          ores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              remque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum d Lorem ipsum dolor sit amet cs dolores repudiandae libero voluptatum maxime n
              o nesciunt illo eaque ab molestias dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nesciunt illo eaque ab molestias dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nesciunt illo eaque ab molestias dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nesciunt illo eaque ab molestias dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum d Lorem ipsum dolor sit amet cs dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              remque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum d Lorem ipsum dolor sit amet cs dolores repudiandae libero voluptatum maxime n
              o nesciunt illo eaque ab molestias dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nesciunt illo eaque ab molestias dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nesciunt illo eaque ab molestias dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto nesciunt illo eaque ab molestias dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum d Lorem ipsum dolor sit amet cs dolores repudiandae libero voluptatum maxime necessitatibus cum doloremque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              remque perferendis sequi ea accusamus, deserunt, aliquam, voluptatem totam.
              Lorem ipsum d Lorem ipsum dolor sit amet cs dolores repudiandae libero voluptatum maxime n
            </p>
          </div>


          <div className="p-0 no-left-space-footer">
            <footer className="text-center text-lg-start text-white">
              <div className="container p-4">
                <div className="row mt-5">
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">See other books</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="site1" className="text-white"><i className="fas fa-book fa-fw fa-sm me-2"></i>Bestsellers</a>
                      </li>
                      <li>
                        <a href="site1" className="text-white"><i className="fas fa-book fa-fw fa-sm me-2"></i>All books</a>
                      </li>
                      <li>
                        <a href="site1" className="text-white"><i className="fas fa-user-edit fa-fw fa-sm me-2"></i>Our authors</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Execution of the contract</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="site1" className="text-white"><i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Supply</a>
                      </li>
                      <li>
                        <a href="site1" className="text-white"><i className="fas fa-backspace fa-fw fa-sm me-2"></i>Returns</a>
                      </li>
                      <li>
                        <a href="site1" className="text-white"><i className="far fa-file-alt fa-fw fa-sm me-2"></i>Regulations</a>
                      </li>
                      <li>
                        <a href="site1" className="text-white"><i className="far fa-file-alt fa-fw fa-sm me-2"></i>Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Publishing house</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="site1" className="text-white">The BookStore</a>
                      </li>
                      <li>
                        <a href="site1" className="text-white">123 Street</a>
                      </li>
                      <li>
                        <a href="site1" className="text-white">05765 NY</a>
                      </li>
                      <li>
                        <a href="site1" className="text-white"><i className="fas fa-briefcase fa-fw fa-sm me-2"></i>Send us a book</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Write to us</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="site1" className="text-white"><i className="fas fa-at fa-fw fa-sm me-2"></i>Help in purchasing</a>
                      </li>
                      <li>
                        <a href="site1" className="text-white"><i className="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Check the order status</a>
                      </li>
                      <li>
                        <a href="" className="text-white"><i className="fas fa-envelope fa-fw fa-sm me-2"></i>Join the newsletter</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center p-3">
                © 2021 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
              </div>

            </footer>

          </div>
        </div>









      </div>

      {/* <footer className="container-fluid">
              <p>Footer Text</p>
            </footer> */}


    </div>





  );
}

export default App;
