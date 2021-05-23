//import { Style } from "@material-ui/icons";
import React from "react";
import {NavLink} from "react-router-dom";
import "./Style1.css";
import Clock from "./Clock";

const Header= () => {
    return(
        <>
        <div className="nav_bg">
            <div className="row">
                <div className="nav-center">
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <div className="navbar-brand">
      <button className="btn-outline btn1">Dance<span className="span1"> Utopia</span>
      </button>
  </div>
  <span id="b"><Clock/></span>
     
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span></button>
      <div className="navbar-collapse collapse show" id="navbarSupportedContent">
        <ul className="navbar-nav ml-5 mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" exact activeClassName="menu_active" to="/" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"activeClassName="menu_active" to='/Dance'>DanceForms</NavLink>
            </li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="menu_active" to="/Todo">Suggestions</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="menu_active" to="/Contact">ContactUs</NavLink></li>
            <span id="a"><Clock/></span>
            </ul>
            </div>
    
        
      
    
  </div>
</nav>
</div>
            </div>
        </div>
        </>
    )
    
}
     
    
    


export default Header

