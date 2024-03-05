import { NavLink } from "react-router-dom";
import React from "react";
import "../NavBar.css";

function NavBar() {
    return (
        <nav>
            <NavLink to="/home">Home </NavLink>
            <NavLink to="/artists">Artists </NavLink>
            <NavLink to="/add_artist">Add Artist Here! </NavLink>
            <NavLink to="/discover">Discover New Sounds </NavLink>
        </nav>
    )
}

export default NavBar;