import React from "react"
import Data from "./Data"
import Alldance from "./Alldance";

const Classical = () => {
return(
        <>
 <div className="featured-rooms-center" style={{marginTop:'8rem'}}>
{
    Data.map(item=>{
    if(item.key >= 16&& item.key<20)
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

export default Classical