import React from 'react'
import './App.css'
import karry from './img/karry.png'

export default function Detail(props) {
    return (
        <div id="detail">
            <img id="detailKuva" src={props.kuva}></img>
            <h1>{props.kirjanimi}</h1>
            <h1>{props.kirjailija}</h1>
            <p>Hinta: {props.hinta}€</p>
            <p>{props.kuvaus}</p>
            <p>Julkaisuvuosi: {props.vuosi} </p>
            <p>Kieli: {props.kieli}</p>
            <p>Kustantaja: {props.kustantaja}</p>
            <p>Genre: {props.trnimi}</p>
            <img id="detailKarry" src={karry}></img><br />
            <button className="btn-primary"><a href="#" onClick={props.close}>Takaisin listaukseen</a></button>
        </div>

    )
}