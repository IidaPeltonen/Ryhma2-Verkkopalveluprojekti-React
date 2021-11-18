import React from 'react'

export default function Order({ url, cart }) {
    return (
        <div>
            {cart.map(kirja => (
            <div key={kirja.kirjaid}>
                {kirja.kirjanimi}
                {kirja.hinta}
            </div>
            ))}

            <button className="btn btn-primary" type="button" onClick={e => localStorage.clear()}>Tyhjennä ostoskori</button>
        </div>
    )



}
