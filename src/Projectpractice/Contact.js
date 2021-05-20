import React from "react";
const Contact = (props) => {
    return(
        <>
        
       
                           <div className="col-md-4 col-10 mx-auto">

                           <div class="card">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}</p>
    <a href="#" class="btn btn-primary">Cick here</a>
  </div>
</div>

                           </div>

                      
                       

        </>
        
    )
}

export default Contact