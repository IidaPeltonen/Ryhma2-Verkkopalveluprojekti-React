import './App.css';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Footer from './inc/Footer';
import Header from './inc/Header'
import Home from './Home';
import NavBar from './inc/NavBar';
import ContactUs from './inc/ContactUs';
import UKK from './inc/UKK';
import Rekisteri from './inc/Rekisteri';
import Uutiskirje from './inc/Uutiskirje';
import AboutUs from './inc/AboutUs';

function App() {


  return (
    <div className="container-fluid">
      <NavBar />
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
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

