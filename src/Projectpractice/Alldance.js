import React from "react"
import {NavLink} from "react-router-dom";
import "./Style3.css"
const Alldance = (props) => {
    return(
        <>
    <div className="room">
                <div className="img-container1">
                <iframe 
                 src={props.vedio}></iframe>
        </div>
                        <h5 className="room-info">{props.text}</h5>
                        </div>
                   
                       
        </>
    )
}




export default Alldance