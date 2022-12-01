
import carrito2 from "../imagenes/carrito_compras2.png"
import LcCompra from "../ListaCompras/LcCompra"

import OtraBarra from "../BarraPrincipal/OtraBarra"
import { useEffect, useState } from "react"
import { productos } from "../../datos"
import { useNavigate } from "react-router"

const ListaCompra = () =>{

    const [listaComp, setListaComp] = useState([])

    const navigate = useNavigate()
    

    const httpObtenerListaComp = async() =>{
        const resp = await fetch("http://localhost:4444/listacomponentes")
        const data = await resp.json()
        setListaComp(data)
        localStorage.setItem("productos",listaComp)
    }
    
    const httpEliminar = async(id) => {
        const resp = await fetch(`http://localhost:4444/eliminarcomponente`, {
            method : "POST",
            
            body : JSON.stringify({
                id : id
            }),
            headers : {
                "Content-Type" : "application/json"
            }

        })
    }

    useEffect(()=>{
        httpObtenerListaComp()
    },[])


    return<div>
        <OtraBarra></OtraBarra>
        <div className="row" id="filaCompra">
            <div className="row">
                <div className="col-6"><h4>Shopping car items</h4></div>
                <div className="col-6">
                    <button type="button" className="btn btn" id='carritoCompra' ><img src={carrito2} alt="carrito" onClick={()=>{navigate("/compras")}}/>Checkout</button>
                </div>
            </div>
            
            <LcCompra componentes={listaComp} eliminar={httpEliminar} actualizar={httpObtenerListaComp}/>
        
        </div>
        



    </div>


}

export default ListaCompra