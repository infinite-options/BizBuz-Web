import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import "../Home/Home.css"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ManageSubscriptions(){
    const [open, setOpen] = React.useState(false);

    
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return(
        <div className="CardGrid" style={{gridTemplateColumns:'repeat(1, auto)' }}>
            <div style={{backgroundColor:'#EAEDFF', padding:'5%', height:'60vh'}}>
                <div className="CardTitle">
                    Manage Subscriptions
                </div>
                <div className="ManageSubscriptionGrid">
                    <div>
                        <div className="CardText"> Your current plan includes </div>
                        <div>US$99.00/month</div>
                        <div> 2 designs per month 1 story, 1 post</div>
                    </div>

                    <div>
                        <div className="CardText">Find another subscription plan</div>
                        <div>Find the plan that works best for your needs. You can switch to another plan easily. The changes will be reflected in your next billing cycle.</div>
                    
                        <div className="CardText" style={{marginTop:'2rem'}}> Cancel Subscription</div>
                        <div>End your service to stop receiving the design packages.</div>
                    </div>
                    <div>
                    <Link className="DesignButton" to="/subscriptions" state={{ from: 'subscriptions' }}> Change your subscription </Link>
                    <button className="DesignButton"  onClick={handleClickOpen}> Cancel your subscription </button>
                    </div>
                </div>
            </div>
           
             <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth='md'
                  >
                    <DialogTitle style={{backgroundColor:'#EAEDFF', fontSize:'42px', fontWeight:'bold'}}  className="CardTitle"> We’re sorry to see you go!</DialogTitle>
                    <DialogContent style={{backgroundColor:'#EAEDFF'}}>
                      <DialogContentText id="alert-dialog-description">
                        <div style={{fontWeight:'bold', color:'black'}} >Your monthly subscription is paid until December 15, 2021. You will receive your design packages due until then.</div>
                        <div style={{marginTop:'2rem'}}>After December 15, 2021, you will always have access to your design packages on the bizbuz account and you can reactivate your subscription anytime. Are you sure you want to cancel your subscription?</div>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions style={{backgroundColor:'#EAEDFF'}}>
                      <Button variant='outlined' onClick={handleClose} color="primary">
                      No, I don’t want to cancel
                      </Button>
                      <Button onClick={handleClose} style={{color:'white', backgroundColor:"#536DFE"}}>
                      Cancel subscription
                      </Button>
                    </DialogActions>
            </Dialog>

        </div>
    )
}