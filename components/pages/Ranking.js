/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {} from "react-router-dom";
import React from "react";

const Ranking = () => {
  return <div>
    
    <h2> Ranking de productos mas vendidos</h2>
    <div style={{ height: "30px" }}></div>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h5>1.- Tarjeta De Video Asus Tuf Gaming Oc gtx1650 4gb Gddr6</h5>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-label="Basic example" 
              style={{width: "98%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="card" style={{width: "14rem",height: "13rem",marginBottom: "20px",marginLeft: "60px",}}>
              <img src="/img/tuf.png" class="card-img-top" alt="1650" style={{ height: "200px", width: "200px" }}></img>
            </div>
          </div>
          <div class="col">
            <h5>2.- Core i7-11900k</h5>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" aria-label="Basic example"
                style={{ width: "91%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="card" style={{width: "14rem",height: "13rem",marginBottom: "20px",marginLeft: "60px",}}>
              <img src="/img/i7.png" class="card-img-top" alt="i7" style={{ height: "200px", width: "200px" }}></img>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5>3.- Gabinete Pc Gamer Cooler Master H500 Argb Templado Midtower</h5>
          <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example"
              style={{ width: "82%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="card" style={{width: "14rem",height: "13rem",marginBottom: "20px",marginLeft: "60px",}}>
              <img src="/iconos/coolermaster.png" class="card-img-top" alt="coolerMaster"
              style={{ height: "200px", width: "200px" }}></img>
            </div>
          </div>
        <div class="col">
          <h5>4.- Ssd Sata A400 480gb</h5>
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: "69%" }}
              aria-valuenow="25" aria-valuemin="0"aria-valuemax="100"></div>
            </div>
            <div class="card" style={{width: "14rem",height: "13rem",marginBottom: "20px",marginLeft: "60px",}}>
              <img src="/img/ssd.png" class="card-img-top" alt="ssd" style={{ height: "200px", width: "200px" }}></img>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h5>5.- Memoria Ram 8gb 2600mhz Laptop Kingston</h5>
            <div class="progress">
              <div class="progress-bar bg-info" role="progressbar" aria-label="Basic example" style={{ width: "66%" }}
              aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="card" style={{width: "18rem",height: "10rem",marginBottom: "20px",marginLeft: "60px",}}>
              <img src="/img/ram8.png" class="card-img-top" alt="Core"></img>
            </div>
          </div>
          <div class="col">
            <h5>Intel (59%) vs AMD (41%)</h5>
            <div class="progress">
            <div class="progress-bar" role="progressbar" style={{ width: "59%" }} aria-valuenow="15"
            aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-danger" role="progressbar" style={{ width: "41%" }} aria-valuenow="30"
            aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
  </div>
}

export default Ranking;
