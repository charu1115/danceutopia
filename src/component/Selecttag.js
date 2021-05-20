import React,{useState} from "react";

const Selecttag = () => {
    const [num, setnum] = useState();
    const updated=(event)=>
    {
        setnum(event.target.value);
    }
    return(
        <>
        <h1>u choose {num} value</h1>
        <select value={num} onChange={updated}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        </>
    )
}

export default Selecttag