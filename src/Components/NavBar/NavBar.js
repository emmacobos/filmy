import React from "react";
import {Link } from "react-router-dom"
import "./NavBarClass.css"

function NavBar(){
    return(
        <>
            <div className="header">
                <nav className="navbar-list">
                        <ul className="navbar">
                            <li>
                                <Link to={"/"}>Filmy</Link>
                            </li>
                            <li>
                                <Link to={"/Kids"}>Kids</Link>
                            </li>
                        </ul>
                </nav>
            </div>
        </>
    )
}
export default NavBar;