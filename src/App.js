import './App.css';

import paa from './img/paa.png';
import karry from './img/karry.png';
import logo from './img/logo.png';
import lasi from './img/lasi.png';
// <div classNameName="App">
//   <header classNameName="App-header">
//     <h1>KAUPPA!</h1>
//     <p>KAUPPA!</p>
//   </header>
// </div>
function App() {
  return (



    <div>
      <div className="row content">
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                  <li className="nav-item">
                    <a href="#" className="nav-link align-middle px-0">
                      <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                      <li className="w-100">
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
                  </li>
                  <li>
                    <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                      <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                    <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                      <li className="w-100">
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
                    <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                      <li className="w-100">
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                  </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                  <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                    <span className="d-none d-sm-inline mx-1">loser</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                  </ul>

                </div>

              </div>

            </div>


           


            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src='http://placehold.it/200' class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="http://placehold.it/200" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="http://placehold.it/200" class="d-block w-100" alt="..."/>
                </div>
              </div>
            </div>
            t. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos hic a, perspiciatis neque repellendus qui dolores nesciunt quam unde, molestias vitae quod quibusdam iure cupiditate adipisci at eius facilis.
            

          </div>
          <footer className="container-fluid">
            <p>Footer Text</p>

            {/* <div class="container my-5">

  <footer class="bg-dark text-center text-lg-start text-white">
    <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row mt-4">
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">See other books</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white"><i class="fas fa-book fa-fw fa-sm me-2"></i>Bestsellers</a>
            </li>
            <li>
              <a href="#!" class="text-white"><i class="fas fa-book fa-fw fa-sm me-2"></i>All books</a>
            </li>
            <li>
              <a href="#!" class="text-white"><i class="fas fa-user-edit fa-fw fa-sm me-2"></i>Our authors</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Execution of the contract</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white"><i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Supply</a>
            </li>
            <li>
              <a href="#!" class="text-white"><i class="fas fa-backspace fa-fw fa-sm me-2"></i>Returns</a>
            </li>
            <li>
              <a href="#!" class="text-white"><i class="far fa-file-alt fa-fw fa-sm me-2"></i>Regulations</a>
            </li>
            <li>
              <a href="#!" class="text-white"><i class="far fa-file-alt fa-fw fa-sm me-2"></i>Privacy policy</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Publishing house</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white">The BookStore</a>
            </li>
            <li>
              <a href="#!" class="text-white">123 Street</a>
            </li>
            <li>
              <a href="#!" class="text-white">05765 NY</a>
            </li>
            <li>
              <a href="#!" class="text-white"><i class="fas fa-briefcase fa-fw fa-sm me-2"></i>Send us a book</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Write to us</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white"><i class="fas fa-at fa-fw fa-sm me-2"></i>Help in purchasing</a>
            </li>
            <li>
              <a href="#!" class="text-white"><i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Check the order status</a>
            </li>
            <li>
              <a href="#!" class="text-white"><i class="fas fa-envelope fa-fw fa-sm me-2"></i>Join the newsletter</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2021 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
    <!-- Copyright -->
  </footer>

</div> */}
          </footer>

        </div>

      </div>

    </div>


  );
}

export default App;
