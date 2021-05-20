// eslint-disable-next-line
import React from 'react'
const divstyle={
    backgroundColor:'pink',
    marginTop:'250px',
    padding:'25px',
    width:'550px',
    height:'100px'
   }
   
let curdate=new Date();
curdate=curdate.getHours();
let greeting="";
const cstyle={};
if(curdate>=1 && curdate<12) 
{
    greeting="Good morning";
    cstyle.color="green";
}
else if(curdate>=12 && curdate<19)
{
    greeting="Good afternoon";
    cstyle.color="blue";
}
else{
    greeting="Good night";
    cstyle.color="red";
}
const Project = () => {
    return(
        <>
        <center>
        <div style={divstyle}><h2>hello,sir <span style={cstyle}>{greeting}</span></h2></div>
    </center>
    </>
    )
}

export default Project