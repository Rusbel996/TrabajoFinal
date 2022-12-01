import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import  '../App.css'

const Pantalla5 = () => {


    const [fisrtName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [adress, setAdress] = useState("")
    const [city, setCity] = useState("")
    const [aparsuetc, setAparsuetc] = useState("")
    const [postalZip, setPostalZip] = useState("")
    const [countryRegion, setCountryRegion] = useState("")
    const [phone, setPhone] = useState("")



    // Hook navegacion
    const navigate = useNavigate();
    return <div class="">
        
        <div class="container" >
            <div class="container text-center">
                <div class="row ">
                    <div class="col col-3">
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button class="btn btn-light" type="button">Orden History</button>
                            <button class="btn btn-light" type="button">Profile Info</button>
                            <button class="btn btn-light" type="button">Log Out</button>
                        </div>
                    </div>
                    <div class="col col-9">
                        <div class="container">
                            <div class="row ">
                                <div class="col col-3">
                                    <div class="card" >
                                        <div class="card-body">
                                            <p class="card-title mb-2 text-muted">Default</p>
                                            <p class="card-subtitle mb-2 text-muted">Ed Va</p>
                                            <p class="card-subtitle mb-2 text-muted">United State</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-9">
                                    <div class="row g-2">
                                        <div class="col-md">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <label class="form-label">
                                                        Fisrt Name
                                                    </label>
                                                    <input class="form-control"
                                                        value={fisrtName}
                                                        onChange={(evt) => setFirstName(evt.target.value)} />
                                                </div>
                                                <div class="col-sm-6">
                                                    <label class="form-label">
                                                        Last Name
                                                    </label>
                                                    <input class="form-control"
                                                        value={lastName}
                                                        onChange={(evt) => setLastName(evt.target.value)} />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <label class="form-label">
                                                    Email
                                                </label>
                                                <input class="form-control"
                                                    value={email}
                                                    onChange={(evt) => setEmail(evt.target.value)} />
                                            </div>
                                            <div class="col">
                                                <label class="form-label">
                                                    Adress
                                                </label>
                                                <input class="form-control"
                                                    value={adress}
                                                    onChange={(evt) => setAdress(evt.target.value)} />
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <label class="form-label">
                                                        Aparmaent, suit, etc
                                                    </label>
                                                    <input class="form-control"
                                                        value={aparsuetc}
                                                        onChange={(evt) => setAparsuetc(evt.target.value)} />
                                                </div>
                                                <div class="col-sm-6">
                                                    <label class="form-label">
                                                        City
                                                    </label>
                                                    <input class="form-control"
                                                        value={city}
                                                        onChange={(evt) => setCity(evt.target.value)} />
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <label class="form-label">
                                                        Country/Region
                                                    </label>
                                                    <select class="form-select"
                                                        value={countryRegion}
                                                        onChange={(evt) => setCountryRegion(evt.target.value)}>
                                                        <option value={-1}>--- Selecct the country or region ---</option>
                                                        <option value={1}>United States</option>
                                                        <option value={2}>Peru</option>
                                                        <option value={3}>Uruguay</option>
                                                        <option value={4}>France</option>
                                                    </select>
                                                </div>
                                                <div class="col-sm-6">
                                                    <label class="form-label">
                                                        Postal/zip code
                                                    </label>
                                                    <input class="form-control"
                                                        value={postalZip}
                                                        onChange={(evt) => setPostalZip(evt.target.value)} />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <label class="form-label">
                                                    Phone
                                                </label>
                                                <input class="form-control"
                                                    value={phone}
                                                    onChange={(evt) => setPhone(evt.target.value)} />
                                            </div>

                                            <div class="btn-group">
                                                <a href="#" class="btn btn-primary active" aria-current="page">Update Info</a>
                                                <a href="#" class="btn btn-primary active" aria-current="page">Cancel</a>

                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Pantalla5

