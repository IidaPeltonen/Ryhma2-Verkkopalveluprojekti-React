import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import karry from './img/karry.png'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Top({ url, addToCart }) {
  const [kirjat, setKirjat] = useState([])
  const [valittuKirja, setValittuKirja] = useState(null)

  function notify() {
    toast('Kirja lisätty ostoskoriin!')
  }
//**  Vanhan sliderin propertiesit */
  // const propertiesTop = {
  //   duration: 5000,
  //   slidesToShow: 5,
  //   slidesToScroll: 2,
  //   autoplay: false,
  //   indicators: false,
  //   arrows: true
  // }

  useEffect(() => {
    axios
      .get(url + '/Top.php')
      .then(response => {
        setKirjat(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }, [])

  const items = kirjat;

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    767: { items: 3 },
    1023: { items: 5 },
  };

  const handleDragStart = (e) => e.preventDefault();

  return (
    <div id='reuna' className='container-fluid'>
      <h2 id='heading' className='ms-4'>
        Myydyimmät kirjat
      </h2>
      <ol id='top7' className='row'>  
        <AliceCarousel mouseTracking
          responsive={responsive}
          disableDotsControls={true}
          infinite={true}
          // autoPlay={true}
          // autoPlayInterval={5000}
          items={items?.map(kirja => (
            <div onDragStart={handleDragStart}  className="item" key={kirja.kirjaid}>
              <div className="row" id="homerow">
                <b> {kirja.rownum}. </b>
                <br />
                <div onClick={e => setValittuKirja(kirja)}>
                  <Link
                    className='musta'
                    to={{
                      pathname: '/detail',
                      state: {
                        kirjaid: kirja.kirjaid,
                        kirjanimi: kirja.kirjanimi,
                        kirjailija: kirja.kirjailija,
                        vuosi: kirja.vuosi,
                        kieli: kirja.kieli,
                        kustantaja: kirja.kustantaja,
                        kuvaus: kirja.kuvaus,
                        hinta: kirja.hinta,
                        saldo: kirja.saldo,
                        kuva: kirja.kuva
                      }
                    }}
                  >
                    <img id='kirja' src={kirja.kuva} alt='kirjan kansikuva' />
                    <br />
                    <b>
                      {kirja.kirjanimi} <br />
                      {kirja.kirjailija}
                    </b>
                    <br />
                    Hinta: {kirja.hinta} €<br />
                  </Link>
                </div>
                <div>
                  <button
                    className='btn'
                    type='button'
                    onClick={function (event) {
                      addToCart(kirja)
                      notify()
                    }}
                  >
                    <img id='pieni' src={karry} alt='ostoskärry' />
                  </button>
                </div>

              </div>
            </div>
          ))}
 >
              </AliceCarousel>
              <ToastContainer
        position='bottom-right'
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      </ol>
    </div>
  );
  //********* VANHA SLIDER ja return *********

  // return (
  //   <div id='reuna' className='container-fluid'>
  //     <h2 id='heading' className='ms-4'>
  //       Myydyimmät kirjat
  //     </h2>
  //     <ol id='top7' className='row'>
  // <Slide {...propertiesTop}>
  //   {kirjat?.map(kirja => (
  //     <div key={kirja.kirjaid}>

  //       <div className="row" id="homerow">
  //         <b> {kirja.rownum}. </b>
  //         <br />
  //         <div onClick={e => setValittuKirja(kirja)}>
  //           <Link
  //             className='musta'
  //             to={{
  //               pathname: '/detail',
  //               state: {
  //                 kirjaid: kirja.kirjaid,
  //                 kirjanimi: kirja.kirjanimi,
  //                 kirjailija: kirja.kirjailija,
  //                 vuosi: kirja.vuosi,
  //                 kieli: kirja.kieli,
  //                 kustantaja: kirja.kustantaja,
  //                 kuvaus: kirja.kuvaus,
  //                 hinta: kirja.hinta,
  //                 saldo: kirja.saldo,
  //                 kuva: kirja.kuva
  //               }
  //             }}
  //           >
  //             <img id='kirja' src={kirja.kuva} alt='kirjan kansikuva' />
  //             <br />
  //             <b>
  //               {kirja.kirjanimi} <br />
  //               {kirja.kirjailija}
  //             </b>
  //             <br />
  //             Hinta: {kirja.hinta} €<br />
  //           </Link>
  //         </div>
  //         <div>
  //           <button
  //             className='btn'
  //             type='button'
  //             onClick={function (event) {
  //               addToCart(kirja)
  //               notify()
  //             }}
  //           >
  //             <img id='pieni' src={karry} alt='ostoskärry' />
  //           </button>
  //         </div>

  //       </div>
  //     </div>
  //   ))}
  // </Slide>
  //     <ToastContainer
  //       position='bottom-right'
  //       autoClose={4000}
  //       hideProgressBar={true}
  //       newestOnTop={false}
  //       closeOnClick
  //       rtl={false}
  //       pauseOnFocusLoss
  //       draggable
  //       pauseOnHover
  //     />
  //   </ol>
  // </div>
  // )
}

export default Top


