import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import { Link, useLocation } from "react-router-dom";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Button from '@mui/material/Button';
import "../Home/Home.css"

export default function Subscriptions(){


    const location = useLocation()

    const [manage , setManage] = useState(false)
    const[data , setData] = useState([]);

    const {from} = location.state

    console.log('state', from)
    useEffect(()=> {
        if(from === 'design' ) {
            setManage(false)
        }
        if(from === 'subscriptions' ) {
            setManage(true)
        }
    }, [from === 'subscriptions' || from === 'design' ])
   
    useEffect(() => {
        axios.get("https://l7a9lqpcj0.execute-api.us-west-1.amazonaws.com/dev/api/v2/subscriptions")
        .then((res) => {
          console.log("response email", res.data.result)
          setData(res.data.result);
        }) 
    },[]);

    return(

        <div>
            {manage === false ? 

                <div className="DesginDropDown" >
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
                
                    <div className="DesginDropDown" style={{flex:'5', marginBottom:'5rem'}}>
                        <div>
                            <div className="CardTitle">
                            Subscriptions
                            </div>
                            <div className="CardText">
                            Your current plan includes
                            </div>
                            <div style={{border:'4px solid #F87F7F', padding:'5%', backgroundColor:'#FFF5F5', marginTop:'2rem',width:'85%'  }}>
                                <div className="CardTitle" style={{fontSize:"32px"}}> Monthly </div>
                                <div className="CardText" style={{fontSize:"24px"}}> Subscription </div>
                                <div style={{display:'flex', justifyContent:'center', alignItems:'center', borderBottom:"3px solid #F87F7F" }}>
                                    <div style={{fontSize:'96px'}}> $49 </div>  
                                    <div style={{marginTop:'2rem', fontWeight:'bold '}}> /monthly</div>
                                </div>
                                <div style={{marginTop:'2rem', fontWeight:'bold '}}>
                                4 designs per month
                                </div>
                                <button className="CardButton" style={{backgroundColor:'#F87F7F',width:'100%', border:'0px', height:'3rem', borderRadius:'0px'}}>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div style={{flex:'0.3'}}>

                        </div>
                        <div style={{margin:'2rem 0rem 0rem 3rem'}}>
                        <div className="CardText">
                            Billing and Payment
                        </div>
                        <div style={{display:'flex'}}>
                            <CreditCardIcon/>
                            <div style={{marginLeft:'1rem'}}> MasterCard ending ****0909 </div>
                        </div>
                        <div>
                                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                                    <CalendarTodayIcon/>
                                    <div style={{marginLeft:'1rem'}}>
                                        <div>US$49.00/mo </div>
                                        <div>Next payment on November 23, 2021</div>
                                        <div>Next design package on December 1, 2021</div>
                                        <div>Monthly plan, paid monthly</div>
                                        <Link to="/">View billing history</Link>
                                    </div>
                                </div>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-end', alignItems:'center', height:'60%'}}>
                            <Link className="DesignButton" to="/"> Edit billing and payment </Link>
                            <Link className="DesignButton" to="/manageSubscriptions"> Manage Subscriptions </Link>
                            {/* <button className="DesignButton"  onClick={()=> setManage(true)}> Manage Subscriptions  </button> */}
                        </div>
                        </div>
                    </div>
                </div>
             : 

            <div>
                <div className="DesginDropDown" >
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

                    <div>
                        <div className="DesginDropDown" style={{flex:'5',  justifyContent:'space-evenly', paddingBottom:'2rem', borderBottom:'2px solid black'}}>
                    
                        
                            <div style={{marginRight:'3rem'}}>
                                <div className="CardTitle">
                                Subscriptions
                                </div>
                                <div className="CardText">
                                Your current plan 
                            </div>
                            <div style={{display:'flex'}}>
                                <CreditCardIcon/>
                                <div style={{marginLeft:'1rem'}}> MasterCard ending ****0909 </div>
                            </div>
                            <div>
                                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                                    <CalendarTodayIcon/>
                                    <div style={{marginLeft:'1rem'}}>
                                        <div>US$49.00/mo </div>
                                        <div>Next payment on November 23, 2021</div>
                                        <div>Next design package on December 1, 2021</div>
                                        <div>Monthly plan, paid monthly</div>
                                        <Link to="/">View billing history</Link>
                                    </div>
                                </div>
                            </div>
                           
                            </div>

                            <div style={{border:'4px solid #F87F7F', padding:'5%', backgroundColor:'#FFF5F5', marginTop:'2rem',width:'auto'  }}>
                                    <div className="CardTitle" style={{fontSize:"32px"}}> Monthly </div>
                                    <div className="CardText" style={{fontSize:"24px"}}> Subscription </div>
                                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', borderBottom:"3px solid #F87F7F" }}>
                                        <div style={{fontSize:'96px'}}> $49 </div>  
                                        <div style={{marginTop:'2rem', fontWeight:'bold '}}> /monthly</div>
                                    </div>
                                    <div style={{marginTop:'2rem', fontWeight:'bold '}}>
                                    4 designs per month
                                    </div>
                                    <button className="CardButton" style={{backgroundColor:'#F87F7F',width:'100%', border:'0px', height:'3rem', borderRadius:'0px'}}>
                                        Subscribe
                                    </button>
                            </div>
                        </div>

                        <div className="CardText" style={{marginTop:'2rem'}}>
                        Select one of the plans below to switch to
                        </div>
                        <div style={{marginTop:'1rem' , fontWeight:'bold'}}> Instagram story and post packages: </div>


                        <div className="subscriptionGrid" >
                            {
                                data
                                .filter((service) =>   service.category === "Instagram" )
                                    .map(item => {
                                        return(
                                            <div style={{display:'flex'}}>
                                                <input type="radio" name="radAnswer" style={{height:'2rem',width:'2rem', border:'2px solid black'}}/>
                                                <div style={{border:'4px solid #F87F7F', backgroundColor:'#FFF5F5', padding:'5%', width:'50%', marginBottom:'5rem' }}>
                                                    <div className="CardTitle" style={{fontSize:"32px"}}> Monthly </div>
                                                    <div className="CardText" style={{fontSize:"24px"}}> Subscription </div>
                                                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', borderBottom:"3px solid #F87F7F" }}>
                                                        <div style={{fontSize:'96px'}}> {item.cost} </div>  
                                                        <div style={{marginTop:'2rem', fontWeight:'bold '}}> /monthly</div>
                                                    </div>
                                                    <div style={{marginTop:'2rem', fontWeight:'bold '}}>
                                                    {/* 4 designs per month */}
                                                    {item.description}
                                                    </div>
                                                    <button className="CardButton" style={{backgroundColor:'#F87F7F',width:'100%', border:'0px', height:'3rem', borderRadius:'0px'}}>
                                                        Subscribe
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                })
                            }
                        </div>

                        <div style={{marginTop:'1rem' , fontWeight:'bold'}}> Instagram story and post packages: </div>
                        
                        <div  className="subscriptionGrid" >
                            {
                                data
                                .filter((service) =>   service.category === "Facebook" )
                                    .map(item => {
                                        return(
                                            <div style={{display:'flex'}}>
                                                <input type="radio" name="radAnswer" style={{height:'2rem',width:'2rem', border:'2px solid black'}}/>
                                                <div style={{border:'4px solid #F99D1C',backgroundColor:'#FDEBD0', padding:'5%', width:'50%', marginBottom:'5rem'  }}>
                                                    <div className="CardTitle" style={{fontSize:"32px"}}> Monthly </div>
                                                    <div className="CardText" style={{fontSize:"24px"}}> Subscription </div>
                                                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', borderBottom:"3px solid #F99D1C" }}>
                                                        <div style={{fontSize:'96px'}}> {item.cost} </div>  
                                                        <div style={{marginTop:'2rem', fontWeight:'bold '}}> /monthly</div>
                                                    </div>
                                                    <div style={{marginTop:'2rem', fontWeight:'bold '}}>
                                                    {/* 4 designs per month */}

                                                    {item.description}
                                                    </div>
                                                    <button className="CardButton" style={{backgroundColor:'#F99D1C',width:'100%', border:'0px', height:'3rem', borderRadius:'0px'}}>
                                                        Subscribe
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                })
                            }
                        </div>

                        <div>
                            <div className="DesginDropDown" style={{justifyContent:'space-evenly', marginBottom:'3rem'}}>
                                <Button variant='outlined' className="DesignButton" > Cancel </Button>
                                <Button  style={{color:'white', backgroundColor:"#536DFE"}} className="DesignButton"  onClick={()=> setManage(false)}> Switch to Selected Plan </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
    )
}