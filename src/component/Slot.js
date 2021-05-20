import React from 'react';

const Slot =(props)=>
{
  let x=props.x; 
  let y=props.y;
  let z=props.z ;
  if((x===y) && (y===z))
  {
    return(
<>
<h1>{x} {y} {z}</h1>
<h1>this is matching</h1>
<hr/>
</>
    );
  }
  else{
    return(
      <>
      <h1>{x} {y} {z}</h1>
      <h1>this is not matching</h1>
      <hr/>
      </>
          );
  }
}
export default Slot;

/*<>
<h1>🎰<span>hey slot machine</span>🎰</h1><br/><br/>
<div className="machine">
 <h2>
   <Slot x='😈' y='😅' z='🍎'   />
  <Slot x='😏'  y='😏'  z='😏'    />
 <Slot x='🥕'  y='💳'  z='😿'    />
 </h2>
</div>
</>*/