import React, { useEffect, useState } from "react";
import axios from "axios";

import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

import "../Home/Home.css"
import userEvent from "@testing-library/user-event";

export default function BrandDetails(){



    const [selectButton , setSelectButton] = useState(false);
    const [infoSubmitted, setInfoSubmitted] = useState(false);
    const [useTestKeys, setUseTestKeys] = useState(true);

    const [brandName, setBrandName] = useState("BrandName");
    const [website, setWebsite] = useState("Website");
    const [brandMotto, setBrandMotto] = useState("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et");
    //const [notes, setNotes] = useState("");
    const [notes, setNotes] = useState("");

    const[brand_uid, setBrand_uid] = useState("");
    const[customer_uid, setCustomer_uid] = useState("");
    const[brandError, setBrandError] = useState(false);

    const[name, setName] = useState("")
    const[phone, setPhone] = useState("12415233")
    const[email, setEmail] = useState("Ajieth@gmail.com")
    const[message, setMessage] = useState("Hello")

    const[editname, seteditName] = useState("")
    const[editphone, seteditPhone] = useState("")
    const[editemail, seteditEmail] = useState("")
    const[editmessage, seteditMessage] = useState("")

    const [editBrandName , setEditBrandName] = useState(false);
    const [editWebsite , setEditWebsite] = useState(false);
    const [editbrandMotto , setEditBrandMotto] = useState(false);
    const [editBrandColor1 , setEditBrandColor1] = useState(false);
    const [editBrandColor2 , setEditBrandColor2] = useState(false);
    const [editBrandColor3 , setEditBrandColor3] = useState(false);

    const [stripePromise, setStripePromise] = useState(null);

    useEffect(()=>{
        axios.get("https://l7a9lqpcj0.execute-api.us-west-1.amazonaws.com/dev/api/v2/currentSubscriptions?customer_uid=100-000001")
            .then((res)=> {
                console.log("response",res.data[0])
            })
    },[])

    function handleClickButton(){
        setSelectButton(!selectButton)

        // console.log("brandName",brandName, brandMotto)

        // if(brandName!= ""){
        //     axios.post("https://l7a9lqpcj0.execute-api.us-west-1.amazonaws.com/dev/api/v2/brand", {
            
        //     brand_uid:"",
        //     customer_uid: "",
        //     brand_pur_id: "",
        //     brand_name: brandName,
        //     website: website,
        //     brand_motto: brandMotto,
        //     brand_logo_w: "",
        //     brand_logo_b: "",
        //     brand_logo_color: "",
        //     brand_hex_1: "",
        //     brand_hex_2: "",
        //     brand_hex_3: ""
        //     }
        // ).then((res) => {
        //     console.log("brand output", res.data)
        //     setBrand_uid(res.data.brand_uid)
        // })
        // }else{
        //     alert("Enter Brand Name")
        //     setBrandError(true)
        // }


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
    
    return(
        <div style={{marginBottom:'10rem'}}>
            <div className="CardGridPackage">
                <div>
                    <div style={{border:'4px solid #F87F7F', padding:'5%'  }}>
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
                <div className="CardText" style={{alignSelf:'center'}}>
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
                        <div style={{flex:'2'}}>
                            <div  hidden={editBrandName} >{brandName}</div>
                            <input  hidden={!editBrandName} value={brandName} type="text" required="required" pattern="[A-Za-z0-9]{1,20}" onChange={(e)=> setBrandName(e.target.value)} style={{border: brandError ? '2px solid red': ''}}  className="CardTextInput" />
                        </div>
                        <Button onClick={()=> setEditBrandName(!editBrandName)} style={{textTransform:'none', textDecoration:'underline'}}>
                            Edit
                        </Button>
                    </div>
                    <div className="CardForm">
                        <div className="CardFormText">
                            Website
                        </div>  
                        <div style={{flex:'2'}}>
                            <div  hidden={editWebsite} >{website}</div>
                            <input  hidden={!editWebsite} onChange={(e)=> setWebsite(e.target.value)} className="CardTextInput" />
                        </div>
                        <Button onClick={()=> setEditWebsite(!editWebsite)} style={{textTransform:'none', textDecoration:'underline'}}>
                            Edit
                        </Button>
                    </div>
                    <div className="CardForm">
                        <div className="CardFormText">
                        Brand motto
                        </div>
                        <div style={{flex:'2'}} >
                            <div  hidden={editbrandMotto} style={{textAlign:'left'}} >{brandMotto}</div>
                            <textarea hidden={!editbrandMotto} value={brandMotto} placeholder="  Tell us what your brand stands for.." onChange={(e)=> setBrandMotto(e.target.value)} style={{height:'7rem'}} className="CardTextInput" />
                        </div>
                        <Button onClick={()=> setEditBrandMotto(!editbrandMotto)} style={{textTransform:'none', textDecoration:'underline'}}>
                            Edit
                        </Button>
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
                        <div style={{flex:'2.5'}} >
                            <div style={{display:'flex', justifyContent:'space-between',margin:'1rem 0rem 0rem 1rem'}}>
                                <div >
                                    <div  hidden={editBrandColor1} >{website}</div>
                                    <input  hidden={!editBrandColor1} onChange={(e)=> setWebsite(e.target.value)} className="CardTextInput" />
                                </div>
                                <Button onClick={()=> setEditBrandColor1(!editBrandColor1)} style={{textTransform:'none', textDecoration:'underline'}}>
                                    Edit
                                </Button>
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between',margin:'1rem 0rem 0rem 1rem'}}>
                                <div >
                                    <div  hidden={editBrandColor2} >{website}</div>
                                    <input  hidden={!editBrandColor2} onChange={(e)=> setWebsite(e.target.value)} className="CardTextInput" />
                                </div>
                                <Button onClick={()=> setEditBrandColor2(!editBrandColor2)} style={{textTransform:'none', textDecoration:'underline'}}>
                                    Edit
                                </Button>
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between',margin:'1rem 0rem 0rem 1rem'}}>
                                <div >
                                    <div  hidden={editBrandColor3} >{website}</div>
                                    <input  hidden={!editBrandColor3} onChange={(e)=> setWebsite(e.target.value)} className="CardTextInput" />
                                </div>
                                <Button onClick={()=> setEditBrandColor3(!editBrandColor3)} style={{textTransform:'none', textDecoration:'underline'}}>
                                    Edit
                                </Button>
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
            <div>
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
                            <div style={{flex:'2'}}>
                            <div  hidden={editname} >{name}</div>
                            <input  hidden={!editname} value={name}onChange={(e)=> setName(e.target.value)}  className="CardTextInput" />
                            </div>
                            <Button onClick={()=> seteditName(!editname)} style={{textTransform:'none', textDecoration:'underline'}}>
                                Edit
                            </Button>
                        </div>
                        <div className="CardForm">
                            <div className="CardFormText" >
                                Email Address
                            </div>
                            <div style={{flex:'2'}}>
                            <div  hidden={editemail} >{email}</div>
                            <input  hidden={!editemail} value={email} onChange={(e)=> setEmail(e.target.value)}  className="CardTextInput" />
                            </div>
                            <Button onClick={()=> seteditEmail(!editemail)} style={{textTransform:'none', textDecoration:'underline'}}>
                                Edit
                            </Button>
                        </div>
                        <div className="CardForm">
                            <div className="CardFormText">
                                Phone Number
                            </div>
                            <div style={{flex:'2'}}>
                            <div  hidden={editphone} >{phone}</div>
                            <input  hidden={!editphone} value={phone}onChange={(e)=> setPhone(e.target.value)}  className="CardTextInput" />
                            </div>
                            <Button onClick={()=> seteditPhone(!editphone)} style={{textTransform:'none', textDecoration:'underline'}}>
                                Edit
                            </Button>
                        </div>
                        <div className="CardForm">
                            <div className="CardFormText" >
                            Message
                            </div>
                            <div style={{flex:'2'}}>
                            <div  hidden={editmessage} >{message}</div>
                            <input  hidden={!editmessage} value={message}onChange={(e)=> setMessage(e.target.value)}  className="CardTextInput" />
                            </div>
                            <Button onClick={()=> seteditMessage(!editmessage)} style={{textTransform:'none', textDecoration:'underline'}}>
                                Edit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}