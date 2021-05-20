import React,{useState} from "react";

const Events=()=>
{
  const state=useState();
  const red="red"
  const btn="click me!!"
  const [color, setbg] = useState(red);
  const [name, setText] = useState("click me");
  const [btnbg, setbtnbg] = useState(red);
  const Newbg=()=>
  {
    setText('hey u came');
  }
  const btnset=()=>
{
  setbtnbg("purple");
  }
  const btnreset=()=>
{
  setbtnbg(red);
  }
  
       return(

<>
<div style={{backgroundColor:"pink",height:'720px'}}>
<center><h2>
  <button className="btn btn-primary btn-lg" onClick={Newbg}>
  {name}
  </button>
<br/><br/>
<button style={{backgroundColor:btnbg,padding:'50px'}} 
onMouseEnter={btnset}
onMouseLeave={btnreset}>
  hello</button>
</h2></center>
</div></>

 );
}
export default Events;