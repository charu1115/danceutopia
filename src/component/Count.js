import React,{useState} from "react"
import AddIcon from '@material-ui/icons/Add';
const Count=()=>
{
  const state=useState();
  const [count, setcount] = useState(0);
  const Inccount=()=>
  {
    setcount(count+1);
  }
  const Decount=()=>
  {
    if(count>0)
    {
    setcount(count-1);
    }
    else
    {
    setcount(0);
    alert("limit reached");
    }
}
  
  
       return(
 <div className="App">
<>
<h1>{count}</h1>
<h2><button className="btn btn-primary btn-lg" onClick={Inccount}><AddIcon/></button></h2>
<br>
</br>
<h2><button className="btn btn-primary btn-lg" onClick={Decount}>decrement</button></h2>
</>
</div>
 );

}
export default Count;