import React from 'react';
const Card = (props) => {
    return(
<>

<div className="card">
    <div className="card-top">
      <h2>{props.title}</h2>
        </div>
        <div className="card-body">
        <img src={props.imgsrc}/>
        <div className="card-text">{props.text}</div>
        </div>
        <div className="card-footer">
            <a href="https://picsum.photos/" className="btn btn-primary">{props.btnu}</a>
        </div>
</div>

</>
    )
    
    
}

export default Card
// <Card imgsrc="https://picsum.photos/id/237/200/300" 
//title="title1" text="helo1" btnu="btn1"/>
//<Card imgsrc="https://picsum.photos/seed/picsum/200/300" 
//title="title2" text="helo2" btnu="btn2"/>

