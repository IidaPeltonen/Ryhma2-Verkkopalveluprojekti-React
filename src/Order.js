import React from 'react'
import uuid from 'react-uuid'

export default function Order({ url, cart }) {
    return (
        <div>
            {cart.map(kirja => (
            <div key={uuid()}>
                {kirja.kirjanimi}
                {kirja.hinta}
                <img src={kirja.kuva}></img>
            </div>
            ))}

            <button className="btn btn-primary" type="button" onClick={e => localStorage.clear()}>Tyhjennä ostoskori</button>
        </div>
    )



}
