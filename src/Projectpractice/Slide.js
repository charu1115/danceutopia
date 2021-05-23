import React from "react"
const Slide = () => {
    return(
        <>
        <div id="carouselExampleControls" className="carousel slide " data-ride="carousel" style={{marginTop:'0.4rem'}}>
        <ul className="carousel-indicators">
    <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleControls" data-slide-to="1"></li>
    <li data-target="#carouselExampleControls" data-slide-to="2"></li>
  </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i0.wp.com/ideasfornames.com/wp-content/uploads/2019/10/Depositphotos_104115466_s-2019.jpg?ssl=1" className="d-block w-100" alt="car"/>
        <div className="carousel-caption d-none d-md-block">
            <h2>WELCOME TO THE WORLD OF DANCE</h2>
            <p>Just watch vedios and learn dance</p>
        </div>  
        </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/originals/c1/fa/f3/c1faf336caadc1c8603d3877ce0d591f.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h2>WELCOME TO THE WORLD OF DANCE</h2>
                <p>Just watch vedios and learn dance</p>
            </div>   
        </div>
          <div className="carousel-item">
            <img src="https://cdn.wallpapersafari.com/4/67/RQEAG2.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h2>WELCOME TO THE WORLD OF DANCE</h2>
                <p>Just watch vedios and learn dance</p>
            </div>   
        </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
        </>
    )
    
}

export default Slide


