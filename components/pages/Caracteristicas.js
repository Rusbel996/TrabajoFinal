import '../css/caracteristicas.css'
import nivedia from "../../imagenes/nvidia.png"
import OtraBarra from "../../componentes/BarraPrincipal/OtraBarra"
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

const Caracteristicas = () => {
    const parametros = useParams()

    const [listaB, setListaB] = useState([])

    const httplistaBusqueda = async () =>{
        const listBusqueda = await fetch(`http://localhost:4444/caracteristicas?id=${parametros.id}`)
        const list = await listBusqueda.json()
        setListaB(list)
    }
    
    useEffect(() => {
        httplistaBusqueda()
        }, [])

    const httpAgregar = async () =>{
        const resp = await fetch(`http://localhost:4444/agregarc`, {
            method : "POST",
            
            body : JSON.stringify({
                imagen   : listaB.imagen,
                descripcion : listaB.Nombre,
                precio : listaB.Precio
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        const data = await resp.json()
        if(data=="enviado"){
            window.alert("Se agrego Correctamente")
        }
    }

    return (<div>
        <OtraBarra> </OtraBarra>
        <div className="container overflow-hidden text-center">
            <div className="row gx-5">
                <div className="col">
                    <div className="p-3 border bg-light"><img src={`${listaB.imagen}`} width='500' />
                        <div className="d-grid gap-2 d-md-block">

                            <button className="btn btn-primary" type="button" onClick={httpAgregar} >
                                Add to the car
                            </button>

                        </div>



                    </div>
                </div>
                <div className="col">
                    <div className="p-3 border bg-ligth">
                        <h1>{listaB.Nombre}</h1>

                        <div>{listaB.Precio}</div>
                        <div>Shipping calculated at checkout</div>
                        <div className="container text-center">
                            <div className="row row-cols-2">
                                <div className="col">Producto</div>
                                <div className="col">Detallado</div>
                                <div className="col">desk</div>
                                <div className="col">descripcion</div>
                                <div className="col">Core Clock</div>
                                <div className="col">1530 MHz</div>
                                <div className="col">Boost Clock</div>
                                <div className="col">OC Mode: 1800 MHz
                                <div>Gamming Mode</div>
                                 <div>(Default):1770 MHz</div>
                                </div>
                                <div className="col">Cuda Cores</div>
                                <div className="col">1280</div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    </div>
)

        
    




}


export default Caracteristicas