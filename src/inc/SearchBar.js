import React, { useState } from 'react'
import './styles/SearchBar.css'


export default function SearchBar({ placeHolder, kirjat, Detail, addToCart }) {


    const [filteredData, setFilteredData] = useState([])
    const [wordEntered, setWordEntered] = useState('')
    const [valittuKirja, setValittuKirja] = useState(null)
//  Hakulogiikka-> inputista otetaan wordEntered. wordEntered arvoksi annetaan searchWord.
//  Jos syötetty searchWord sisältää samoja sanoja/kirjaimia jne. kuin mitä kirjanimiä tietokannassa on, newFilter suodattaa kaikki ne kirjat 
//  joiden nimessä searchWord esiintyy. 
//  Jos searchWord eli ts. inputissa ei ole mitään, filteredData-taulukko asetetaan tyhjäksi.
// Tän saa vaihtaa paremmaksi, jos tuntuu siltä että tämä on huono.


    function handleFilter(e) {
        const searchWord = e.target.value
        setWordEntered(searchWord)
        const newFilter = kirjat.filter((value) => {
            return value.kirjanimi.toLowerCase().includes(searchWord.toLowerCase());
        })

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter)
        }

    }
// Tyhjentää kentän
    function clearInput() {
        setFilteredData([])
        setWordEntered('')
    }

    function close() {
        setValittuKirja(null)
    }

    if (valittuKirja != null) {
        return (
            <Detail valittuKirja={valittuKirja} addtoCart={addToCart} close={close}
            //MITEN TÄSSÄ SAADAAN SIIRTYMÄ OMALLE SIVULLE? Todella tärkeä, muuten yrittää mahduttaa koko detailin navbarin sisälle.
            />
        )
    } else {
        return (
            <ul className='navbar-nav ms-auto'>
                <li className='nav-item ms-2 me-2'>
                    <div className='input-group mb-3'>
                        <input
                            type='text'
                            className='form-control'
                            value={wordEntered}
                            placeholder={placeHolder}
                            aria-label='Hakupainike'
                            aria-describedby='button-addon2'
                            onChange={handleFilter}
                        ></input> 
                        {/* Näytetään Hae- nappi, kun hakukenttään kirjoitetaan hakua ja length = 0 eli sinne ei ole vielä kirjoitettu mitään */}
                        {filteredData.length === 0 ?
                            <button
                                className='haku btn btn-outline-secondary'
                                type='button'
                                id='button-addon2'
                            >
                                Hae
                            </button> 
                            /* ...muutoin ":" näytetään "Sulje" -nappi, eli tekstiä on kirjoitettu. clearInput poistaa kirjoitetun tekstin kentästä.*/
                            
                            :
                             
                            <button
                                onClick={clearInput}
                                className='haku btn btn-outline-secondary'
                                type='button'
                                id='button-addon2'
                            >
                                Sulje
                            </button>}
                    </div>
                </li>
                {/* Täällä mapataan filteröity data. slice(0,4) määrittää, että ei voi näkyä kuin 4 hakutulosta */}
                {/* ** Korjattavaa: Näyttää hakutulokset missä sattuu ja tulokset tulostuu hakukentän (siis inputin) päälle ja hakukenttä pomppii ** */}
                <li>
                    {filteredData.length != 0 && (
                        <div className="input-group dataResult mb-3">
                            {filteredData?.slice(0, 4).map((kirja) => (
                                <div key={kirja.kirjaid}>

                                    <p onClick={e => setValittuKirja(kirja)} >{kirja.kirjanimi}</p>

                                </div>
                            ))}
                        </div>
                    )}
                </li>
            </ul >
        )
    }
}

// ** Alkuperäinen hakunappi NavBarista **

{/* <ul className='navbar-nav ms-auto'>
    <li className='nav-item ms-2 me-2'>
        <div className='input-group mb-3'>
            <input
                type='text'
                className='form-control'
                placeholder='Hae tuotteita tästä'
                aria-label='Hakupainike'
                aria-describedby='button-addon2'
            ></input>
            <button
                className='haku btn btn-outline-secondary'
                type='button'
                id='button-addon2'
            >
                Hae
            </button>
        </div>
    </li>
</ul> */}
