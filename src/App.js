import './App.css'
import { Route, useLocation, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
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
  const info = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill=' #447f43'
      className='bi bi-info-circle-fill'
      viewBox='0 0 16 16'
    >
      <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
    </svg>
  )
  let location = useLocation()
  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  //ostoskorin tyhjennys kokonaan
  function clear () {
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
//routtaukset
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
              info={info}
            />
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
        <Route path='/kirja' render={() => <Kirja url={URL} />} />
        <Route
          path='/category_admin'
          render={() => <CategoryAdmin url={URL} />}
        />
        <Route path='/user' render={() => <User url={URL} />} />
        <Route path='/asiakas' render={() => <Asiakas url={URL} />} />
        <Route path='/tilaus' render={() => <Tilaus url={URL} />} />
        <Route
          path='/kaikki'
          render={() => <Kaikki url={URL} addToCart={addToCart} />}
        />
        <Route
          path='/detail'
          render={() => <Detail kirja={kirja} addToCart={addToCart} />}
        />
        <Route
          path='/uutuudet'
          render={() => <Uutuudet url={URL} addToCart={addToCart} />}
        />
        <Route path='/admin' render={() => <Admin />} />
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
