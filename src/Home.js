import React from 'react'
import { useState, useEffect } from 'react' 
import axios from 'axios';



export default function Home() {

    const URL = 'http://localhost/kauppa/index.php';

    const [kirjat, setKirjat] = useState([]);

    useEffect(() => {
      axios.get(URL)
        .then((response) => {
          console.log(response);
          setKirjat(response.data)
        }).catch(error => {
          alert(error);
        })
    }, [])

    return (
        <>
            <ol>
                {kirjat?.map(kirjat => (
                    <li key={kirjat.kirjaid}>{kirjat.kirjanimi}{kirjat.kirjailija}{kirjat.vuosi}{kirjat.kieli}{kirjat.kustantaja}{kirjat.trnimi}{kirjat.kuvaus}{kirjat.hinta}{kirjat.saldo}</li>
                ))}
            </ol>
        </>
    )
}
