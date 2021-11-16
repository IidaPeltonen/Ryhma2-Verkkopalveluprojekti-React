import React from 'react'
import './inc/styles/Details.css';
import karry from './img/karry.png'

export default function Detail(props) {
    return  (
        <div id="detail" className="row">
            <div className="col-5">
                <img id="detailKuva" src={props.kuva} alt="kirjan kansikuva"></img>
            </div>
            <div className="col-1">

            </div>
            <div className="col-6">
                <h1 id="center">{props.kirjanimi}</h1>
                <h2 id="center">{props.kirjailija}</h2>
                <p>{props.kuvaus}</p>
                <p>Julkaisuvuosi: {props.vuosi} </p>
                <p>Kieli: {props.kieli}</p>
                <p>Kustantaja: {props.kustantaja}</p>
                <p>Genre: {props.trnimi}</p>
            </div>
            <div className="col-1">

            </div>
            <div className="col-3">
                <button className="btn-primary"><a href="#" onClick={props.close}>Takaisin listaukseen</a></button>
            </div>
            <div className="col-3">

            </div>
            <div className="col-4">
                <p>Hinta: {props.hinta}€</p>
                <img id="detailKarry" src={karry} alt="ostoskarry"></img><br />
            </div>

        </div>

    )
}