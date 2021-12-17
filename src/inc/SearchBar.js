import React, { useState, useEffect } from 'react'
import './styles/SearchBar.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function SearchBar ({ placeHolder, url }) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')
  const [valittuKirja, setValittuKirja] = useState([])
  const [kirjat, setKirjat] = useState([])



  // haetaan kaikkien kirjojen data tilamuuttujaan
  useEffect(() => {
    axios
      .get(url + 'php/kirja/index.php')
      .then(response => {
        setKirjat(response.data)
      })
      .catch(error => {
        if (error.response === undefined) {
          alert(error)
        } else {
          alert(error.response.data.error)
        }
      })
  }, [])

  //  Hakulogiikka-> inputista luetaan arvo wordEntered, eli se arvo mitä käyttäjä kenttään syöttää.
  //  Jos syötetty wordEntered-arvo sisältää samoja sanoja/kirjaimia jne. kuin mitä kirjanimiä tai kirjailijan nimiä tietokannassa on, 
  //  newFilter suodattaa hakutuloksena reaaliaikaisesti kaikki ne kirjat, joiden nimessä wordEntered esiintyy.
  //  Jos wordEntered on tyhjä eli ts. inputissa ei ole tekstiä, filteredData-taulukko asetetaan tyhjäksi.


  function handleFilter (e) {
    //searchWord muuttuja oikeastaan turha, mutta nopeuttanee ja selkeyttänee koodia, kun sinne annetaan arvoksi e.target.value
    const searchWord = e.target.value
    setWordEntered(searchWord)
    const newFilter = kirjat.filter(value => {
      // funktiossa otetaan myös huomioon se, että käyttäjä todennäköisesti hakee pienillä alkukirjaimilla
      // palautetaan joko kirjanimi tai kirjailija, riippuen löytyykö dataa haetulla hakusanalla
      return (
        value.kirjanimi.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.kirjailija.toLowerCase().includes(searchWord.toLowerCase())
      )
    })
    // jos input on tyhjä, asetetaan taulukko tyhjäksi
    if (searchWord === '') {
      setFilteredData([])
    } else {
    // muutoin suodatetaan uusi hakutulos 
      setFilteredData(newFilter)
    }
  }
  // Tyhjentää kentän
  function clearInput () {
    setFilteredData([])
    setWordEntered('')
  }
  return (
    <>
      <div className='input-group'>
        {/* Jos kenttässä tapahtuu muutoksia (onChange), ajetaan handleFilter funktio */}
        <input
          type='text'
          className='form-control'
          value={wordEntered}
          placeholder={placeHolder}
          aria-label='Hakupainike'
          aria-describedby='button-addon2'
          onChange={handleFilter}
        ></input>
        {/* Näytetään "Hae"- nappi, kun hakukenttään ei olla kirjoitettu vielä mitään eli length === 0  */}
        {filteredData.length === 0 ? (
          <button
            className='haku btn btn-outline-secondary'
            type='button'
            id='button-addon2'
          >
            Hae
          </button>
        ) : (
          /* ...muutoin ":" näytetään "Sulje" -nappi, eli tekstiä on kirjoitettu. clearInput poistaa kirjoitetun tekstin kentästä.*/
          <button
            onClick={clearInput}
            className='haku btn btn-outline-secondary'
            type='button'
            id='button-addon2'
          >
            Tyhjennä
          </button>
        )}
      </div>
      <div className='row'>
        {/* Kun filteredData taulukon pituus on erisuuri kuin 0 (ts. kenttään on kirjoitettu jotain), näytetään tulokset */}
        {filteredData.length !== 0 && (
          <div className='input-group dataResult'>
            {/* Näytetään max 4 tulosta */}
            {filteredData?.slice(0, 4).map(kirja => (
              <div key={kirja.kirjaid}>
                {/* Mahdollisuus avata details-näkymä kirjasta */}
                <div
                  onClick={function (e) {
                    setValittuKirja(kirja)
                    clearInput()
                  }}
                >
                  <Link
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
                    <p>{kirja.kirjanimi}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
