import './App.css'
import { Route, useLocation, Switch } from 'react-router-dom'
import Category from './Category'
import Footer from './inc/Footer'
import Header from './inc/Header'
import Home from './Home'
import NavBar from './inc/NavBar'
import ContactUs from './inc/ContactUs'
import UKK from './inc/UKK'
import Rekisteri from './inc/Rekisteri'
import Evasteet from './inc/Evasteet'
import AboutUs from './inc/AboutUs'
import { useState, useEffect } from 'react'
import Order from './Order'
import Detail from './Detail'
import Admin from './Admin'
import Kirja from './Kirja'
import User from './User'
import Asiakas from './Asiakas'
import CategoryAdmin from './Category_admin'
import Tilaus from './Tilaus'
import Uutuudet from './inc/Uutuudet'
import Tarjoukset from './inc/Tarjoukset'
import Kaikki from './Kaikki'

const URL = 'http://localhost/kauppa/'

function App () {
  const [category, setCategory] = useState(null)
  const [cart, setCart] = useState([])
  const [kirja, setKirja] = useState([])
  let location = useLocation()

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  //ostoskorin tyhjennys kokonaan
  function clear() {
    setCart([])
    localStorage.removeItem('cart')
  }

  useEffect(() => {
    if (location.state !== undefined) {
      if (location.pathname === '/category') {
        setCategory({ id: location.state.id, name: location.state.name })
      } else if (location.pathname === '/detail') {
        setKirja({
          kirjaid: location.state.kirjaid,
          kirjanimi: location.state.kirjanimi,
          kirjailija: location.state.kirjailija,
          vuosi: location.state.vuosi,
          kieli: location.state.kieli,
          kustantaja: location.state.kustantaja,
          kuvaus: location.state.kuvaus,
          hinta: location.state.hinta,
          saldo: location.state.saldo,
          kuva: location.state.kuva
        })
      }
    }
  }, [location.state])

  //tuotteen lisäys ostoskoriin
  function addToCart (product) {
    if (cart.some(item => item.kirjaid === product.kirjaid)) {
      const existingProduct = cart.filter(
        item => item.kirjaid === product.kirjaid
      )
      updateAmount(parseInt(existingProduct[0].amount) + 1, product)
    } else {
      product['amount'] = 1
      const newCart = [...cart, product]
      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
    }
  }

  //tuotteen poisto ostoskorista
  function removeFromCart (product) {
    const itemsWithoutRemoved = cart.filter(
      item => item.kirjaid !== product.kirjaid
    )
    setCart(itemsWithoutRemoved)
    localStorage.setItem('cart', JSON.stringify(itemsWithoutRemoved))
  }

  //ostoskorin määrän muokkaus
  function updateAmount (amount, product) {
    product.amount = amount
    const index = cart.findIndex(item => item.kirjaid === product.kirjaid)
    const modifiedCart = Object.assign([...cart], { [index]: product })
    setCart(modifiedCart)
    localStorage.setItem('cart', JSON.stringify(modifiedCart))
  }

  return (
    <div className='container-fluid'>
      <NavBar url={URL} setCategory={setCategory} cart={cart} />
      <Header />
      <Switch>
        <Route
          path='/'
          render={() => (
            <Home url={URL} category={category} addToCart={addToCart} />
          )}
          exact
        />
        <Route
          path='/category'
          render={() => (
            <Category url={URL} category={category} addToCart={addToCart} />
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
        <Route 
          path='/kirja' 
          render={() => (
          <Kirja
            url={URL}
          />
          )}
        />
        <Route 
          path='/category_admin' 
          render={() => (
          <CategoryAdmin
            url={URL}
          />
          )}
        />
        <Route 
          path='/user' 
          render={() => (
          <User
            url={URL}
          />
          )}
        />
        <Route 
          path='/asiakas' 
          render={() => (
          <Asiakas
            url={URL}
          />
          )}
        />
        <Route 
          path='/tilaus' 
          render={() => (
          <Tilaus
            url={URL}
          />
          )}
        />
        <Route 
          path='/kaikki' 
          render={() => (
          <Kaikki
            url={URL}
          />
          )}
        />
        <Route
          path='/detail'
          render={() => <Detail kirja={kirja} addToCart={addToCart} />}
        />
        <Route 
        path='/uutuudet' 
        render={() => <Uutuudet url={URL} addToCart={addToCart} />}
        />
        <Route path='/admin' render={() => < Admin />} />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/ukk' component={UKK} />
        <Route path='/rekisteri' component={Rekisteri} />
        <Route path='/evasteet' component={Evasteet} />
        
        <Route path='/tarjoukset' component={Tarjoukset} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
