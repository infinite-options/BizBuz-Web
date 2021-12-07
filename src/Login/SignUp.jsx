import React, { useEffect, useState } from "react";
import axios from "axios";

import Img from "../Assets/Images/Home-BizBuz.svg"

import "../Home/Home.css"
import { Link } from "react-router-dom";

// import Dialog from '@mui/material/core/Dialog';
// import DialogActions from '@mui/material/core/DialogActions';
// import DialogContent from '@mui/material/core/DialogContent';
// import DialogContentText from '@mui/material/core/DialogContentText';
// import DialogTitle from '@mui/material/core/DialogTitle';

export default function SignUp(){

    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
     
    };

    return(
    <div className="HomeContainer" style={{marginBottom:'5rem'}}>
          <div >
                <img
                    src={Img}
                    style={{width:'15rem', marginTop:'2rem'}}
                    className="CardImage"
                    alt="An image of Leena Marathay"
                    />
            </div>
            <div className="CardTitle">
                Sign Up
            </div>
            <div className = "CardFormParent" >
                <div className="CardForm">
                    <div className="CardFormText" >
                        Full Name
                    </div>
                    <div>
                        <input className="CardTextInput" />
                    </div>
                </div>
                <div className="CardForm">
                    <div className="CardFormText" >
                        Phone Number
                    </div>
                    <div>
                        <input className="CardTextInput" />
                    </div>
                </div>
            </div>
            <div>
                <Link className="CardText" style={{fontSize:'20px'}} to="signUp" onClick={handleClickOpen}>
                or sign up with Email
                </Link>
            </div>
            {/* <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{"Message Recieved"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Thanks for your Message! We have sent a copy to your email.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Close
                      </Button>
                    </DialogActions>
            </Dialog> */}
    </div>
    )
}