import React,{useState} from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddIcon from '@material-ui/icons/Add';
import "./Style2.css";

const Todolist = () => {
    const [inputlist, setinput] = useState("");
    const [Items,setitems] = useState([]);
    const itemevent=(event)=>
    {
        setinput(event.target.value);
    }
    const listofitem=()=>
    {
        setitems((olditems)=>
        {
            return[...olditems,inputlist];
        });
        setinput("");
    }
    return(
        <>
        <div className="container main_div">
            
                <h1>Add suggestions</h1><br/>
                <div>
                <textarea placeholder="Click on add icon " 
                value={inputlist} onChange={itemevent} className="noteadd"/>
                <a className="btnadd" onClick={listofitem}><AddBoxIcon/></a>
                </div>
                <br/>
               
            </div>
            <br/><br/><br/><br/>
          
            <div className="todo_style d-flex flex-wrap p-2">
                    {Items.map((itemval)=>
                    {
                        return (
                            <>
                         
                               
                        <span className="itemadd m-2 ">{itemval}</span>
                      
                        </>

                        );
                    })}
             </div>
             
        
        </>

    );
    
}

export default Todolist;