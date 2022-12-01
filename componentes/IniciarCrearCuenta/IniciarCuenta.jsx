import Barra from '../BarraPrincipal/OtraBarra'
import { useState } from 'react'
import '../global.css'


const IniciarCuenta = () => {
    const [usuario, setUsuario] = useState("")
    const [contra, setContra] = useState("")

    return <div>
        <Barra/>
        <div className="container-fluid">
            <div className="row justify-content-center" style={{marginTop:`8%`}}>
                <div className="col-5" style={{backgroundColor:`#3f2d68`}}>
                    <h1 id='primerh1' ><i>Login In</i></h1>
                    <input className="form-control" type="text" placeholder="First Name" id='caja0' value={usuario} onChange={
                        (evt)=>{setUsuario(evt.target.value)}
                    }/>
                    <input className="form-control" type="text" placeholder="Last Name" id='campos' value={contra} onChange={
                        (evt)=>{setContra(evt.target.value)}}/>
                    <button type="button" class="btn btn-light" id='registrarse' onClick={()=>{console.log(`${contra} y otro ${usuario}`)}}>Iniciar</button>
                    <input className="form-control" type="password" placeholder="Password" id='campos'/>
                    <button type="button" class="btn btn-light" id='registrarse'>Registrarse</button>
                </div>
            </div>

        </div>
    </div>


}

export default IniciarCuenta