
import "../global.css"
import OtraBarra from "../BarraPrincipal/OtraBarra"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

const CrearCuenta = () => {

    const [correo,setCorreo] = useState("")
    const [contra,setContra] = useState("")
    const [nombres,setNombres] = useState("")
    const [apellidos,setApellidos] = useState("") 


    const navigate = useNavigate()
    

    const httpRegistro = async (correo,contra,nombres, apellidos) =>{
        const resp = await fetch("http://localhost:4444/usuario-post",{
            method : "POST",
            body : JSON.stringify({
                nombres: nombres,
                contra : contra,
                apellidos : apellidos,
                correo : correo,
            }),
            headers : {
                "Content-Type" : "application/json"
            }
            
        })
        const data = await resp.json()
        
        if(data.error == "si ahi"){
            window.alert("El correo esta enlazado a una cuenta")
        }else{
            navigate('/login')
        }
    }

    //realizar una peticion al backend solo 1 vez
    useEffect(()=>{
    },[])

    return <div>

        
        <OtraBarra></OtraBarra>
        
        <div className="container-fluid">
            <div className="row justify-content-center" style={{marginTop:`8%`}}>
                <div className="col-5" style={{backgroundColor:`#3f2d68`}}>
                    <h1 id='primerh1' ><i>CREATE ACCOUNT</i></h1>
                    
                        <input className="form-control" type="text" placeholder="First Name" id='caja0' value={nombres}
                            onChange={(e)=>{setNombres(e.target.value)}}/>
                        <input className="form-control" type="text" placeholder="Last Name" id='campos' value={apellidos}
                            onChange={(e)=>{setApellidos(e.target.value)}}/>
                        <input className="form-control" type="email" placeholder="Email" id='campos' value={correo}
                            onChange={(e)=>{setCorreo(e.target.value)}}/> 
                        <input className="form-control" type="password" placeholder="Password" id='campos'value={contra}
                            onChange={(e)=>{setContra(e.target.value)}}/>
                        <button type="submit" class="btn btn-light" id='registrarse' onClick={()=>{
                            httpRegistro(correo,contra,nombres, apellidos)
                        }}>CREATE</button>
                   
                    
                </div>
            </div>

        </div>
        




        
    </div>
}

export default CrearCuenta