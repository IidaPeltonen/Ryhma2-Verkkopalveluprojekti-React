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
import Evasteet from './inc/Evasteet'
import AboutUs from './inc/AboutUs'
import { useState, useEffect } from 'react'
import Order from './Order'
import Detail from './Detail'

const URL = 'http://localhost/kauppa'

function App() {
  const [category, setCategory] = useState(null)
  //const [searchPhrase, setsearchPhrase] = useState(''); muuuttuja hakua varten
  const [cart, setCart] = useState([])
  const [kirja, setKirja] = useState([])

  let location = useLocation()

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')))
      console.log(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  //ostoskorin tyhjennys kokonaan
  function clear() {
    localStorage.clear()
    window.location.reload(true)
  }

  useEffect(() => {
    if (location.state !== undefined) {
      if (location.pathname === "/category") {
        setCategory({ id: location.state.id, name: location.state.name })
      } else if (location.pathname === "/detail") {
        setKirja({
          id: location.state.id,
          kirjanimi: location.state.kirjanimi,
          kirjailija: location.state.kirjailija,
          vuosi: location.state.vuosi,
          kieli: location.state.kieli,
          kustantaja: location.state.kustantaja,
          kuvaus: location.state.kuvaus,
          hinta:location.state.hinta,
          saldo:location.state.saldo,
          kuva: location.state.kuva,

        })
      }

    }
  }, [location.state])

  //tuotteen lisäys ostoskoriin
  function addToCart(product) {
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
  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(
      item => item.kirjaid !== product.kirjaid
    )
    setCart(itemsWithoutRemoved)
    localStorage.setItem('cart', JSON.stringify(itemsWithoutRemoved))
  }

  //ostoskorin määrän muokkaus
  function updateAmount(amount, product) {
    product.amount = amount
    const index = cart.findIndex(item => item.kirjaid === product.kirjaid)
    const modifiedCart = Object.assign([...cart], { [index]: product })
    setCart(modifiedCart)
    localStorage.setItem('cart', JSON.stringify(modifiedCart))
  }

  return (
    <div className='container-fluid'>
      <NavBar
        url={URL}
        setCategory={setCategory}
        cart={cart}
        Detail={Detail}
        addToCart={addToCart}
        kirja={kirja}
      />
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
        <Route
          path='/detail'
          render={() => (
            <Detail
              kirja={kirja}
              addToCart={addToCart}
            />
          )}
        />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/ukk' component={UKK} />
        <Route path='/rekisteri' component={Rekisteri} />
        <Route path='/evasteet' component={Evasteet} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
