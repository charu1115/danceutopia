import React from "react";
const mrji="dn";
function add(a,b)
{
    let sum=a+b;
    return sum;
}
function sub(a,b)
{
    let diff=a-b;
    return diff;
}
function mul(a,b)
{
    let multiply=a*b;
    return multiply;
}
function div(a,b)
{
    let divide=a/b;
    divide=divide.toFixed(2);
    return divide;
}
export default mrji;
export {add,sub,mul,div};
//<>
//<h2>sum of two numbers is {add(2,5)}</h2>
//<h2>sum of two numbers is {sub(10,5)}</h2>
//</>
//import {add,sub,mul,div} from "./component/Cal";