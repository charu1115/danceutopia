import React from "react";
import {NavLink} from "react-router-dom";
import DanceMain from "./DanceMain";
import "./Style3.css";
const Dance = () => {
    return(
        <>
        <div className="featured-rooms-center" style={{marginTop:'8rem'}}>
<DanceMain  img="https://yehaindia.com/wp-content/uploads/2020/03/Bhangra-2.jpg"
name="BHANGRA" link='/Bhangda'
text="Bhangra refers to several forms of folk dance and music that originate in the Punjab region of India. The dance is generally performed during the Vaisakhi festival that celebrates the harvest. Bhangra has a very energetic and lively tone .."/>
<DanceMain img="https://i0.wp.com/ideasfornames.com/wp-content/uploads/2019/10/Depositphotos_104115466_s-2019.jpg?ssl=1"
name="WESTERN" 
link='/Western'
text="western dance encompasses any of the dance forms or styles which are typically danced to country-western music, and which are stylistically associated with American country and/or western traditions. ."/>
<DanceMain img="https://images.financialexpress.com/2019/01/ch.jpg"
 name="CLASSICAL"
 link='/Classical'
  text="A classical dance form characterized by grace and precision of movement and by elaborate formal gestures, steps, and poses. 2. A theatrical presentation of group or solo dancing to a musical accompaniment, usually with costume and scenic effects, conveying a story or theme."/>




                        </div>
                           </>
    );
}

export default Dance