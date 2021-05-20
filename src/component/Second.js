import React from "react";
import Sdata from "./Sdata";
import Card from './Properties';
const Second = () => {
    return(
        <Card
  imgsrc={Sdata[1].imgsrc} 
  title={Sdata[1].title} 
  text={Sdata[1].text} 
  btnu={Sdata[1].btnu}
  />
    );

}

export default Second
 //<div className="app">
//{(favseries=="first")? <First/>:<Second/>}
//</div>