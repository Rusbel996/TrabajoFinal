import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import OtraBarra from "../componentes/BarraPrincipal/OtraBarra"

const Pantalla11 = () => {

    const navigate = useNavigate();
    return <div className="">
        <OtraBarra></OtraBarra>
        <div className="container" >
            <div className="container text-center">


                <div className="row">
                    <div class="col">
                        <div>
                            <h1 class="text-start">Your optimized build!</h1>
                        </div>
                    </div>
                    <div className="col col-5">
                        <div className="row">
                            <div className="col">

                            </div>
                            <div className="col">
                                <button class="btn btn-light" type="submit">Back</button>
                            </div>
                            <div className="col">
                                <button class="btn btn-light" type="submit">Checkout</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="container text-center">
                    <div className="row">
                        <div class="col">

                            <div> <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Avant-Tower-Gaming-PC.png"
                                class="" alt="Pc Gaming Custom, HD Png Download@kindpng.com" />
                            </div>

                        </div>

                        <div className="col">
                            <div className="row">

                                <div class="col">

                                    <button class="card">
                                        <img src="https://www.mouser.pe/images/marketingid/2016/img/158581887_Intel_Corei7-670014nmDesktopProcessors.png?v=031122.0524"
                                            class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">INTEL CORE I7-12700 12-CORE</p>
                                            <p class="card-text">359$</p>
                                        </div>
                                    </button>
                                </div>
                                <div class="col">
                                    <button class="card">
                                        <img src="https://www.pngall.com/wp-content/uploads/5/RGB-Ram-PNG-Image.png"
                                            class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">16GB DDR4 DUAL CHANNEL</p>
                                            <p class="card-text">69$</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col">
                                    <button class="card">
                                        <img src="https://cdn.coolermaster.com/media/assets/1002/masterliquid-ml120l-v2-rgb-380x380-1-hover.png"
                                            class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">CN MASTERLIQUID ML240L</p>
                                            <p class="card-text">89$</p>
                                        </div>
                                    </button>
                                </div>
                                <div class="col">
                                    <button class="card">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Avant-Tower-Gaming-PC.png"
                                            class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">COOLER MASTER TD500 RGB</p>
                                            <p class="card-text">99$</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col">
                                    <button class="card">
                                        <img src="https://www.asus.com/media/Odin/websites/global/ProductLine/20200819054034.png"
                                            class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">ASUS PRIME B660M-A INTEL</p>
                                            <p class="card-text">149$</p>
                                        </div>
                                    </button>
                                </div>
                                <div class="col">
                                    <button class="card">
                                        <img src="https://uniq.software/images/com_hikashop/upload/windows_11_home-removebg-preview_1620008309.png"
                                            class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">WINDOWS 11 HOME</p>
                                            <p class="card-text">120$</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col">
                                    <button class="card">
                                        <img src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/pic-nvidia_10a6075f-04a9-4be0-8101-c3517d95d612_720x@2x.png?v=1662507961"
                                            class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">NVIDIA GEFORCE RTX 3070 8GB</p>
                                            <p class="card-text">679$</p>
                                        </div>
                                    </button>
                                </div>
                                <div class="col">
                                    <button class="card">
                                        <img src="https://images.samsung.com/is/image/samsung/es-ssd-970-evo-mz-v7e1t0bw-frontblack-96266700?$650_519_PNG$"
                                            class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">1TB NVME M.2</p>
                                            <p class="card-text">99$</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                            <div class="col">

                            <button class="card">
                                        <img src="https://cdn.shopify.com/s/files/1/0408/5792/7834/products/4xFan_400x.png?v=1604255432"
                                            class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">QTY 4X CM MASTERFAN RGB</p>
                                            <p class="card-text">29$</p>
                                        </div>
                                    </button>
                            </div>
                            <div class="col">

                            <button class="card">
                                        <img src="https://images.evga.com/products/gallery/png/100-GD-0700-V1_LG_1.png"
                                            class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">700W ATX 80 PLUS GOLD</p>
                                            <p class="card-text">79$</p>
                                        </div>
                                    </button>
                            </div>
                            </div>
                            <div className="row">
                            <div class="col">


                            <button class="card">
                                        <img src="https://www.edimax.com/edimax/mw/cufiles/images/products/pics/ew-7612pin_v2/big/EW-7612PIn_V2-2.png"
                                            class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">WIRELESS 802.11AC</p>
                                            <p class="card-text">99$</p>
                                        </div>
                                    </button>
                            </div>
                            <div class="col">

                            <button class="card">
                                        <img src="http://cdn.onlinewebfonts.com/svg/img_388033.png"
                                            class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-text">BUILD + SETUP + WARRANTY</p>
                                            <p class="card-text">99$</p>
                                        </div>
                                    </button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card">
                                <p class="align-middle">Componente Price: $1899</p>
                                <p class="align-middle">Build fee: $99</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


}

export default Pantalla11