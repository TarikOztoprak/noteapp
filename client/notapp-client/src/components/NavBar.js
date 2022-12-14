import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
function NavBar() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">NotApp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className='nav-link' to="/">Folders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/register">Register</Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default NavBar