import React from "react";
import "./Style4.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Footer = () => {
    const year=new Date().getFullYear();
    return(
        <>
       
       <footer className="w-100 bg-dark text-center">
           <p>Copy right© {year} Dance utopia. All Rights Reserved | Terms and Conditions</p>
           <span className="spanicon">
            <FacebookIcon/>  <InstagramIcon/> <TwitterIcon/> <YouTubeIcon/>
           </span>
           </footer>
       
        </>
    )
}

export default Footer