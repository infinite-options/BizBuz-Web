import React, { useEffect, useState } from "react";
import axios from "axios";

//import StripeElement from "./StripeElement";
import { loadStripe } from "@stripe/stripe-js";
import { useElements, useStripe, CardElement, Elements } from "@stripe/react-stripe-js";
import StripeElement from "./StripeElement";
import { Link, useLocation } from "react-router-dom";

//import moment from 'moment'
// import Img from "../Assets/Images/Home-BizBuz.svg"
// import SF from "../Assets/Images/SF.png"
// import Polka from "../Assets/Images/Polka.png"
// import Craving from "../Assets/Images/Craving.png"
// import Fun from "../Assets/Images/Fun-Fact.png"
// import SF2 from "../Assets/Images/SF-2.png"
// import Nitya from "../Assets/Images/Nitya.png"
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';

import "../Home/Home.css"
import userEvent from "@testing-library/user-event";

export default function Packages(){

    const location = useLocation()

    // const from = location.state.details

    // console.log("details",location.state.details)

    const [selectButton , setSelectButton] = useState(false);
    const [infoSubmitted, setInfoSubmitted] = useState(false);
    const [useTestKeys, setUseTestKeys] = useState(true);

    const [brandName, setBrandName] = useState("");
    const [website, setWebsite] = useState("");
    const [brandMotto, setBrandMotto] = useState("");
    //const [notes, setNotes] = useState("");
    const [notes, setNotes] = useState("");

    const[brand_uid, setBrand_uid] = useState("");
    const[customer_uid, setCustomer_uid] = useState("");
    const[brandError, setBrandError] = useState(false);

    const[name, setName] = useState("")
    const[phone, setPhone] = useState("")
    const[email, setEmail] = useState("")
    const[message, setMessage] = useState("")


    const [stripePromise, setStripePromise] = useState(null);



    // function formatTime(date, time) {
    //     if (time == null) {
    //       return "?";
    //     } else {
    //       var newDate = new Date(date + " " + time);
    //       var hours = newDate.getHours();
    //       var minutes = newDate.getMinutes();
    //       var ampm = hours >= 12 ? "pm" : "am";
    //       hours = hours % 12;
    //       hours = hours ? hours : 12; // the hour '0' should be '12'
    //       minutes = minutes < 10 ? "0" + minutes : minutes;
    //       var strTime = hours + ":" + minutes + " " + ampm;
    //       return strTime;
    //     }
    //   }

    // function toggleKeys() {
    //     setUseTestKeys(!useTestKeys);
    //     setInfoSubmitted(true);
    
    //     if (notes === "NITYATEST") {
    //       // Fetch public key
    //       console.log("fetching public key");
    //       axios
    //         .get(
    //           "https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/stripe_key/NITYATEST"
    //         )
    //         .then((result) => {
    //           console.log(
    //             "(1 PaymentDetails) Stripe-key then result (1): " +
    //               JSON.stringify(result)
    //           );
    
    //           let tempStripePromise = loadStripe(result.data.publicKey);
    
    //           console.log("(1 PaymentDetails) setting state with stripePromise");
    
    //           setStripePromise(tempStripePromise);
    
    //           console.log(tempStripePromise);
    //           console.log("(1 PaymentDetails) stripePromise set!");
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //           if (err.response) {
    //             console.log(
    //               "(1 PaymentDetails) error: " + JSON.stringify(err.response)
    //             );
    //           }
    //         });
    //     } else {
    //       // Fetch public key live
    //       console.log("fetching public key live");
    //       axios
    //         .get(
    //           "https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/stripe_key/NITYA"
    //         )
    //         .then((result) => {
    //           console.log(
    //             "(2 PaymentDetails) Stripe-key then result (1): " +
    //               JSON.stringify(result)
    //           );
    
    //           let tempStripePromise = loadStripe(result.data.publicKey);
    
    //           console.log("(2 PaymentDetails) setting state with stripePromise");
    
    //           console.log(tempStripePromise);
    //           setStripePromise(tempStripePromise);
    
    //           console.log("(2 PaymentDetails) stripePromise set!");
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //           if (err.response) {
    //             console.log(
    //               "(2 PaymentDetails) error: " + JSON.stringify(err.response)
    //             );
    //           }
    //         });
    //     }
    //   }

    function handleClickButton(){
        setSelectButton(!selectButton)

        console.log("brandName",brandName, brandMotto)

        if(brandName!= ""){
            axios.post("https://l7a9lqpcj0.execute-api.us-west-1.amazonaws.com/dev/api/v2/brand", {
            
            brand_uid:"",
            customer_uid: "",
            brand_pur_id: "",
            brand_name: brandName,
            website: website,
            brand_motto: brandMotto,
            brand_logo_w: "",
            brand_logo_b: "",
            brand_logo_color: "",
            brand_hex_1: "",
            brand_hex_2: "",
            brand_hex_3: ""
            }
        ).then((res) => {
            console.log("brand output", res.data)
            setBrand_uid(res.data.brand_uid)
        })
        }else{
            alert("Enter Brand Name")
            setBrandError(true)
        }


    }

    var date = new Date()
   

    function dateFormat2 (d) {


        if(d>11){
            d = parseInt(d) - 12;
        }
        console.log('date',d)

        const map1 = new Map()
        map1.set( "0", "Jan")
        map1.set( "1", "Feb")
        map1.set( "2", "Mar")
        map1.set( "3", "Apr")
        map1.set( "4", "May")
        map1.set( "5", "Jun")
        map1.set( "6", "Jul")
        map1.set( "7", "Aug")
        map1.set( "8", "Sep")
        map1.set( "9", "Oct")
        map1.set( "10", "Nov")
        map1.set( "11", "Dec")
   
        return(map1.get(d.toString()))
    }

   function handlePayment() {

        axios.post("https://l7a9lqpcj0.execute-api.us-west-1.amazonaws.com/dev/api/v2/createAccount", {
        
        brand_uid: brand_uid,
        customer_uid: customer_uid,
        name: name,
        email: email,
        phone_number: phone,
        message: message

    }
    ).then((result) => {
        setCustomer_uid(result.data.customer_uid)
        console.log(
          "(1 PaymentDetails) Stripe-key then result (1): " +
            JSON.stringify(result)
           
        );

        let tempStripePromise = loadStripe(result.data.key);

        console.log("(1 PaymentDetails) setting state with stripePromise");

        setStripePromise(tempStripePromise);

        console.log(tempStripePromise);
        console.log("(1 PaymentDetails) stripePromise set!");
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          console.log(
            "(1 PaymentDetails) error: " + JSON.stringify(err.response)
          );
        }
      });
   }

   const items = [
    {
      qty: "9",
      name: location.state.details.title,
      price: location.state.details.cost,
      subscription_uid:location.state.details.subscription_uid,
    },
  ];
    
    return(
        <div style={{marginBottom:'10rem'}}>
            <div className="CardGridPackage">
                <div>
                    <div style={{border: location.state.details.category === "Instagram" ? '4px solid #F87F7F' : '4px solid #F99D1C',backgroundColor: location.state.details.category === "Instagram" ?'#FFF5F5': '#FFEBD0' , padding:'10%' ,width:'15rem' }}>
                        <div className="CardTitle" style={{fontSize:"32px"}}> Monthly </div>
                        <div className="CardText" style={{fontSize:"24px"}}> Subscription </div>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', borderBottom: location.state.details.category === "Instagram" ? "3px solid #F87F7F": "3px solid #F99D1C" }}>
                            <div style={{fontSize:'96px'}}> {location.state.details.cost} </div>  
                            <div style={{marginTop:'2rem', fontWeight:'bold'}}> /monthly</div>
                        </div>
                        <div style={{marginTop:'2rem', fontWeight:'bold '}}>
                        {location.state.details.description}
                        </div>
                        <button className="CardButton" style={{backgroundColor: location.state.details.category === "Instagram" ?'#F87F7F': '#F99D1C',width:'100%', border:'0px', height:'3rem', borderRadius:'0px'}}>
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="CardText" style={{alignSelf:'center',marginLeft:'2rem'}}>
                    We will provide you with 2 designs per month, that is, one story and one post design per month for your brand.
                </div>
            </div>
            <div >
                <div  className="CardText" style={{fontSize:"26px", textAlign:'center'}}>Please give us some information about you and your brand to deliver the designs:</div>
            
                <div className = "CardFormParent" >
                    <div className="CardForm">
                        <div className="CardFormText" >
                            Brand Name
                        </div>
                        <div>
                            <input type="text" required="required" pattern="[A-Za-z0-9]{1,20}" onChange={(e)=> setBrandName(e.target.value)} style={{border: brandError ? '2px solid red': ''}}  className="CardTextInput" />
                        </div>
                    </div>
                    <div className="CardForm">
                        <div className="CardFormText">
                            Website
                        </div>
                        <div>
                            <input onChange={(e)=> setWebsite(e.target.value)} className="CardTextInput" />
                        </div>
                    </div>
                    <div className="CardForm">
                        <div className="CardFormText">
                        Brand motto
                        </div>
                        <div>
                            <textarea placeholder="  Tell us what your brand stands for.." onChange={(e)=> setBrandMotto(e.target.value)} style={{height:'7rem'}} className="CardTextInput" />
                        </div>
                    </div>
                    <div className="CardForm">
                        <div className="CardFormText">
                        Upload Brand Logo(s)
                        </div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <div >
                                <input placeholder="    Black logo" className="CardTextInput" />
                            </div>
                            <div>
                                <input placeholder="    White logo" className="CardTextInput" style={{marginTop:'1rem'}}/>
                            </div>
                            <div>
                                <input placeholder="    Colored logo" className="CardTextInput" style={{marginTop:'1rem'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="CardForm">
                        <div className="CardFormText">
                        Enter Brand Color hex Code
                        </div>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <div >
                                <input placeholder="    Brand Color 1 (ex: #717171)" className="CardTextInput" />
                            </div>
                            <div>
                                <input placeholder="    Brand Color 2 (ex: #717172)" className="CardTextInput" style={{marginTop:'1rem'}}/>
                            </div>
                            <div>
                                <input placeholder="    Brand Color 3 (ex: #536DFE)" className="CardTextInput" style={{marginTop:'1rem'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="CardText" style={{textAlign:'center'}}>
                    When would you like to receive your first design package?
                </div>
                <div style={{display:'flex', justifyContent:'space-evenly', marginTop:'2rem'}}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <input type="radio" onClick={handleClickButton } style={{height:'2rem',width:'2rem', border:'2px solid black'}}/>
                        <div className="CardText" style={{fontSize:'20px',textAlign:'center'}}>{date.getUTCDate() > 8 && date.getUTCDate() < 22 ? `1st ${ dateFormat2( date.getUTCMonth()+1) }`  : `15th ${ dateFormat2( date.getUTCMonth()+1)}`}</div>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <input type="radio"  onClick={handleClickButton } style={{height:'2rem',width:'2rem', border:'2px solid black'}}/>
                        <div className="CardText" style={{fontSize:'20px'}}> {date.getUTCDate() > 8 && date.getUTCDate() < 22 ? `15th ${ dateFormat2( date.getUTCMonth()+1)}`  : `1st ${ dateFormat2( date.getUTCMonth()+2) }`}</div>
                    </div>
                </div>
                
            </div>
            <div hidden={!selectButton}>
                <div>
                    <div className = "CardFormParent" >
                        <div className="CardForm">
                            <div className="CardFormText" >
                                Account Details:
                            </div>
                        </div>
                        <div className="CardForm">
                            <div className="CardFormText" >
                                Full Name
                            </div>
                            <div>
                                <input onChange={(e)=> setName(e.target.value)} className="CardTextInput" />
                            </div>
                        </div>
                        <div className="CardForm">
                            <div className="CardFormText" >
                                Email Address
                            </div>
                            <div>
                                <input onChange={(e)=> setEmail(e.target.value)} className="CardTextInput" />
                            </div>
                        </div>
                        <div className="CardForm">
                            <div className="CardFormText">
                                Phone Number
                            </div>
                            <div>
                                <input onChange={(e)=> setPhone(e.target.value)} className="CardTextInput" />
                            </div>
                        </div>
                        <div className="CardForm">
                            <div className="CardFormText" >
                            Message
                            </div>
                            <div>
                                <input  onChange={(e)=> setMessage(e.target.value)} className="CardTextInput"/>
                            </div>
                        </div>
                        <div className="CardForm">
                            <div>
                            </div>
                            <StripeElement
                                stripePromise={stripePromise}
                                customerID={customer_uid}
                                items={items}
                                infoSubmitted=""
                                fName=""
                                email=""
                                phoneNum=""
                                date=""
                                selectedTime=""
                                purchaseDate=""
                                cost="5500"
                                duration=""
                                image_url=""
                            />
                            </div>
                    </div>
               
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div
                    hidden={!infoSubmitted}
                    style={{
                        background: "black",
                    }}
                    >
                 
                  
                    {/* <Elements stripe={stripePromise}>
                         <CardElement
                            elementRef={(c) => (this._element = c)}
                            // className={props.classes.element}
                            // options={options}
                            style={{
                                backgroundColor: "white",
                                padding: "10px",
                                boxSizing: "border-box",
                                borderRadius: "20px",
                                fontColor: "#52330D",
                                fontSize: "20px",
                                margin: "5px auto",
                                border: "2px solid #52330D",
                                width: "100%",
                                fontFamily: "AvenirHeavy",
                                outline: "none",
                            }}
                        />
                    </Elements> */}
                    {/* <StripeElement
                        stripePromise={stripePromise}
                        treatmentID=""
                        treatmentName=""
                        notes=""
                        infoSubmitted=""
                        fName=""
                        email=""
                        phoneNum=""
                        date=""
                        selectedTime=""
                        purchaseDate=""
                        cost=""
                        duration=""
                        image_url=""
                    /> */}
                    </div>
                        <button
                        hidden={infoSubmitted}
                        onClick={handlePayment}
                        className="CardButton" 
                        style={{ marginBottom:'2rem'}}>
                            Enter Payment Details
                        </button>
            </div>
            </div>
            
        </div>
    )

}