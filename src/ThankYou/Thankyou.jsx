import React, { useEffect, useState } from "react";
import axios from "axios";
//import Grid from ' @mui/material/core/Grid';


import Calendar from "react-calendar";
import "./calendar.css";
import "../Home/Home.css"

export default function ThankYou(){

    const [date, setDate] = useState(new Date());

    const [timeSlots, setTimeSlots] = useState([]);
    const [dateHasBeenChanged, setDateHasBeenChanged] = useState(true);
    const [duration, setDuration] = useState(null);
    const [buttonSelect, setButtonSelect] = useState(false);
    const [timeSelected, setTimeSelected] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);
    const [apiDateString, setApiDateString] = useState(null);



      const dateChange = (date) => {
   
        console.log('date',date)
       // setDate(date);
        dateStringChange(date);
        // setTimeSelected(true);
        // if (timeSelected === true) {
        //   setTimeSelected(false);
        // }
      };

      
    const dateStringChange = (date) => {
    //  setDateString(dateFormat1(date));
        setApiDateString(dateFormat3(date));
        console.log("apidate", apiDateString)
    //  setDateString1(dateFormat2(date));
        setDateHasBeenChanged(!dateHasBeenChanged);
    };

    const dateFormat3 = (date) => {
        return (
        date.getFullYear() +
        "-" +
        doubleDigitMonth(date) +
        "-" +
        doubleDigitDay(date)
        );
    };

    
    const doubleDigitMonth = (date) => {
        let str = "00" + (date.getMonth() + 1);
        return str.substring(str.length - 2);
    };

    const doubleDigitDay = (date) => {
        let str = "00" + date.getDate();
        return str.substring(str.length - 2);
    };

      function selectApptTime(element) {
        setSelectedTime(element);
        setTimeSelected(true);
        setButtonSelect(true)
      }

    
  function formatTime(date, time) {
    if (time == null) {
      return "?";
    } else {
      // time = time.split(":");
      // // fetch
      // var hours = Number(time[0]);
      // var minutes = Number(time[1]);
      // var seconds = Number(time[2]);

      // // calculate
      // var strTime;

      // if (hours > 0 && hours <= 12) {
      //   strTime = "" + hours;
      // } else if (hours > 12) {
      //   strTime = "" + (hours - 12);
      // } else if (hours == 0) {
      //   strTime = "12";
      // }

      // strTime += minutes < 10 ? ":0" + minutes : ":" + minutes; // get minutes
      // strTime += seconds < 10 ? ":0" + seconds : ":" + seconds; // get seconds
      // strTime += hours >= 12 ? " P.M." : " A.M."; // get AM/PM

      var newDate = new Date(date + " " + time);
      var hours = newDate.getHours();
      var minutes = newDate.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    }
  }


  
  useEffect(() => {
      axios
        .get(
          "https://l7a9lqpcj0.execute-api.us-west-1.amazonaws.com/dev/api/v2/calendar/" +
            apiDateString 
        )
        .then((res) => {
          console.log("This is the information we got" + res);
          setTimeSlots(res.data);
          console.log("This is the information we got", timeSlots);
        });
  },[dateHasBeenChanged]);

  function renderAvailableApptsVertical() {
      console.log("timeSlots", timeSlots)
    return (
      <div style={{display:'grid', gridTemplateColumns:"repeat(3,auto)", gridColumnGap:'5%',gridRowGap:'5%'}}>
      {timeSlots.map((element) => (
        <button
         className="CalendarTimeButton"
          onClick={() => selectApptTime(element.appt_start)}
        >
          {formatTime(apiDateString, element.appt_start)}
        </button>
    ))}
    </div>
    )
  }

    return(
        <div>
            <div  className="HomeContainer" style={{backgroundColor:'#FCF621'}}>
                <div className="CardGrid" style={{gridTemplateColumns:'repeat(1,auto)', marginBottom:'22rem'}}>
                    <div className="CardTitle" style={{textAlign:'center'}}> Thank you! </div>
                    <div className="CardText"  style={{textAlign:'center', marginTop:'4rem'}}>
                    Thank you for subscribing for the Instagram plan.
                    Our team will get in touch with you if they need more information regarding your brand. 
                    Keep an eye out for designs from us. You will receive your 2 designs on the 1st of every month.
                    </div>
                    <div className="CardText"  style={{textAlign:'center', marginTop:'2rem'}}>
                    If you have any questions, feel free to email us at Info@bizbuz.design
                    </div>
                    <div className="CardTitle" style={{textAlign:'center', marginTop:'4rem'}}>
                    Find a date and time for your 25-min consultation
                    </div>
                    {/* <div style={{display:'flex', justifyContent:'center', marginTop:'2rem'}}> */}
                    <div className="CardForm" style={{justifyContent:'center', alignItems:'center'}}>

                    {/* https://l7a9lqpcj0.execute-api.us-west-1.amazonaws.com/dev/api/v2/calendar/2021-11-19 */}
                    {/* https://l7a9lqpcj0.execute-api.us-west-1.amazonaws.com/dev/api/v2/calendar/2021-11-19
http://localhost:4000/api/v2/brand
{
    "brand_uid": "190-000001",
    "customer_uid": "100-000057",
    "brand_pur_id": "400-000001",
    "brand_name": "Infinite Options",
    "website": "www.infiniteoptions.com",
    "brand_motto": "practice makes perfect",
    "brand_logo_w": "",
    "brand_logo_b": "",
    "brand_logo_color": "",
    "brand_hex_1": "",
    "brand_hex_2": "",
    "brand_hex_3": ""
} */}
                    <Calendar
                        calendarType="US"
                        onClickDay={dateChange}
                        value={date}
                    // minDate={minDate}
                        next2Label={null}
                        prev2Label={null}
                        />
                         <div style={{ display:'flex', justifyContent:'center'}}>
                            {renderAvailableApptsVertical()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="ThankYouComments" >
                <div style={{display:'flex',flexDirection:'column', backgroundColor:'#536DFE' ,boxShadow:'0 0 18px #757575', width:'auto', height:'auto', border:"0px solid black", borderRadius:'32px', marginTop:'-50%'}}>
                    <div className='CardTitle' style={{textAlign:'center', color:'white', marginTop:'4rem'}}>Tell us a bit more about your brand</div>
                     <div>
                        <div  className="CardFormParent"  style={{marginLeft:'auto', marginRight:'auto', color:'white', padding:'5%'}}>
                        <div className="CardForm" style={{flexDirection:'column'}}>
                                <div className="CardFormText" >
                                Your full name
                                </div>
                                <div>
                                    <input className="ThankYouFormInput"/>
                                </div>
                       </div>
                       <div className="CardForm" style={{flexDirection:'column'}}>
                                <div className="CardFormText" >
                                Business URL
                                </div>
                                <div>
                                    <input className="ThankYouFormInput"/>
                                </div>
                       </div>
                       <div className="CardForm" style={{flexDirection:'column'}}>
                                <div className="CardFormText" >
                                What makes your brand unique?
                                </div>
                                <div>
                                    <input className="ThankYouFormInput"/>
                                </div>
                       </div>
                       <div className="CardForm" style={{flexDirection:'column'}}>
                                <div className="CardFormText" >
                                What do customers say they like about your business?
                                </div>
                                <div>
                                    <input className="ThankYouFormInput"/>
                                </div>
                       </div>
                       <div className="CardForm" style={{flexDirection:'column'}}>
                                <div className="CardFormText" >
                                What is the most exciting aspect of your brand?
                                </div>
                                <div>
                                    <input className="ThankYouFormInput"/>
                                </div>
                       </div>
                    </div>
                        <div style={{display:'flex', justifyContent:'center', marginBottom:'4rem'}}>
                            <button className="CardButton" style={{color:'#0062FF' , backgroundColor:'#FCF621'}}>
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}