import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "../Home/Home.css"
import { Table } from "@mui/material";

export default function Billing(){
    return(
        <div className="DesginDropDown">
            <div style={{flex:'1.5', display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'flex-start'}}>

                <div className="nav-item" >
                <Link to={{pathname: '/design' }} className="CardText" style={{textDecoration:'none'}}   >
                Design Packages
                </Link>
                </div>
                <div className="nav-item">
                <Link to={{pathname: '/subscriptions' }} className="CardText" style={{textDecoration:'none'}} >
                Subscriptions
                </Link>
                </div >

                <div  className="nav-item">
                <Link to={{pathname: '/billing' }} className="CardText" style={{textDecoration:'none'}} >
                Billing
                </Link>
                </div >

            </div>
            <div style={{flex:'5', display:'flex',flexDirection:'column', justifyContent:'space-evenly', marginBottom:'5rem', padding:'2% 10% 2% 10%'}}>
                <div className="CardTitle">
                    Billing
                </div>
                <Table  style={{textAlign:'left'}}> 
                    <tr>
                        <th>
                        Date
                        </th>
                        <th>
                        Plan
                        </th>
                        <th>
                        Cost
                        </th>
                        <th>
                        Order Number
                        </th>
                        <th>
                        Action
                        </th>
                    </tr>
                    <tr>
                    <th>
                        Nov 15, 2021
                        </th>
                        <th>
                        Instagram post and story
                        </th>
                        <th>
                        US$99.00
                        </th>
                        <th>
                        BZ098889909
                        </th>
                        <th>
                        *****
                        </th>
                    </tr>
                    <tr >
                    <th>
                        Nov 15, 2021
                        </th>
                        <th>
                        Instagram post and story
                        </th>
                        <th>
                        US$99.00
                        </th>
                        <th>
                        BZ098889909
                        </th>
                        <th>
                        *****
                        </th>
                    </tr>
                    <tr>
                    <th>
                        Nov 15, 2021
                        </th>
                        <th>
                        Instagram post and story
                        </th>
                        <th>
                        US$99.00
                        </th>
                        <th>
                        BZ098889909
                        </th>
                        <th>
                        *****
                        </th>
                    </tr>
                </Table>
            </div>
        </div>
    )
}