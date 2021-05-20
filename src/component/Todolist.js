import React,{useState} from "react";

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
        <div className="main_div">
            <div className="inner_div"><br/>
                <h1>Todo list</h1><br/>
                <input type="text" placeholder="add items in queue" 
                value={inputlist} onChange={itemevent}/>
                <button onClick={listofitem}>+</button><br/>
                <ol>
                    {Items.map((itemval)=>
                    {
                        return (
                            <><div className="todo_style">
                                <i class="fa fa-times" aria-hidden="true"/>
                        <li>{itemval}</li>
                        </div>
                        </>

                        );
                    })}
                </ol>
            </div>
        </div>
        </>

    );
    
}

export default Todolist;