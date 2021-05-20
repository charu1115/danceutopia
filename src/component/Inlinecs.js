// eslint-disable-next-line
import React from 'react'
// eslint-disable-next-line

//import Hello from "./component/Hello";

const h1style={
    backgroundColor:'pink',
    marginTop:'250px',
    padding:'25px',
    width:'550px',
    height:'100px'
   }
function Hi() {
    
    return(

        <div>
           <h1 className="heading">heloooo my name is ggg</h1>
           <h2 style={h1style}>hello</h2>
       
     <button className="btn btn-primary btn-lg">button</button>
        </div>
    )
    
}

export default Hi