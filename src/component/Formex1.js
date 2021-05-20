import React,{useState} from "react"
  // eslint-disable-next-line



const Formex1=()=>
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
if(name=="fname")
{
  return{
    fname:value,
    lname:preValue.lname,
    email:preValue.email,

  };
}
else if(name=="lname")
{
  return{
    
    lname:value,
    fname:preValue.fname,
    email:preValue.email,

  };
}
else if(name=="email")
{
  return{
    
    email:value,
    fname:preValue.fname,
    lname:preValue.lname,

  };
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

export default Formex1;

