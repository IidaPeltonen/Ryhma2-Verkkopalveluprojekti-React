import './App.css'
import { Route, useLocation, Switch } from 'react-router-dom'
import Category from './Category'
import './inc/styles/Details.css'
import Footer from './inc/Footer'
import Header from './inc/Header'
import Home from './Home'
import NavBar from './inc/NavBar'
import ContactUs from './inc/ContactUs'
import UKK from './inc/UKK'
import Rekisteri from './inc/Rekisteri'
import AboutUs from './inc/AboutUs'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import karry from './img/karry.png'
import Order from './Order'
//import uuid from 'react-uuid'

const URL = 'http://localhost/kauppa'

function App () {
  const [category, setCategory] = useState(null);
  //const [searchPhrase, setsearchPhrase] = useState(''); muuuttuja hakua varten
  const [cart, setCart] = useState([]);

  let location = useLocation();

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')))
      console.log(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  //ostoskorin tyhjennys kokonaan
  function clear () {
    localStorage.clear()
    window.location.reload(true)
  }

  useEffect(() => {
    if (location.state !== undefined) {
      setCategory({ id: location.state.id, name: location.state.name })
    }
  }, [location.state])

  //tuotteen lisäys ostoskoriin
  function addToCart (product) {
    if (cart.some(item => item.kirjaid === product.kirjaid)) {
      const existingProduct = cart.filter(item => item.kirjaid === product.kirjaid)
      updateAmount(parseInt(existingProduct[0].amount) +1, product);
    }
    else {
      product["amount"] = 1
      const newCart = [...cart, product]
      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
    }
  }
    
 //tuotteen poisto ostoskorista
  function removeFromCart (product) {
    const itemsWithoutRemoved = cart.filter(item => item.kirjaid !== product.kirjaid)
    setCart(itemsWithoutRemoved)
    localStorage.setItem('kirja', JSON.stringify(itemsWithoutRemoved))
  }

 //ostoskorin määrän muokkaus  
  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.kirjaid === product.kirjaid))
    const modifiedCart = Object.assign([...cart],{[index]: product})
    setCart(modifiedCart)
    localStorage.setItem('cart', JSON.stringify(modifiedCart))
  }

  //yhden kirjan tiedot
  function Detail (kirja) {
    return (
      <div id='detail' className='row'>
        <div className='col-5'>
          <img id='detailKuva' src={kirja.kuva} alt='kirjan kansikuva'></img>
        </div>
        <div className='col-1'></div>
        <div className='col-6'>
          <h1 id='centerh1'>{kirja.kirjanimi}</h1>
          <h2 id='centerh2'>{kirja.kirjailija}</h2>
          <p>{kirja.kuvaus}</p>
          <p>Julkaisuvuosi: {kirja.vuosi} </p>
          <p>Kieli: {kirja.kieli}</p>
          <p>Kustantaja: {kirja.kustantaja}</p>
        </div>
        <div className='col-1'></div>
        <div className='col-3'>
          <button className='btn-primary p-2 btnBacktoList'>
            <Link className='backToList' to='#' onClick={kirja.close}>
              Takaisin listaukseen
            </Link>
          </button>
        </div>
        <div className='col-3'></div>
        <div className='col-4'>
          <p>Hinta: {kirja.hinta}€</p>
          <img id='detailKarry' src={karry} alt='ostoskarry'></img>
          <br />
          <button
            className='btn btn-primary backToList'
            type='button'
            onClick={e => addToCart(kirja)}
          >
           Lisää ostoskoriin
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='container-fluid'>
      <NavBar url={URL} setCategory={setCategory} cart={cart} />
      <Header />
      <Switch>
        <Route
          path='/'
          render={() => (
            <Home
              url={URL}
              category={category}
              addToCart={addToCart}
              Detail={Detail}
            />
          )}
          exact
        />
        <Route
          path='/category'
          render={() => (
            <Category
              url={URL}
              category={category}
              addToCart={addToCart}
              Detail={Detail}
            />
          )}
        />
        <Route
          path='/order'
          render={() => (
            <Order
              url={URL}
              cart={cart}
              clear={clear}
              removeFromCart={removeFromCart}
              updateAmount={updateAmount}
            />
          )}
        />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/ukk' component={UKK} />
        <Route path='/rekisteri' component={Rekisteri} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
