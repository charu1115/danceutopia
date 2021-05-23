import React,{useState} from "react"
const Clock=()=>
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
<p>{cTime}</p>
</>
</div>
 );

}
export default Clock;