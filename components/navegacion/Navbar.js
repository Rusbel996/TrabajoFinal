import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-blue bg-dark">
        <div className="container-fluid">
          <Link to='/'   >

            <img src='./game-icon-white.png' width='70' />
          </Link>



          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className="nav-link " to='/'  >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Compu'>Abaout</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Items'>Support</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Items'>Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Items'>Ranking</Link>
              </li>

              <li>
                <Link className="nav-link" to='/Items'><img src='./lupa2.png' width='20' />
                </Link>
              </li>
              <form className="d-flex" role="search">
                <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>



              <li>
                <Link className="nav-link" to='/Login'><img src='./usuario2.png' width='20' /></Link>
              </li>
              <li>
                <Link className="nav-link" to='/Items'><img src='./carro2.png' width='20' /></Link>
              </li>




































            </ul>




          </div>
        </div>
      </nav>


    </div>

  )




}

export default Navbar