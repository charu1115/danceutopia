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
<Route exact path='/' component={Starting}/>
<Route exact path='/Dance' component={Dance}/>
<Route exact path='/Todo' component={Todolist}/>
<Route exact path='/Bhangda' component={Bhangda}/>
<Route exact path='/Western' component={Western}/>
<Route exact path='/Classical' component={Classical}/>
<Route exact path='/Contact' component={Contact}/>

</Switch>
</div>
);
  
}
export default App


