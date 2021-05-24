import React,{Component,useState} from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
  import { Route, Switch,Redirect } from "react-router-dom";
import Header from "./Projectpractice/Header";
import About from "./Projectpractice/About";
import Contact from "./Projectpractice/Contact";
import Todolist from "./Projectpractice/Todolist";
import Dance from "./Projectpractice/Dance";
import Bhangda from "./Projectpractice/Bhangda"
import Western from "./Projectpractice/Western"
import Starting from "./Projectpractice/Starting"
import Classical from "./Projectpractice/Classical"

function App()
{ return(
<div className="App">
<Header/>
 <Switch>
<Route exact path='/danceutopia/' component={Starting}/>
<Route  path='/Starting' component={Starting}/>
<Route path='/Dance' component={Dance}/>
<Route path='/Todo' component={Todolist}/>
<Route path='/Bhangda' component={Bhangda}/>
<Route path='/Western' component={Western}/>
<Route path='/Classical' component={Classical}/>
<Route path='/Contact' component={Contact}/>

</Switch>
</div>
);
  
}
export default App


