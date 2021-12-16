import React from 'react'
import '../App.css'

export default function Evasteet () {
  return (
    <div className='col-md-4 ms-4 mb-4'>
      <h3 className='mb-3'>Evästeet</h3>
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
              Evästeet
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <p>
                Tämä verkkosivusto käyttää evästeitä, jotta voimme tarjota
                sinulle parhaimman mahdollisen kokemuksen käyttäessäsi
                verkkosivujamme. Evästeiden käyttö antaa meille lisäksi
                mahdollisuuden parantaa palveluamme ja varmistaa, että löydät
                tarvitsemasi tehokkaammalla tavalla. Alta löydät lisätietoa
                evästeistä ja yksityiskohtaisen kuvauksen siitä, miten käytämme
                niitä. Evästeiden käyttö voi johtaa henkilötietojen käsittelyyn,
                joten suosittelemme, että luet myös Tietosuojakäytäntömme, joka
                kuvaa henkilötietojen käsittelyä ja henkilökohtaisia
                oikeuksiasi.
              </p>
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
              Mitä evästeet ovat?
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
                Eväste on pienikokoinen tekstitiedosto, jonka vierailemasi
                verkkosivu pyytää tallentamaan laitteellesi. Näiden avulla
                pystymme tunnistamaan henkilökohtaiset selainasetuksesi ja
                sisäänkirjautumistietosi.
              </p>
              <p>
                Istuntoevästeitä käytetään esimerkiksi silloin, kun täytät
                lomakkeen. Tämä tarkoittaa, että tietosi tallennetaan
                väliaikaisesti, jos olet täyttänyt ne sivulla ja sinun täytyy
                palata edelliselle sivulle.
              </p>
              <p>
                Nämä tiedot tallennetaan, jotta sinun ei tarvitse tehdä samoja
                valintoja joka kerta, kun vierailet sivustolla. "Local storage"
                on toinen tapa tallentaa samantyyppisiä tietoja ja asetuksia
                paikallisesti laitteellesi. Yksi ero evästeisiin on, että
                tallennetut tiedot eivät sisälly automaattisesti
                palvelinkutsuihin.
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
              Mitä evästeitä käytämme ja miksi?
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body'>
              Käytämme evästeitä ja tietojen paikallista tallennusta
              parantaaksemme verkkosivustomme toimivuutta ja tarjoaksemme juuri
              sinulle sopivaa sisältöä ja etuja. Käytämme sekä ensimmäisen että
              kolmannen osapuolen evästeitä automatisoitujen verkkomainosten
              luomiseen. Nämä evästeet keräävät tietoa siitä, mistä tuotteista
              olet esim. aiemmin ollut kiinnostunut. Näitä tietoja käytetään
              kohdistetussa mainonnassa.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
