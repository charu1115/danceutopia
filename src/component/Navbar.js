import React from "react";
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return(
        <>
        <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="./">didgital</NavLink>
        <NavLink  activeClassName="active_class" to="./Hi">hi</NavLink>
        <NavLink  activeClassName="active_class" to="./Todolist">todo</NavLink>
        <NavLink  activeClassName="active_class" to="./Search">Search</NavLink>
        </div>
        </>
    )
    
}

export default Navbar
/*<Link to="./">digital</Link>
        <Link to="./Hi">hi</Link>*/