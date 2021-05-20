// eslint-disable-next-line
import React,{useState} from 'react'
import Createnote from "./Createnote"
import Note from "./Note"
const Header = () => {
    const [addItem, setAddItem] = useState([]);
    const addNote=(note)=>
    {
      
        setAddItem((prevVal)=>
        {
            return[...prevVal,note];
        });
    
    };
    return(
        <>
        <Createnote passNote={addNote}/>
        
        <ol>
                    {addItem.map((itemval)=>
                    {
                        return (
                            <><div className="todo_style">
                            
                        <li>{itemval.title}</li>
                        </div>
                        </>

                        );
                    })}
                </ol>      
    </>
    );
}

export default Header
