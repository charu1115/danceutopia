import React, {useState} from 'react'
//import Count from "./Count"
const Createnote = (props) => {
    const [note, setNote] = useState({
        title:"",
        content:"",
    });
    const inputEvent=(event)=>
    {
        const { name, value}=event.target;
        setNote((prevData)=>
  {
            return{
               ...prevData,
             [name]:value,
            }

  });
}
const addEvent=()=>
{
{props.passNote(note)};
setNote({
    title:"",
        content:"",
})
}

    return(
       <>
       <div className="inner_div">
           <form>
               <input type="text" 
                name="title" value={note.title} onChange={inputEvent} 
                placeholder="title" autoComplete="off"/><br/><br/>
              
               <textarea rows="" column="" 
                name="content" value={note.content} onChange={inputEvent}
                 placeholder="eneter text"></textarea>
           <button onClick={addEvent}>+</button>
           </form>
       </div>
       </>
    )
}

export default Createnote