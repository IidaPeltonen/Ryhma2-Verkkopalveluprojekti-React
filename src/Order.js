import React from 'react'
import uuid from 'react-uuid'

export default function Order({ url, cart, clear }) {
    return (
        <div>
            {cart.map(kirja => (
            <div key={uuid()}>
                {kirja.kirjanimi}
                {kirja.hinta}
                {kirja.hinta}
                <img src={kirja.kuva}></img>
            </div>
            ))}

            <button className="btn btn-primary" type="button" onClick={e => clear() }>Tyhjennä ostoskori</button>
        </div>
    )



}
