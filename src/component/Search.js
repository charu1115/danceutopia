import React,{useState} from "react";
import Searchresult from "./Searchresult";
const Search = () => {
const [img, setimg] = useState();
const InputEvent=(event)=>
{
    setimg(event.target.value);
}
    return(
        <>
        <div className="searchbar">
            <input type="text" placeholder="enter ur name"
            value={img} onChange={InputEvent}/>
        </div><br/><br/>
        <Searchresult name={img}/>
        </>
    )
}

export default Search