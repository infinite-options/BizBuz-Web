import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "./calendar.css";
import "../Home/Home.css"

export default function ThankYou2(){
    return(
        <div>
            <div  className="HomeContainer" style={{backgroundColor:'#FCF621'}}>
                <div className="CardGrid" style={{gridTemplateColumns:'repeat(1,auto)', textAlign:'center'}}>
                    <div className="CardTitle" style={{textAlign:'center'}}> Thank you! </div>
                    <div className="CardText"  style={{textAlign:'center', marginTop:'4rem'}}>
                    Thank you for subscribing for the Instagram plan. 
                    Our team will get in touch with you if they need more information regarding your brand. 
                    Keep an eye out for designs from us. You will receive your 2 designs on the 1st of every month.
                    </div>
                    <div className="CardText"  style={{textAlign:'center', marginTop:'2rem'}}>
                    If you have any questions, feel free to email us at Info@bizbuz.design
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <button className="CardButton">
                        Login
                    </button>
                    </div>
                    <div  className="CardText">Don’t have an account?</div>
                    <div  style={{display:'flex', justifyContent:'center'}}>
                    <Link className="CardButton" style={{textDecoration:'none', padding:'1%'}} to = '/login' >
                        Create Account
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}