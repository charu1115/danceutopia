import React,{Component,useState} from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
  // eslint-disable-next-line
//import logo from './logo.svg';//import Hi from "./component/Inlinecs";//import Project from "./component/Project";
//import {add,sub,mul,div} from "./component/Cal";//mport Sdata from "./component/Sdata";
//import Card from './component/Properties';//import First from "./component/First";
//import Second from "./component/Second";//import Slot from "./component/Slot";
//import Digital from "./component/DigitalClock";//import Formex from "./component/Formex";
//import Extra from "./component/Extra";//import Event from "./component/Events";
//import Count from "./component/Count";//import First from "./component/First";
//import Inputtest from "./component/Inputtest";//import Createnote from "./component/Createnote";
//import Note from "./component/Note";//import Header from "./component/Header";
//import Todolist from "./component/Todolist"//import Selecttag from "./component/Selecttag";
import { Route, Switch,Redirect } from "react-router-dom";
//import ReactDom from "react-dom"
//import {BrowseRouter} from "react-router-dom"
//import Search from "./component/Search";
import Home from "./Projectpractice/Home";
//import Home1 from "./Projectpractice/Home1";
import About from "./Projectpractice/About";
import Contact from "./Projectpractice/Contact";
import Services from "./Projectpractice/Services";
class App extends Component
{
  render()
  {
    return(
<div className="App">
  
 <Home/>
 <Switch>
<Route exact path='/' component={Home}/>
<Route path='/About' component={About}/>
<Route path='/Contact' component={Contact}/>
<Route path='/Services' component={Services}/>

</Switch>


</div>
    );
  }
}
export default App


/*<Switch>
<Route exact path='/' component={Digital}/>
<Route path='/Hi' component={Hi}/>
</Switch> */  
/*<Switch>
<Route exact path='/' component={Home}/>
<Route path='/About' component={About}/>
<Route path='/Contact' component={Contact}/>
<Route path='/Services' component={Services}/>
<Redirect to="/"/>
</Switch>*/