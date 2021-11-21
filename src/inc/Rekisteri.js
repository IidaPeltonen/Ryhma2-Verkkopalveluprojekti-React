import React from 'react'
import '../App.css'

export default function Rekisteri () {
  return (
    <div className='col-md-4 ms-4 mb-4'>
      <h3 className='mb-3'>Rekisteriseloste</h3>
      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              Rekisterinpitäjä
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <p>Kirjakauppa X Oy (y-tunnus 0101011-1)</p>
              <p>
                Kellosaarentie 12 <br />
                60100
                <br />
                Seinäjoki
              </p>
              <p>Puhelin: 040 1234567</p>
              <p>Sähköposti: info@kirjakauppax.fi</p>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              Määritelmät
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <p>
                Rekisteröidyllä tarkoitetaan sitä ihmistä, jonka henkilötietoja
                Kirjakauppa X henkilörekistereissään käsittelee tässä
                rekisteriselosteessa kuvatussa roolissa.
              </p>
              <p>
                Henkilötiedoilla tarkoitetaan rekisteröityyn liittyviä tietoja,
                kuten nimi, osoite, sähköposti ja puhelinnumero.
              </p>
              <p>
                Asiakkaalla tarkoitetaan tässä yhteydessä niitä kuluttajia,
                joiden kanssa Kirjakauppa X:llä on asiakassuhde.
              </p>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              Mihin tarkoituksiin käytämme henkilötietojasi
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              Suomalainen käsittelee rekisteröityjen henkilötietoja seuraaviin
              tarkoituksiin (yhteen tai useampaan samanaikaisesti):
              asiakasviestintä, markkinointi sekä tuotteiden ja palveluiden
              kehittäminen.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingFour'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFour'
              aria-expanded='false'
              aria-controls='collapseFour'
            >
              Kenelle luovutamme tietojasi
            </button>
          </h2>
          <div
            id='collapseFour'
            className='accordion-collapse collapse'
            aria-labelledby='headingFour'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              Henkilötietojesi suojaaminen ja käsittelyn rajoittaminen
              tarpeelliseen on Kirjakauppa X:lle tärkeää. Emme jaa tietojasi
              kolmansille osapuolille.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
