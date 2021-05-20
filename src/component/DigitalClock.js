import React,{useState} from "react"
const Digital=()=>
{
  let curTime=new Date().toLocaleTimeString();
  const [cTime,newTime] = useState(curTime);
  const updateTime=()=>
  {
    curTime=new Date().toLocaleTimeString();
    newTime(curTime);
  }
  setInterval(updateTime,1000)
       return(
 <div className="app">
<>
<h1>{cTime}</h1>
</>
</div>
 );

}
export default Digital;