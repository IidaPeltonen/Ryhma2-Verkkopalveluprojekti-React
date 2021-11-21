import React from 'react'
import uuid from 'react-uuid'

export default function Order({url, cart, clear, removeFromCart}) {
    return (
        <div>
            {cart.map(kirja => (
            <tr key={uuid()}>
                <td>{kirja.kirjanimi}</td>
                <td>{kirja.hinta}</td>
                <td><img src={kirja.kuva}></img></td>
                <td><a className="order" href="#" onClick={() => removeFromCart(kirja)}>i</a></td>
            </tr>
            ))}
                <hr></hr>
            </div>

           // <button className="btn btn-primary" type="button" onClick={e => clear() }>Tyhjennä ostoskori</button>
       // </div>
    )



}
