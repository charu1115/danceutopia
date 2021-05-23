import React from "react";
import "./Style5.css";
const Contact = () => {
    return(
        <>
      <section className="contact">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="head text-center text-white py-3">
                    <h3>Contact Us</h3>
                  </div>
                </div>
              </div>
              <div className="form p-3">
                <div className="form-row my-5">
                  <div className="col-lg-6 align-left">
                    <input type="text" className="effect-1" placeholder="Name"/>
                    <span className="Focus-border"></span>
                  </div>
                </div>
               
                <div className="form-row pb-3">
                  <div className="col-lg-12">
                    <input type="text"name="email" type="email" className="effect-1" placeholder="Email Adress"/>
                    <span className="Focus-border"></span>
                  </div>
                <div className="form-row pt-5">
                 <div className="col-lg-12">
                  <input type="text" className="effect-1" placeholder="Your message"/>
                  <span className="Focus-border"></span>
                 </div>
                </div>
                <div className="form-row pt-4">
                  <div className="col-lg-6">
                    <p><input type="checkbox"/> I' M Not a Robot</p>
                  </div>
                  <div className="offset-2 col-lg-4">
                    <button className="btn2">SEND MESSAGE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
        </>
        
    )
}

export default Contact