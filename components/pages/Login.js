import '../css/login.css'
import '../css/cuadro.css'
import {  Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router"
import OtraBarra from "../../componentes/BarraPrincipal/OtraBarra"

export default function Login(props) {

    const navigate = useNavigate()

    //crear variables de estado
    const [correo, setCorreo] = useState("")
    const [contra, setPassword] = useState("")

    useEffect(() => {
        const token = localStorage.getItem("TOKEN")
        if (token != null) {
            navigate("/opciones")
        }
    })

    const httpLogin = async (correo, contra) => {
        const resp = await fetch(`http://localhost:4444/logines`, {
            method : "POST",
            
            body : JSON.stringify({
                correo : correo,
                contra : contra
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        const data = await resp.json()

        if (data.error === "si hay") {
            // Login fue correcto
            localStorage.setItem("TOKEN", data.token)
            navigate('/')
        }else {
            window.alert("No existe este usuario")
        }
        localStorage.setItem("id", data.id)
    }


    return (

        <div>
        
        <OtraBarra> </OtraBarra>
        
        <div className='login' color='yellow'>

            <div className="row" >

                <div className="col-sm-4  offset-4 mt-5">

                    <div className="card pt-5">

                        <div className="card-header ">
                            <h4>LOG IN.</h4>

                            <p>Log in with your details below to view your order</p>
                        </div>


                        <div className="card-body">

                            <div className="input-group mb-3">

                            <Form.Group>
                                email
                                <Form.Label>
                                  
                                </Form.Label>
                                <Form.Control type='email'value={ correo } onChange={ (e) => setCorreo(e.target.value) }/>
                            </Form.Group>

                            </div>

                            <div className="input-group mb-3">

                            <Form.Group>
                                Password
                                <Form.Label>
                                  
                                </Form.Label>
                                <Form.Control type='password' value={ contra } onChange={ (e) => setPassword(e.target.value) }/>
                            </Form.Group>












                            </div>



                            <div className="card-footer">
                                <div>
                                    <button type="button" className="btn btn-primary btn-lg" onClick={ () => {
                                    // Llamada a peticion http de login
                                    httpLogin(correo, contra)
                                } }>
                                        Login
                                    </button>
                                </div>
                                <ul>Forgot your password?</ul>

                                <ul>Don't have on account</ul>

                                <button type="button" className="btn btn-primary btn-lg" onClick={()=>{navigate("/crearcuenta")}}>
                                    Sign Up
                                </button>

                            </div>














                        </div>


                    </div>

                </div>
            </div>
        </div>
        </div>


    );



}


















