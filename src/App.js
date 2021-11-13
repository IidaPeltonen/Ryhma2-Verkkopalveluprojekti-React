import './App.css';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Footer from './inc/Footer';
import logo from './img/logo.png';
import Header from './inc/Header'
// import Slider from '.inc/body';
import Home from './Home';
import NavBar from './inc/NavBar';


const URL = 'http://localhost/kauppa';

function App() {


  return (
    <div className="container-fluid">
      <NavBar />
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
      <Footer />

    </div>

  );
}

export default App;

