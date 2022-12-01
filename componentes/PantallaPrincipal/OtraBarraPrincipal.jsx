import "../global.css"
import mandog from "../imagenes/mando_g.png"
import lupa from "../imagenes/lupa.png"
import icono from "../imagenes/icono_persona.png"
import carrito from "../imagenes/carrito_compras.png"
import face from '../imagenes/face.png';
import twit from '../imagenes/twiter.png';
import inst from '../imagenes/insta.png';
import { useNavigate } from "react-router"
//@media screen and (max-width: 1300px){} en css

const OtraBarraPrincipal = () =>{
    const navigate = useNavigate()
    

    return <div className="container-fluid" id="fondo">
    
                <nav className="navbar navbar-expand-lg navbar-dark bg-#383c4c">
                    <div className="container-fluid">
                        <div>
                            <div className="row">
                                <a href="#"> <img className="mandog" src={mandog} alt="Logo"></img> </a>
                            </div>
                            <div className="row">
                                <h1 id='text1'>Build your PC!</h1>
                                <h4 id='text1'>Just for what you need</h4>
                            </div>
                        </div>
                        
                        
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#MenuNavega">
                            <span className="navbar-toggler-icon navbar-dark"></span>
                        </button>
                        <div id="MenuNavega" className="collapse navbar-collapse" >
                            <ul class="navbar-nav ms-3" id="barraelemnt_g">
                                            <li class="nav-item">
                                                <a class="nav-link" aria-current="page" href="#" id="textos">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#" id="textos">About</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#" id="textos" onClick={()=>{navigate("/soporte")}}>Support</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#" id="textos" onClick={()=>{navigate("/reviews")}}>Reviews </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#" id="textos" onClick={()=>{navigate("/ranking")}}>Ranking</a>
                                            </li>
                            </ul>
                        </div>
                        <div id="icono_g">
                                <img src={lupa} hspace="9" alt="Buscar" />
                                <img src={icono} hspace="10" alt="Usuario"  type="button" onClick={()=>{navigate("/login")}}/>
                                <img src={carrito} hspace="12" alt="Compras" type="button" onClick={()=>{navigate("/carrito")}}/>
                            
                            </div>
                    </div>
                </nav>
                <div id="botones">
                    <button type="button" className="btn btn-light" id='mbuton'><h9 id='mboton5' onClick={()=>{navigate("/principiante")}}>Build for begginers</h9></button>
                    <button type="button" className="btn btn-light" id='mbuton'><h9 id='mboton5' onClick={()=>{navigate("/expertos")}}>Advanced building</h9></button>
                </div>
                <div id="caja">
                    <div className="row">
                        <div className="col-6" id="caja_text">
                            <h4><b>Sign up to our newsletter for the latest PC news.</b></h4>
                        </div>
                        <div className="col-2">
                            Build Your PC
                        </div>
                        <div className="col-2">
                            Good.
                        </div>
                        <div className="col-2">
                            Terms & Conditions
                        </div>
                    </div>
                    <div className="row" id="sub_caja">
                        <div className="col-6">
                            <span></span>
                        </div>
                        <div className="col-2">
                            Why redux
                        </div>
                        <div className="col-2">
                            Better.
                        </div>
                        <div className="col-2">
                            Privacy Policy
                        </div>  
                    </div>
                    <div className="row" id="sub_caja2">
                        <div className="col-6">
                            <div className="row">
                                <div className="col">
                                    <input className="form-control" id="correo" type="email" placeholder="Email"/>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-light" id='suscribirse'>SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            Support
                        </div>
                        <div className="col-2">
                            Best.
                        </div>
                        <div className="col-2">
                            Refund Policy
                        </div>  
                    </div>
                </div>
                <div id="iconos_sociales">
                    <img className="resize" src={face}/>
                    <img className="resize" src={twit}/>
                    <img className="resize" src={inst} />
                </div>
                <div id="final_caja">
                    Copyright © 2022 Build Redux. All Rights Reserved.
                </div>
    </div>
}

export default OtraBarraPrincipal