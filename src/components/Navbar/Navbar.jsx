import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (<>

        <nav className="navbar navbar-expand-lg py-4">
            <div className="container">
                <Link className="navbar-brand text-white fw-bold fs-2 text-uppercase" to="">Start Framework</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white rounded-2 text-uppercase fw-bold" to="About">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white rounded-2 mx-2 text-uppercase fw-bold" to="Portfolio">portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white rounded-2 mx-2 text-uppercase fw-bold" to="Contact">contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}