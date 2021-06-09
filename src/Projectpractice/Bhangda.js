import React from "react"
import Data from "./Data"
import Alldance from "./Alldance";
import { NavLink } from "react-router-dom";

const Bhangda = () => {
return(
    <>
    <div className="featured-rooms-center"  style={{marginTop:'8rem'}}>
{
    Data.map(item=>{
    if(item.key <= 9)
    {return(<Alldance
    key={item.key}
    vedio={item.vedio}
    text={item.text}
    />)}
    })
}
</div>
        </>
    )
    
}
export default Bhangda
