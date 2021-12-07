import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Img from "../Assets/Images/Home-BizBuz.svg"
import SF from "../Assets/Images/SF.png"
import Polka from "../Assets/Images/Polka.png"
import Craving from "../Assets/Images/Craving.png"
import Fun from "../Assets/Images/Fun-Fact.png"
import SF2 from "../Assets/Images/SF-2.png"
import Nitya from "../Assets/Images/Nitya.png"
import "../Home/Home.css"

export default function Home(){

    // https://l7a9lqpcj0.execute-api.us-west-1.amazonaws.com/dev/api/v2/subscriptions
   // const data = ["49" ,"99" ,"199"]
  // const [subscriptions, setsubscriptions] = useState([]);
    const[data , setData] = useState([]);
   useEffect(() => {
       axios.get("https://l7a9lqpcj0.execute-api.us-west-1.amazonaws.com/dev/api/v2/subscriptions")
       .then((res) => {
         console.log("response email", res.data.result)
         setData(res.data.result);
       }) 
   },[]);




//    const [data, setData] = useState([]);

//     useEffect(() => {
//         // axios.get("https://l7a9lqpcj0.execute-api.us-west-1.amazonaws.com/dev/api/v2/subscriptions")
//         axios.get("https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/treatments")
//         .then((res) => {
//           console.log("response email", res)
//          // var temp = [];
//          // for(var i=0;i<res.data.result.length();i++){
//            // if(res.data.result[i].category === "Facebook")
//             setData(res.data.result);
//         //  }
//          // setData(temp)
//         })
//         .catch((err) => {
//             console.log("error", err)
//         });
//     },[]);

  console.log('sub',data)

    return(
        <div className="HomeContainer" >
            <div className="Card" style={{borderBottom:'4px solid #F84E1A'}}>
                <div className="CardGrid" >
                    <div >
                        <img
                            src={Img}
                            className="CardImage"
                            alt="An image of Leena Marathay"
                            />
                    </div>
                    <div style={{ marginLeft:'5rem'}}>
                        <div className="CardTitle">Spend more time managing your business and less time managing your posts</div>  
                        <div className="CardText">
                            <p>You manage your biz, we create the buz</p>
                        </div>
                        <button className="CardButton">
                            Sign Up
                        </button>
                    </div>
                  
                </div>
            </div>

            <div className="Card">
                <div className="CardGrid" style={{ gridTemplateColumns:'repeat(1, auto)'}}>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                        <div className="CardTitle" style={{textAlign:'center'}}>Subscribe to a content package to get ready-made content in your inbox</div>  
                        <button className="CardButton">
                            View All Packages
                        </button>
                    </div>
                  
                </div>
            </div>

            <div className="Card" style={{backgroundColor:'#FFF5F5', paddingBottom:'2rem'}}>
                <div className="CardGrid" style={{ gridTemplateColumns:'repeat(1, auto)', paddingTop:'2%'}}>
                    <div className="CardTitle" style={{textAlign:'center', color:'#F87F7F'}}>Instagram story and post package</div>                    
             
                    <div style={{display:'flex', justifyContent:'center',alignItems:'flex-start', borderBottom:'5px solid #F87F7F', marginTop:'2rem', paddingBottom:'5rem'}}>
                        <img src={SF} className="CardImage"/>
                        <img src={Polka} className="CardImage"/>
                        <div>
                        <img src={Craving} className="CardImage" style={{position:'absolute', margin:'0rem 0rem 0rem 2rem'}}/>
                        <img src={Fun} className="CardImage" style={{marginLeft:'7rem'}}/>
                        </div>
                    </div>

                </div>

                <div className="PriceTile">
                {
                    data
                    .filter((service) =>   service.category === "Instagram" )
                        .map(item => {
                            return(
                                <div style={{border:'4px solid #F87F7F', padding:'10%'  }}>
                                    <div className="CardTitle" style={{fontSize:"32px"}}> Monthly </div>
                                    <div className="CardText" style={{fontSize:"24px"}}> Subscription </div>
                                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', borderBottom:"3px solid #F87F7F" }}>
                                        <div style={{fontSize:'96px'}}> {item.cost} </div>  
                                        <div style={{marginTop:'2rem', fontWeight:'bold '}}> /monthly</div>
                                    </div>
                                    <div style={{marginTop:'2rem', fontWeight:'bold ',height:'5rem'}}>
                                    {/* 4 designs per month */}
                                    {item.description}
                                    </div>
                                    <Link className="CardButton" to='/packages' state={{ details: item }} style={{textDecoration:'none',backgroundColor:'#F87F7F',width:'100%', border:'0px', height:'3rem', borderRadius:'0px'}}>
                                        Subscribe
                                    </Link>
                                </div>
                              )
                            })
                        }
                </div>
            </div>


            <div className="Card" style={{backgroundColor:'#FFEBD0', paddingBottom:'5rem'}}>
                <div className="CardGrid" style={{ gridTemplateColumns:'repeat(1, auto)', paddingTop:'2%'}}>
                    <div className="CardTitle" style={{textAlign:'center', color:'#F99D1C'}}>Facebook and NextDoor</div>                    
             
                    <div style={{display:'flex', justifyContent:'center',alignItems:'flex-start', borderBottom:'5px solid #F99D1C', marginTop:'2rem', paddingBottom:'5rem'}}>
                        <img src={SF2} className="CardImage"/>
                        <img src={Nitya} style={{marginLeft:'2rem'}} className="CardImage"/>
                    </div>

                </div>

                <div  className="PriceTile">
                    {
                        data
                        .filter((service) =>   service.category === "Facebook" )
                        .map(item => {
                            return(
                                <div style={{border:'4px solid #F99D1C', padding:'10%'  }}>
                                    <div className="CardTitle" style={{fontSize:"32px"}}> Monthly </div>
                                    <div className="CardText" style={{fontSize:"24px"}}> Subscription </div>
                                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', borderBottom:"3px solid #F99D1C" }}>
                                        <div style={{fontSize:'96px'}}> {item.cost} </div>  
                                        <div style={{marginTop:'2rem', fontWeight:'bold '}}> /monthly</div>
                                    </div>
                                    <div style={{marginTop:'2rem', fontWeight:'bold',height:'5rem'}}>
                                    {/* 4 designs per month */}
                                    {item.description}
                                    </div>
                                    <Link to='/packages' state={{ details: item }}  className="CardButton" style={{textDecoration:'none', backgroundColor:'#F99D1C',width:'100%', border:'0px', height:'3rem', borderRadius:'0px'}}>
                                        Subscribe
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}