import React, { useState, useEffect } from 'react'
import './styles/SearchBar.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function SearchBar({ placeHolder, url }) {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')
  const [valittuKirja, setValittuKirja] = useState([])
  const [kirjat, setKirjat] = useState([])

  //  Hakulogiikka-> inputista otetaan wordEntered. wordEntered arvoksi annetaan searchWord.
  //  Jos syötetty searchWord sisältää samoja sanoja/kirjaimia jne. kuin mitä kirjanimiä tai kirjailijan nimiä tietokannassa on, newFilter suodattaa kaikki ne kirjat
  //  joiden nimessä searchWord esiintyy.
  //  Jos searchWord eli ts. inputissa ei ole mitään, filteredData-taulukko asetetaan tyhjäksi.
  //  Tän hakukomponentin saa vaihtaa paremmaksi, jos tuntuu siltä että tämä on huono.

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

  function handleFilter(e) {
    const searchWord = e.target.value
    setWordEntered(searchWord)
    const newFilter = kirjat.filter(value => {
      return (
        value.kirjanimi.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.kirjailija.toLowerCase().includes(searchWord.toLowerCase())
      )
    })
    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }
  // Tyhjentää kentän
  function clearInput() {
    setFilteredData([])
    setWordEntered('')
  }
  return (
    <>
      <div className='input-group'>
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
      <div className="row">
        {filteredData.length !== 0 && (
          <div className='input-group dataResult'>
            {filteredData?.slice(0, 4).map(kirja => (
              <div key={kirja.kirjaid}>
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
