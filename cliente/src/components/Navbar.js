
import { Collection } from 'mongoose';
import React from 'react';

function Navbar() {

  const user = JSON.parse(localStorage.getItem('currentUser'))

  function logout(){
    localStorage.removeItem('currentUser')
    window.location.href='/'
  }
  function booking(){
    window.location.href='/home'
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">ECLIPSEHOTELS ROOMS</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" style={{color:'white'}}></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-5" >

            {user ? (<>

              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                  {user.name}
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#" onClick={booking}>Reservas</a>
                  <a class="dropdown-item" href="#" onClick={logout}>Logout</a>
                 </div>
              </div>




            </>) : (<>

              <li class="nav-item active">
                <a class="nav-link" href="/register">
                  Registro
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  Login
                </a>
              </li>

            </>)
            }



          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;