import '../global.css'
//import tacho from "../imagenes/tacho.png"
import React from "react";

const LcCompra = (props) =>{

    

    return <div>
        
        {   
            
            props.componentes.map((componente)=>{
                return <div className="row" id="componenteLista">
                    <div className="col-3">
                        <img src={`${componente.imagen}`} alt="imagen" id='imagenLista'></img>
                    </div>
                    <div className="col-3">
                        {componente.descripcion}
                    </div>
                    <div className="col-3">
                        {componente.precio}
                    </div>
                    <div className="col-3">
                        <img src='https://cdn-icons-png.flaticon.com/512/3885/3885359.png' alt="tacho" id='imagenLista' type="button" onClick={()=>{props.eliminar(componente.id);props.actualizar()}}/>
                    </div>
                </div>
            })
        }


    </div>


}

export default LcCompra