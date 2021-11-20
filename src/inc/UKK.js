import React from 'react'
import '../App.css'

export default function UKK() {
    return (
        <div className="col-md-4 ms-4 mb-4">
            <h3 className="mb-3">Usein kysytyt kysymykset</h3>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Miten peruutan tilaukseni
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           Tietoa tilauksen perumisesta tulossa tähän.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Voinko palauttaa tilaamani kirjat
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Kaikilla kirjoillamme on 30 päivän palautusoikeus. Kirjat tulee palauttaa alkuperäisessä pakkauksessaan, eikä niissä saa olla merkintöjä.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Voinko tilata toisen henkilön osoitteeseen
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Tietoa tilaamisesta tulossa tähän.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
