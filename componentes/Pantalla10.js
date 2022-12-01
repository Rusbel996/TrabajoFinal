import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import OtraBarra from "../componentes/BarraPrincipal/OtraBarra"

const Pantalla10 = (props) => {

  const navigate = useNavigate();
  
  return <div className="">
    <OtraBarra></OtraBarra>
    <div className="container" >

      <div className="container text-center">

        <div className="row ">
          <div class="col">
            <div>
              <h1>What do you need?</h1>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="" type="button">Back</button>
                <button class="" type="button">Next</button>
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center">
          <div className="row row-cols-3">
            <div class="col">

              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button panel-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="True" aria-controls="collapseOne">
                      <img src="https://cdn-icons-png.flaticon.com/512/2165/2165117.png" class="d-block w-100" alt="" />
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
                    <div class="accordion-body">
                      <strong>Gaming</strong>
                      <img src="https://m.media-amazon.com/images/I/81Wx7hw9vwL._AC_SX679_.jpg" class="d-block w-100" alt="" />
                      <ul>
                        <li>System: Intel Core i5-11400F 2.6GHz 6-Core | Intel B560 Chipset | 8GB DDR4 | 500GB PCI-E NVMe SSD | Genuine Windows 11 Home 64-bit</li>
                        <li>Graphics: NVIDIA GeForce RTX 3050 8GB Video Card | 1x HDMI | 1x DisplayPort</li>
                        <li>Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel | Keyboard and mouse</li>
                        <li>1 year parts & labor | Free lifetime tech support</li>
                        <li><strong>Price: $987</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col">

              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="True" aria-controls="collapseTwo">
                      <img src="https://cdn-icons-png.flaticon.com/512/2857/2857433.png" class="d-block w-100" alt="" />
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne">
                    <div class="accordion-body">
                      <strong>Design</strong>
                      <img src="https://m.media-amazon.com/images/I/71gx1HNTj1L._AC_SX679_.jpg" class="d-block w-100" alt="" />
                      <ul>
                        <li>12th Generation Intel Core i5-12400 6-Core Processor (Up to 4.4GHz) | Intel UHD Graphics 730</li>
                        <li>12GB 3200MHz DDR4 Memory | 512GB M.2 2280 NVMe SSD | 8X DVD-Writer Double-Layer Drive (DVD-RW)</li>
                        <li>Intel Wireless Wi-Fi 6 AX201 802.11ax Dual-Band 2.4GHz and 5GHz featuring 2x2 MU-MIMO technology | Bluetooth 5.2 | 10/100/1000 Gigabit Ethernet LAN</li>
                        <li>1 - USB 3.2 Type C Gen 1 port (up to 5 Gbps) (Front) | 2 - USB 3.2 Gen 1 Ports (1 Front and 1 Rear) | 4 - USB 2.0 Ports (Rear) | 2 - HDMI Ports (Rear)</li>
                        <li>1 year parts & labor | Free lifetime tech support</li>
                        <li><strong>Price: $539</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="col">

              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="True" aria-controls="collapseThree">
                      <img src="https://cdn-icons-png.flaticon.com/512/80/80429.png" class="d-block w-100" alt="" />
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingOne">
                    <div class="accordion-body">
                      <strong>Coding</strong>
                      <img src="https://m.media-amazon.com/images/I/81liWNg7JzL._AC_SY879_.jpg" class="d-block w-100" alt="" />
                      <ul>
                        <li>STUNNING GRAPHICS – With the all-new NVIDIA Turing architecture and 4 GB GDDR6 dedicated memory, you’ll boost your creative and gaming experience with real-time ray tracing and fast performance from the NVIDIAⓇ GeForceⓇ GTX 1650 SUPER graphics card</li>
                        <li>DDR4 MEMORY – With 8 GB of RAM, everything from browsing multiple web pages to playing games gets a performance boost</li>
                        <li>PLENTY OF STORAGE – Get up to 10x faster performance than a traditional hard drive with 256 GB of PCIe NVMe M.2 Solid State Drive storage</li>
                        <li>1 year parts & labor | Free lifetime tech support</li>
                        <li><strong>Price: $613</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">


              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="False" aria-controls="collapseFour">
                      <img src="https://cdn-icons-png.flaticon.com/512/2818/2818206.png" class="d-block w-100" alt="" />
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne">
                    <div class="accordion-body">
                      <strong>Rendering</strong>
                      <img src="https://m.media-amazon.com/images/I/81liWNg7JzL._AC_SY879_.jpg" class="d-block w-100" alt="" />
                      <ul>
                        <li>CPU Intel 12-Core i9 10920X 3.5Ghz || Motherboard X299 Chipset Series</li>
                        <li>RAM 128GB DDR4 High Performance Memory || HDD 10TB Storage Drive || Intel M.2 1TB NVMe PCI-Express SSD</li>
                        <li>GPU GeForce RTX 4090 24Gb || PSU T hermaltake Toughpower 1000W</li>
                        <li>240mm Liquid CPU Cooler || OS Windows 10 PRO</li>
                        <li>Assembled and Tested, 3 Years Parts / Labor Warranty || Lifetime Tech Support || 1-2 Business Day Shipping</li>
                        <li><strong>Price: $6599</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          


          <div class="col">

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="False" aria-controls="collapseFive">
                    <img src="https://cdn-icons-png.flaticon.com/512/2086/2086058.png" class="d-block w-100" alt="" />
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingOne">
                  <div class="accordion-body">
                    <strong>Office</strong>
                    <img src="https://m.media-amazon.com/images/I/61FVIijQp2L._AC_SX679_.jpg" class="d-block w-100" alt="" />
                      <ul>
                        <li>Dell Optiplex 7050 SFF Desktop PC, Intel Quad Core i7-7700 up to 4.2 GHz, 32GB DDR4, 1TB SSD</li>
                        <li>Includes: USB Keyboard & Mouse, USB WiFi adapter, USB Bluetooth adapter, Microsoft office 30 days free trail.</li>
                        <li>USB3.0, Type-C, DisplayPort, HDMI, Headphone output, Microphone input, LAN</li>
                        <li>Support 4K (3840x2160) Dual display, makes it easy to connect two monitors at the same time, and you can expand working Windows, mirror content, or expand a single window across multiple monitors.</li>
                        <li>1 year parts & labor | Free lifetime tech support</li>
                        <li><strong>Price: $328</strong></li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="col">

                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="False" aria-controls="collapseSix">
                    <img src="https://cdn-icons-png.flaticon.com/512/101/101187.png" class="d-block w-100" alt="" />
                  </button>

          </div>
        </div>
      </div>
    </div>
  </div>
  </div >



}

export default Pantalla10