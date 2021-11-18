import './App.css';
import { Route, useLocation, Switch } from 'react-router-dom';
import Footer from './inc/Footer';
import Header from './inc/Header'
import Home from './Home';
import NavBar from './inc/NavBar';
import ContactUs from './inc/ContactUs';
import UKK from './inc/UKK';
import Rekisteri from './inc/Rekisteri';
import Uutiskirje from './inc/Uutiskirje';
import AboutUs from './inc/AboutUs';
import {useState, useEffect} from 'react';
import Category from './Category';

const URL = 'http://localhost/kauppa'

function App() {
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]);

  let location = useLocation();

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  useEffect(() => {
    // console.log(category);
    if (location.state !== undefined) {
      setCategory({id: location.state.id, name: location.state.name});     
    }
  }, [location.state])

  function addToCart(kirjat) {
    const newCart = [...cart,kirjat];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  return (
    <div className="container-fluid">
      <NavBar url={URL} setCategory={setCategory} cart={cart}/>
      <Header />
      <Switch>
        <Route
          path="/"
          render={() =>
            <Home
              url={URL}
              category={category}
              addToCart={addToCart}
            />
          }
          exact
          />
          <Route path="/category" 
          render={() =>
            <Category
            url={URL}
            category={category}
            />
          }
          />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/ukk" component={UKK} />
        <Route path="/rekisteri" component={Rekisteri} />
        <Route path="/uutiskirje" component={Uutiskirje} />
      </Switch>
      <Footer />
    </div>

  );
}

export default App;

