import React,{useState} from "react"
//import Hello from "./Hello";
import Count from "./Count"
import Hello from "./Hello";
const Extra = () => {
    const old=<Hello/>
    const [inidata, setdata] = useState(old);
    const [hello, sethello] = useState("anker");
    const btn1part=()=>
    {
        const ne=<Count/>
        setdata(ne);
    }
    const btn2part=()=>
    {
        const ne=<Count/>
        sethello(ne);
    }
    return(
<>
{inidata}
<button onClick={btn1part}>btn1</button>&nbsp;&nbsp;
<a href={btn2part} target="_blank">{hello}</a>

</>
    );
}

export default Extra