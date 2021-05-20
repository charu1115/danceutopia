import React,{useState} from "react";

const Inputtest = () => {
    const h1value="5";
    const [first, setfirst] = useState("");
    const [second, setsecond] = useState("");
    const [sum, setsum] = useState();

    const updated1=(event)=>
    {
        setfirst(event.target.value);
    }
    const updated2=(event)=>
    {
        setsecond(event.target.value);
    }
    const adding=()=>
    {
        
        const ne=parseInt(first)+parseInt(second)+h1value;
        setsum(ne);

    }
    return(
        <>
    <h2 id="a">{h1value}</h2>
    1st &nbsp;&nbsp;<input type="number" onChange={updated1} value={first}/><br/><br/>
    <button onClick={adding}>➕</button><br/><br/>
    2nd &nbsp;&nbsp;<input type="number"  onChange={updated2} value={second}/><br/><br/>
    <p>sum of two numbers is {sum}</p>
    </>

    );

}

export default Inputtest