import React from 'react'
import {NavLink} from "react-router-dom";
const Navbar=()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <NavLink className="navbar-brand" to="/">React User</NavLink>
                <button 
                  className="navbar-toggler" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>    
                    
                </button>
                <div className="collapse navbar-collapse" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">
                         Home
                        </NavLink>
                    </li>
                    
                    <li class="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/Users">
                         Users
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/BooksIssued">
                         BooksIssued
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/Address">
                         Address
                        </NavLink>
                    </li>
                  </ul> 
                </div>
            </div>

        </nav>
    )
}
export default Navbar;