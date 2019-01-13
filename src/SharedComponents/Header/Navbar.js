import React from 'react';
import {NavLink} from 'react-router-dom';


const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse justify-content-md-center">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <NavLink className="nav-link" to="/">{props.logo}</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/github">GitHub</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/contacto">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/about">About</NavLink>
                    </li>

                </ul>
            </div>

        </nav>


    )
}

export default NavBar;