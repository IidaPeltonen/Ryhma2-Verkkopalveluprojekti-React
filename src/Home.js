import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import paa from './img/paa.png';
import karry from './img/karry.png';
import lasi from './img/lasi.png';
import piina from './piina.png';


export default function Home() {

  const URL = 'http://localhost/kauppa/index.php';

  const [kirjat, setKirjat] = useState([]);
  const [kuva, setKuva] = useState([]);



  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setKirjat(response.data)
      }).catch(error => {
        alert(error);
      })
  }, [])

  return (
    <>
      <ol>
        {kirjat?.map(kirjat => (
          <li key={kirjat.kirjaid}><img src={piina} /><br /><b>{kirjat.kirjanimi}<br />{kirjat.kirjailija}</b><br />{kirjat.vuosi}<br />Kieli: {kirjat.kieli}<br />Kustantaja: {kirjat.kustantaja}<br />{kirjat.trnimi}<br />{kirjat.kuvaus}<br />Hinta: {kirjat.hinta}<br />Varastossa: {kirjat.saldo} kpl </li>
          //<li key={kirjat.asid}>Asiakastunnus: {kirjat.astunnus}<br />Asiakkaan nimi: {kirjat.asnimi}<br />Asiakkaan osoite: {kirjat.asosoite}<br />Postinumero: {kirjat.postinro}<br />Postitoimipakka: {kirjat.postitmp}<br />E-mail: {kirjat.email}</li>
          //<li key={kirjat.tilausid}>Asikas id: {kirjat.asid}<br />Tilauspvm: {kirjat.pvm}<br />Tilauksen tila: {kirjat.tila}</li>

        ))}
      </ol>
    </>
  )
}
