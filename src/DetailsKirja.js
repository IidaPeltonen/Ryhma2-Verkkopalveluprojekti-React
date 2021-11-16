import React from 'react'

export default function Detail(props) {
    return (
        <div>
            <img src={props.kuva}></img>
            <h1>{props.kirjanimi}</h1>
            <h1>{props.kirjailija}</h1>
            <p>Hinta: {props.hinta}€</p>
            <p>{props.kuvaus}</p>
            <p>Julkaisuvuosi: {props.vuosi} </p>
            <p>Kieli: {props.kieli}</p>
            <p>Kustantaja: {props.kustantaja}</p>
            <p>Genre: {props.trnimi}</p>
            <a href="#" onClick={props.close}>Takaisin listaukseen</a>
        </div>

    )
}