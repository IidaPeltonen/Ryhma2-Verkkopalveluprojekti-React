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

const URL = 'http://localhost/kauppa'

function App() {
  const [category, setCategory] = useState(null);

  let location = useLocation();

  useEffect(() => {
    if (location.state !== undefined) {
      setCategory({trnimi: location.state.trnimi});
      console.log(category)
    }
  }, [location.state])

  return (
    <div className="container-fluid">
      <NavBar url={URL} setCategory={setCategory}/>
      <Header />
      <Switch>
        <Route
          path="/"
          render={() =>
            <Home
              url={URL}
              category={category}
            />
          }
          exact
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

