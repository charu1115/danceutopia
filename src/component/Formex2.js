import React,{Component,useState} from "react"
  // eslint-disable-next-line
import logo from './logo.svg';
// eslint-disable-next-line//import Hi from "./component/Hi";//import Project from "./component/Project";
//import {add,sub,mul,div} from "./component/Cal";//mport Sdata from "./component/Sdata";
//import Card from './component/Properties';
//import First from "./component/First";
//import Second from "./component/Second";
//import Slot from "./component/Slot";
//import Digital from "./component/DigitalClock";
//import Formex1 from "./component/Formex1";

const App=()=>
{
const [fullprevious, setnew] = useState(
  {
  fname:"",
  lname:"",
  email:"",
});

const inputEvent=(event)=>
{
  const{value,name}=event.target;
  setnew((preValue)=>
  {
return{
  ...preValue,
  [name]:value,
}

  });
}



const onsubmit=()=>
{
  alert("form submitted");
}

       return(
 <div className="app">
<>
<h1>hello {fullprevious.fname} {fullprevious.lname}</h1><br/>
<p>{fullprevious.email}</p><br/>
<input type="text"
 placeholder="enter ur name" 
 name="fname"
 onChange={inputEvent} 
 value={fullprevious.fname}
/><br/>
<br/>

<input type="text"
 placeholder="enter ur lastname"
 name="lname"
 onChange={inputEvent}  
 value={fullprevious.lname}
/>
<br></br><br></br>
<input type="email"
 placeholder="enter ur email"
 name="email"
 onChange={inputEvent}  
 value={fullprevious.email}
/>
<br/><br/>
<button className="btn btn-primary" onClick={onsubmit}>click me</button>
</>
</div>
 );
}




export default App;

