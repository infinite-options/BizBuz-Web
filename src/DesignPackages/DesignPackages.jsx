import React, { useEffect, useState } from "react";
import axios from "axios";
//import Grid from ' @mui/material/core/Grid';
import Img from "../Assets/Images/Home-BizBuz.svg"
import { Link } from "react-router-dom";
import "../Home/Home.css";
import "../Navigation/Navbar.css";

export default function Designpackages(){
    return(
    <div className="DesginDropDown" >
        <div style={{flex:'1.5', display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'flex-start'}}>

            <div className="nav-item" >
            <Link to={{pathname: '/design' }} className="CardText" style={{textDecoration:'none'}}   >
            Design Packages
            </Link>
            </div>
            <div className="nav-item">
            <Link to={{pathname: '/subscriptions' }}  state ={{ from: 'design' }} className="CardText" style={{textDecoration:'none'}} >
            Subscriptions
            </Link>
            </div >

            <div  className="nav-item">
            <Link to={{pathname: '/billing' }} className="CardText" style={{textDecoration:'none'}} >
            Billing
            </Link>
            </div >

        </div>
        <div style={{flex:'0.3'}}>

        </div>
        <div style={{flex:'5', marginRight:'3rem'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div className="CardTitle">
                Design Packages
                </div>
                <div className="CardText" style={{marginTop:'1rem'}}>
                    <div>  Sort by </div>
                    <div>
                    <select style={{height:'3rem'}}>
                        <option >Newest - Oldest</option>
                        <option >Oldest - Newest</option>
                    </select>
                    </div>
                </div>
            </div>
           
            <div>
                <div  className="CardText" >
                    December 15
                </div>
                <div>
                    Delivery date
                </div>
                <div style={{borderBottom:'2px solid black' }}>
                    <img src={Img} className="CardImage"/>
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