import React,{useState} from "react";
const Formex=()=>
{
const [fname, setname] = useState("");
const [fullname, setfullname] = useState();
const [lname, setlname] = useState("");
const [fulllastname, setfulllastname] = useState();
const firstName=(event)=>
{
  setname(event.target.value);
}
const lastName=(event)=>
{
  setlname(event.target.value);
}
const onsubmit=()=>
{
  setfullname(fname);
  setfulllastname(lname);
}

       return(
 <div className="app">
<>
<h1>hello😄{fullname} {fulllastname}</h1><br></br>
<input type="text" placeholder="enter ur name" onChange={firstName} value={fname}/><br/>
<br/>
<input type="text" placeholder="enter ur lastname" onChange={lastName} value={lname}/>
<br/><br/>
<button className="btn btn-primary" onClick={onsubmit}>click me</button>
</>
</div>
 );
       

}
export default Formex;
