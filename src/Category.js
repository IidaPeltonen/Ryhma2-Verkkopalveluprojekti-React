import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Category(url, category) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        
        if (category !== null) {
           
          axios.get('http://localhost/kauppa/tuoteKategoriaTuotteet.php/'  + category?.id )
            .then((response) => {
              const json = response.data;
              setProducts(json);
            }).catch(error => {
              if (error.response === undefined) {
                alert(error);
              } else {
                alert(error.response.data.error);
              }
            })
        }
      }, [category])
    

    return (

        <div>
            {/* <h3>products for {category?.name}</h3> */}
            {products?.map(product => (
                <div key={product.kirjaid}>
                    <p>{product.kirjanimi}</p>
                </div>
            ))}
        </div>

    )
}
