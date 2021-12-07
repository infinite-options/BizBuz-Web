import React, { useEffect, useState } from "react";
import axios from "axios";
//import Grid from ' @mui/material/core/Grid';
import Img from "../Assets/Images/Home-BizBuz.svg"
import { Link } from "react-router-dom";
import "../Home/Home.css"

export default function Design(){
    return(
    <div className="DesginDropDown">
        <div style={{flex:'1.5', display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'flex-start'}}>

            <div className="nav-item" >
            <Link to={{pathname: '/design' }} className="CardText" style={{textDecoration:'none'}}   >
            Design Packages
            </Link>
            </div>

        </div>
        <div style={{flex:'0.3'}}>

        </div>
        <div style={{flex:'5', marginRight:'3rem'}}>
            <div >
                <div className="CardTitle">
                Design Packages
                </div>
                <Link to={{pathname: '/design' }} >
                Customers
                </Link>
            </div>
           
            <div>
                <div  className="CardText" >
                    John Doe
                </div>
                <div>
                Next delivery date: December 1, 2021
                </div>
                <div style={{borderBottom:'2px solid black' }}>
                    <img src={Img} className="CardImage"/>
                    <img src={Img} className="CardImage"/>
                </div>
            </div>
            <div>
                <div  className="CardText" >
                    December 15
                </div>
                <div>
                    Delivery date
                </div>
                <div style={{borderBottom:'2px solid black'}}>
                    <img src={Img} className="CardImage"/>
                    <img src={Img} className="CardImage"/>
                    <img src={Img} className="CardImage"/>
                </div>
            </div>
        </div>
    </div>
    )
}