import React from "react";
import {NavLink} from "react-router-dom";
import "./Style3.css";

const DanceMain = (props) => {
    return(
        <>
         <article className="room">
                <div className="img-container">
                    <img src={props.img} alt="single room"/>
                        <div className="price-top">
                            <h6>{props.name}</h6>
                         </div>
                        <NavLink className="btn room-link" to={props.link}>Browse Vedios</NavLink>
                        </div>
                        <p className="room-info">{props.text}</p>
                        </article>
        </>
    )
}

export default DanceMain
