import "../global.css"
import mando from "../imagenes/mando.png"
import lupa from "../imagenes/lupa.png"
import icono from "../imagenes/icono_persona.png"
import carrito from "../imagenes/carrito_compras.png"
import { useNavigate } from "react-router"

const OtraBarra = () =>{
    const navigate = useNavigate()
    return <div  className="container-fluid">
        
            
                
            
                <nav className="navbar navbar-expand-lg navbar-dark bg-#383c4c">
                    <div className="container-fluid">
                        <a href="#"> <img src={mando} alt="Logo"></img> </a>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#MenuNavega">
                            <span className="navbar-toggler-icon navbar-dark"></span>
                        </button>
                        <div id="MenuNavega" className="collapse navbar-collapse" >
                            <ul class="navbar-nav ms-3" id="barraelemnt">
                                            <li class="nav-item">
                                                <a class="nav-link" aria-current="page" href="#" id="textos" onClick={()=>{navigate("/")}}>Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#" id="textos">About</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#" id="textos" onClick={()=>{navigate("/soporte")}}>Support</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#" id="textos" onClick={()=>{navigate("/reviews")}}>Reviews</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#" id="textos" onClick={()=>{navigate("/ranking")}}>Ranking</a>
                                            </li>
                            </ul>
                        </div>
                        <div>
                                <img src={lupa} hspace="9" alt="Buscar" />
                                <img src={icono} hspace="10" alt="Usuario" type="button" onClick={()=>{navigate("/login")}}/>
                                <img src={carrito} hspace="12" alt="Compras" type="button" onClick={()=>{navigate("/carrito")}}/>
                            
                            </div>
                    </div>
                </nav>
            
        
    </div>
}

export default OtraBarra