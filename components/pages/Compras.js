import { useNavigate } from "react-router"
import { useState, useEffect } from 'react'
import OtraBarra from "../../componentes/BarraPrincipal/OtraBarra"

const Compras = () => {

    const [listaComp, setListaComp] = useState([])

    const httpObtenerListaComp = async() =>{
        const resp = await fetch("http://localhost:4444/listacomponentes")
        const data = await resp.json()
        setListaComp(data)
        localStorage.setItem("productos",listaComp)
    }
    useEffect(()=>{
        httpObtenerListaComp()
    },[])

    return (

        <div>
             <OtraBarra> </OtraBarra>
            <div className="container text-center">

                <div className="row align-items-center">
                    <div className="col">

                        <div id="content">
                            <div id="content-margin" style={{ width: "250%" }}>
                                <div className="inline" style={{ marginBottom: 40 }}></div>
                                <div className="row">
                                    <div className="col-6" style={{ padding: 0 }}>
                                        <div
                                            style={{
                                                backgroundColor: "white",
                                                borderBottom: 25,
                                                padding: 20,
                                                width: "100%",
                                                color: "black"
                                            }}
                                        >
                                            <div style={{ fontWeight: 600, marginBottom: 15 }}>
                                                <span id="cart-status" style={{ color: "orchid" }}>
                                                    Carrito
                                                </span>{" "}
                                                &gt;
                                                <span id="information-status" style={{ color: "black" }}>
                                                    Informacion
                                                </span>{" "}
                                                &gt;
                                                <span id="shipping-status" style={{ color: "gray" }}>
                                                    Envio
                                                </span>{" "}
                                                &gt;
                                                <span id="payment-status" style={{ color: "gray" }}>
                                                    Pago
                                                </span>
                                            </div>
                                            <fieldset className="border rounded-3 p-3" legend="">
                                                <legend
                                                    className="float-none"
                                                    style={{
                                                        width: "auto",
                                                        textAlign: "center",
                                                        fontWeight: 600,
                                                        color: "black"
                                                    }}
                                                >
                                                    Chequeo rápido
                                                </legend>
                                                <div className="container">
                                                    <div className="row contenedorBtnPago">
                                                        <div className="col-4">
                                                            <img src='../../imagenes/s' width='120' height={45} />
                                                        </div>
                                                        <div className="col-4">
                                                            <img src='./Paypal.png' width='120' height={45} />
                                                        </div>
                                                        <div className="col-4">
                                                            <img src='./gpay.png' width='150' height={45} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <div
                                                style={{
                                                    width: "100%",
                                                    height: 15,
                                                    borderBottom: "1px solid lightgray",
                                                    textAlign: "center",
                                                    marginTop: 30,
                                                    marginBottom: 30
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        backgroundColor: "white",
                                                        color: "gray",
                                                        fontSize: 15,
                                                        padding: "0 10px"
                                                    }}
                                                >
                                                    OR
                                                </span>
                                            </div>
                                            <div style={{ fontWeight: 400, fontSize: 20, marginBottom: 15 }}>
                                                Informacion del Contacto
                                            </div>
                                            <div className="row-1" style={{ display: "flex", marginBottom: 15 }}>
                                                <div
                                                    className="col-1 rounded"

                                                >
                                                    <img src='./persona.png' width='50' />

                                                </div>
                                                <div
                                                    className="col"
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        paddingLeft: 15
                                                    }}
                                                >
                                                    <div>20190000@gmail.com</div>
                                                    <div style={{ color: "orchid" }}>Log out</div>
                                                </div>
                                            </div>
                                            <div>
                                                <input
                                                    type="checkbox"
                                                    style={{ marginRight: 15, marginBottom: 30 }}
                                                />
                                                Envíame un correo electrónico con noticias y ofertas
                                            </div>
                                            <div style={{ fontWeight: 400, fontSize: 20, marginBottom: 15 }}>
                                                Shipping address
                                            </div>
                                            <div className="controlFormulario">
                                                <div style={{ paddingLeft: 7, color: "gray" }}>
                                                    Direcciones guardadas
                                                </div>
                                                <select
                                                    name="saved-address"
                                                    style={{ width: "100%", border: "radius", outline: "none" }}
                                                >
                                                    <option value="op1">Estados Unidos</option>
                                                    <option value="op3">Peru</option>
                                                    <option value="op4">Chile</option>
                                                </select>
                                            </div>
                                            <div className="controlFormulario">
                                                <div style={{ paddingLeft: 5, color: "gray" }}>
                                                    Continente / Region
                                                </div>
                                                <select
                                                    name="address"
                                                    style={{ width: "100%", border: "none", outline: "none" }}
                                                >
                                                    <option value="op1">Estados Unidos</option>
                                                    <option value="op3">Peru</option>
                                                    <option value="op4">Chile</option>
                                                </select>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="controlFormulario">
                                                        <div style={{ paddingLeft: 5, color: "gray" }}> Nombre</div>
                                                        <input
                                                            type="text"
                                                            style={{
                                                                paddingLeft: 5,
                                                                width: "100%",
                                                                border: "none",
                                                                outline: "none"
                                                            }}
                                                            placeholder="Nombres"
                                                        />
                                                    </div>
                                                  </div>
                                                  <div className="col">
                                                    <div className="controlFormulario">
                                                        <div style={{ paddingLeft: 5, color: "gray" }}>Apellido</div>
                                                        <input
                                                            type="text"
                                                            style={{
                                                                paddingLeft: 5,
                                                                width: "100%",
                                                                border: "none",
                                                                outline: "none"
                                                            }}
                                                            placeholder="Apellidos"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="controlFormulario">
                                                <input
                                                    type="text"
                                                    style={{
                                                        paddingLeft: 5,
                                                        width: "100%",
                                                        border: "none",
                                                        outline: "none",
                                                        fontSize: 18
                                                    }}
                                                    placeholder="Compañia"
                                                />
                                            </div>
                                            <div className="controlFormulario">
                                                <input
                                                    type="text"
                                                    style={{
                                                        paddingLeft: 5,
                                                        width: "100%",
                                                        border: "none",
                                                        outline: "none",
                                                        fontSize: 18
                                                    }}
                                                    placeholder="Correo"
                                                />
                                            </div>
                                            <div className="controlFormulario">
                                                <input
                                                    type="text"
                                                    style={{
                                                        paddingLeft: 5,
                                                        width: "100%",
                                                        border: "none",
                                                        outline: "none",
                                                        fontSize: 18
                                                    }}
                                                    placeholder="Apartamento, etc"
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="controlFormulario">
                                                        <input
                                                            type="text"
                                                            style={{
                                                                padding: 5,
                                                                width: "100%",
                                                                border: "none",
                                                                outline: "none",
                                                                fontSize: 18
                                                            }}
                                                            placeholder="Ciudad"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="controlFormulario">
                                                        <div style={{ paddingLeft: 5, color: "gray", fontSize: 13 }}>
                                                            State
                                                        </div>
                                                        <select
                                                            name="state"
                                                            style={{ width: "100%", border: "none", outline: "none" }}
                                                        >
                                                            <option value="op1" />
                                                            <option value="op3">Peru</option>
                                                            <option value="op4">Chile</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="controlFormulario">
                                                        <input
                                                            type="text"
                                                            style={{
                                                                padding: 5,
                                                                width: "100%",
                                                                border: "none",
                                                                outline: "none",
                                                                fontSize: 18
                                                            }}
                                                            placeholder="Codigo Zip"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="controlFormulario">
                                                <input
                                                    type="text"
                                                    style={{
                                                        paddingLeft: 5,
                                                        width: "100%",
                                                        border: "none",
                                                        outline: "none",
                                                        fontSize: 18
                                                    }}
                                                    placeholder="Telefono"
                                                />
                                            </div>
                                            <div
                                                style={{
                                                    width: "100%",
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    marginTop: 50,
                                                    marginBottom: 15
                                                }}
                                            >
                                                <button style={{ color: "orchid" }}>&lt; Return to cart</button>
                                                <button
                                                    style={{
                                                        backgroundColor: "orchid",
                                                        color: "white",
                                                        padding: 10,
                                                        borderBottom: 10
                                                    }}
                                                >
                                                    Continue to shipping
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6" style={{ padding: 0, Color: "blue" }}>
                                        <div class="caja">
                                            <ul>
                                                {
                                                        listaComp.map((producto)=>{
                                                            return <div>
                                                            <img src={`${producto.imagen}`} width='70' /> {producto.descripcion} {producto.precio}
                                                        </div>
                                                        })
                                                }
                                                {/* <div>
                                                    <img src='https://ripleype.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2022%2F06%2F10112819%2FDisco-SSD-Samsung_980-Pro-1-TB-MZ-V8P1T0B-AM_1.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=f3d1802712e4000152cdce2af83a7bee' width='70' />   1TB Nvme M.2
                                                </div>
                                                <div>
                                                    <img src='https://datalockperu.com/wp-content/uploads/2020/05/CPU-AMD-A6.png' width='70' />    Cooler Master TD500 RGB
                                                </div>
                                                <div>
                                                    <img src='./QTY.png' width='70' />     QTX 4x CM MasterFans RGB
                                                </div>
                                                <div>
                                                    <img src='https://www.computerhope.com/jargon/m/memory-ddr4.png' width='70' />      16GB DDR4 Dual Channel
                                                </div>
                                                <div>
                                                    <img src='./Tarjeta.png' width='70' />  ASUS PRIME B660M-A | Intel
                                                </div>
                                                <div>
                                                    <img src='./Windows11.png' width='70' />   Windows 11 Home + USB Recovery
                                                </div>
                                                <div>
                                                    <img src='./nvidia.png' width='70' />    NVIDIA GeForce RTX 3070 8GB (VR Ready)
                                                </div>
                                                <div>
                                                    <img src='./refrigeracion.png' width='70' />   CM MasterLiquid ML240L
                                                </div>
                                                <div>
                                                    <img src='./core.png' width='70' />   Intel Core I7-12000
                                                </div>
                                                <div>
                                                    <img src='./monitor.png' width='70' />   iMac (Retina 5K, 27 pulgadas)
                                                </div>
                                                <div>
                                                    <img src='./teclado.png' width='70' />   Teclado Gamer Halion-863
                                                </div> */}

                                            </ul>
                                            <div className="controlFormulario">
                                                <div style={{ paddingLeft: 9, color: "gray" }}></div>
                                                <input
                                                    type="text"
                                                    style={{
                                                        paddingLeft: 5,
                                                        width: "100%",
                                                        border: "none",
                                                        outline: "none"
                                                    }}
                                                    placeholder="Discount code"




                                                />
                                                <button
                                                style={{
                                                    backgroundColor: "grey",
                                                    color: "white",
                                                    padding: 1,
                                                    borderBottom: -6
                                                }}
                                                
                                                
                                        
                                                >Apply</button>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col"></div>

                    <div>


                    </div>
                </div>

            </div>



        </div>

    )




}


export default Compras