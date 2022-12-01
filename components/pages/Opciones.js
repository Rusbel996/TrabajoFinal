import '../css/opciones.css'
import { } from "react-router-dom"
import { Form } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import OtraBarra from "../../componentes/BarraPrincipal/OtraBarra"

let id = localStorage.getItem('id')


const Opciones = () => {

    const [datosUsuarios, setDatos] = useState([])

    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [correo,setCorreo] = useState("");
    const [direccion,setDireccion] = useState("");
    const [departamento,setDepartamento] = useState("");
    const [ciudad,setCiudad] = useState("");
    const [postal,setCpostal] = useState("");
    const [celular,setCelular] = useState("");


  const httpOpciones = async ()=>{
    
    const datos = await fetch(`http://localhost:4444/datos?id=${id}`)
    const data = await datos.json()
    setDatos(data)
    console.log(data)
    setNombre(data.nombre)
    setApellido(data.apellidos)
    setCorreo(data.correo)
    setDireccion(data.direccion)
    setDepartamento(data.piso)
    setCiudad(data.ciudad)
    setCpostal(data.postal)
    setCelular(data.celular)
  }

  const httpEditar = async () => {
    const resp = await fetch(`http://localhost:4444/cambiardatos`, {
            method : "POST",
            
            body : JSON.stringify({
                id : id,
                nombre : nombre,
                apellidos : apellido,
                correo : correo,
                direcion : direccion,
                piso : departamento,
                ciudad : ciudad,
                postal : postal,
                celular : celular
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
  }

  useEffect(() => {
    httpOpciones()
    }, [])

  return (

    <div>
      <OtraBarra> </OtraBarra>
      <div style={{ height: '67em' }}>
        <div >
          <div id="usa" className="bg-white rounded-1 bg-opacity-50"><strong> </strong>
            <div>Ed va</div>
            <div>United States</div></div>

          <div >

            <div id="usa1" className="row g-2 ">
              <div><button id="mainbuttons2" className="boton2   d-inline-block border border-0 rounded-1" > <p>Order History </p>       </button></div>
              <div><button id="mainbuttons2" className="boton2  d-inline-block border border-0 rounded-1"> Profile Info</button> </div>
              <div>
                <Link to={"/"}>  
                <button id="mainbuttons2" className="boton2 d-inline-block border border-0 rounded-1"> Log Out</button> 
                </Link>

                </div>
            </div>
          </div>




          <div
            id="cuadro"
            className="container text-center bg-blue rounded-3 bg-opacity-50">

            <div className="row g-3">

              <div className="col">
                <div className="text-start">First name</div>


                <Form.Group>
                  
                  <Form.Label>

                  </Form.Label>
                  <Form.Control type='text' value={nombre} onChange={(evt) => {setNombre(evt.target.value)}} />
                </Form.Group>



              </div>
              <div className="col">
                <div className="text-start">Last name</div>



                <Form.Group>
                  
                  <Form.Label>

                  </Form.Label>
                  <Form.Control type='text' value={apellido} onChange={(evt) => {setApellido(evt.target.value)}}
 />
                </Form.Group>





              </div>
            </div>
            <div className="mb-3">
              <br />
              <div className="text-start">Email</div>

              <Form.Group>
                  
                  <Form.Label>

                  </Form.Label>
                  <Form.Control type='email' value={correo} onChange={(evt) => {setCorreo(evt.target.value)}}
/>
                </Form.Group>


            </div>
            <div className="mb-3">
              <div className="text-start">Adress</div>

              <Form.Group>
                  
                  <Form.Label>

                  </Form.Label>
                  <Form.Control type='text' value={direccion} onChange={(evt) => {setDireccion(evt.target.value)}}
/>
                </Form.Group>

            </div>
            <div className="row g-3">
              <div className="col">
                <div className="text-start">Apartment, suit, etc</div>

                <Form.Group>
                  
                  <Form.Label>

                  </Form.Label>
                  <Form.Control type='text' value={departamento} onChange={(evt) => {setDepartamento(evt.target.value)}}
/>
                </Form.Group>

              </div>
              <div className="col">
                <div className="text-start">City</div>

                <Form.Group>
                  
                  <Form.Label>

                  </Form.Label>
                  <Form.Control type='text' value={ciudad} onChange={(evt) => {setCiudad(evt.target.value)}}
/>
                </Form.Group>




              </div>
            </div>
            <div className="row g-3">
              <div className="col">
                <br />
                <div className="text-start">Country/Region</div><div className="col-12">
                  <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
                  <select className="form-select" id="inlineFormSelectPref">
                    <option selected>Choose...</option>
                    <option value="1">Lima Metropolitana</option>
                    <option value="2">Lima Provincia</option>
                    <option value="3">Otro Departamento</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <br />
                <div className="text-start">Postal/ZipCode</div>

                <Form.Group>
                  
                  <Form.Label>

                  </Form.Label>
                  <Form.Control type='text' value={postal} onChange={(evt) => {setCpostal(evt.target.value)}}
/>
                </Form.Group>



              </div>
              <div className="mb-3">
                <div className="text-start">Phone</div>

                <Form.Group>
                  
                  <Form.Label>

                  </Form.Label>
                  <Form.Control type='text' value={celular} onChange={(evt) => {setCelular(evt.target.value)}}
/>
                </Form.Group>



              </div>
            </div>
            <span><button id="Update" type="button" className="btn" onClick={httpEditar()}>Update info</button></span>
            <span><button type="button" className="btn  btn-lg bg-opacity-50" style={{ fontSize: '13px' }}>Cancel</button></span>


          </div>
        </div>
      </div>






    </div>

  )






}


export default Opciones