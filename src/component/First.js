import React from "react";
import Sdata from "./Sdata";
import Card from "./Properties";

const First = () => {
    return(
        <Card
  imgsrc={Sdata[0].imgsrc} 
  title={Sdata[0].title} 
  text={Sdata[0].text} 
  btnu={Sdata[0].btnu}
  />
    );
    
}

export default First

//const favseries="first";
//function Fseries()
//{
//if(favseries == "first")
//{ return <First/>
//}
//else
//{
  //return <Second/>
//}
//}
//in render<Fseries/>