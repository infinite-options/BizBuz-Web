import React from "react";
//import Logo from '../Assets/Images/Group 15.svg'
//import InstagramIcon from "@material-ui/icons/Instagram";
//import CAAM from "../Assets/Images/CAAM-logo.png";
import FooterLogo from "../Assets/Images/Footer-Img.svg";
import { Link } from "react-router-dom";
//import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";
import '../Home/Home.css'

export default function Footer(){
  //  const history = useHistory();

    return(
        <div>
            {/* <Helmet>
                <title>Address</title>
                <meta name="description" content="Visit our San Jose Office" />
            </Helmet> */}


            <div className="FooterTextWrapper">
                    <div className = "FooterText">
                         <img src={FooterLogo} style={{  height:'7rem',justifySelf:'center', alignSelf:'center'}}/>
                    </div>

                    <div className = "FooterText" >
                        <div > © Terms and Conditions</div>
                    </div>

                    <div  className = "FooterText" style={{border:'0px'}}>
                        <div>Contact us: </div>
                        <div>Info@bizbuz.design </div>
                        <div> (626)491-9171</div>
                    </div>
                
            </div>

                {/* <div style={{marginTop:'3rem', marginBottom:'2rem', textAlign:'center'}}>
                <button  style={{textTransform:'none',cursor:'pointer', color:'#C3A336', backgroundColor:'white', border:'0px'}} >
                © 2021 by Leena Marathay
                </button>
                </div> */}
           
        </div>
    )
}