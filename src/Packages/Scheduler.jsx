import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { makeStyles } from "@mui/styles";
import { style } from "@mui/system";
// import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    margin: "50px auto",
    width: "980px",
    padding: "50px 50px",
    backgroundColor: "white",
    // backgroundColor: "blue"
  },
  button: {
    backgroundColor: "white",
    border: "2px solid #B28D42",
    color: "#B28D42",
    padding: "15px 90px",
    textAlign: "center",
    textDecoration: "none",
    display: "block",
    fontSize: "20px",
    borderRadius: "50px",
    margin: "2px auto",
    "&:hover": {
      background: "#B28D42",
      color: "white",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
    "&:active": {
      outline: "none",
      boxShadow: "none",
    },
  },
  buttonDisable: {
    backgroundColor: "#B28D42",
    border: "none",
    color: "white",
    padding: "15px 100px",
    textAlign: "center",
    textDecoration: "none",
    display: "block",
    fontSize: "20px",
    borderRadius: "50px",
    margin: "0 auto",
    opacity: "50%",
    boxShadow: "none",
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
    "&:active": {
      outline: "none",
      boxShadow: "none",
    },
  },
  payButton: {
    width: "200px",
    height: "50px",
    backgroundColor: " #D3A625",
    border: "2px solid  #D3A625",
    color: "white",
    // padding: "0 10px 0 10px",
    textDecoration: "none",
    fontSize: "20px",
    borderRadius: "50px",
    fontFamily: "AvenirHeavy",
    "&:hover": {
      borderColor: " #D3A625",
      background: " #D3A625",
      color: "#white"
    },
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
    "&:active": {
      outline: "none",
      boxShadow: "none",
    },
    "&:disabled": {
      backgroundColor: " #D3A625",
      color: "white",
      opacity: "50%",
      "&:hover": {
        borderColor: " #D3A625"
      },
    }
  },
});

export const ApptContext = React.createContext();

export default function Scheduler(props) {
  const elements = useElements();
  const stripe = useStripe();
  // const history = useHistory();
  //for confirmation page
  const [apptInfo, setApptInfo] = useState({});
  const [apptConfirmed, setApptConfirmed] = useState(false);

  // for hide and show
  const [submitted, setSubmitted] = useState(false);

  // form use states, Axios.Post
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [notes, setNotes] = useState("");

  const [charge_id, setCharge_id] = useState('');

  //String formatting functions for the date variable
  const doubleDigitMonth = (date) => {
    let str = "00" + (date.getMonth() + 1);
    return str.substring(str.length - 2);
  };

  const doubleDigitDay = (date) => {
    let str = "00" + date.getDate();
    return str.substring(str.length - 2);
  };

  // This one is for doing the sendToDatabase Post Call
  const dateFormat3 = (date) => {
    return (
      date.getFullYear() +
      "-" +
      doubleDigitMonth(date) +
      "-" +
      doubleDigitDay(date)
    );
  };

  useEffect(() => {
    console.log("RERENDER -- apptInfo: ", apptInfo);
    // setApptConfirmed(true);
    // console.log("apptInfo length: ", apptInfo.length);
    if(JSON.stringify(apptInfo) !== "{}") {
      // history.push({
      //   pathname: '/apptconfirm',
      //   state: {
      //     apptInfo
      //     // test_value: "test_string"
      //   }
      // });
    }
  }, [apptInfo])



  function sendToDatabase(customer_ID) {
    console.log("create appt")
    const postURL =
      "https://l7a9lqpcj0.execute-api.us-west-1.amazonaws.com/dev/api/v2/checkout";
    axios
      .post(postURL, {
        customer_uid: props.customerID,
        business_uid: "WEB",
        items:props.items,   
        // amount_due: props.paymentSummary.total,
        amount_due:"49",
       // amount_discount: props.paymentSummary.discountAmount,
        amount_discount:'0',
        amount_paid: "0.00",
        ambassador_code:"",
        ambassador_discount:"0",
        cc_num: "NULL",
        cc_exp_year: "NULL",
        cc_exp_month: "NULL",
        cc_cvv: "NULL",
        cc_zip: "NULL",
        charge_id: customer_ID,
        payment_type: "STRIPE",
        // tax: props.paymentSummary.taxAmount,
        tax:"4.99",
        //subtotal: props.paymentSummary.subtotal,
        // subtotal: props.paymentSummary.mealSubPrice,
        subtotal:"0",
        // amb: props.paymentSummary.ambassadorDiscount,
        amb:'0',
      })
      .then((res) => {
        console.log("create appt",res);
      }) .catch((err) => {
        console.log(err);
        if (err.response) {
          console.log("create appt: ");
        }
      });

    setApptInfo({
      first_name: props.fName,
      email: props.email,
      phone_no: props.phoneNum,
      treatment: props.treatmentName,
      purchase_price: props.cost,
      duration: props.duration,
      image_url: props.image_url,
    });
    // history.push("/apptconfirm", {apptInfo});
     console.log('create appt',apptInfo);
    // setApptConfirmed(true);
  }

    

      
    

  const [changeLoadingState, setLoadingState] = useState(false);
  const [customerUidState, setCustomerUidState] = useState(false);

  // useEffect(()=>{

  //   const tempFind = []

  //   const body = {
  //     phone_num: props.phoneNum.replace(/[^a-z\d\s]+/gi, ""),
  //     email: props.email
  //   }
  //   // sendToDatabase();
  //   axios.post('https://mfrbehiqnb.execute-api.us-west-1.amazonaws.com/dev/api/v2/findCustomer', body)
  //   .then(response => {
    
  //     console.log("response", response)
  //     for(var i=0; i<response.data.result.length ; i++){
  //     tempFind.push(response.data.result[i])
  //     }
  //     console.log("response", tempFind)
  //     for(var i=0;i<tempFind.length;i++){
  //       if(props.email === tempFind[i].customer_email){
  //         if(props.phoneNum === tempFind[i].customer_phone_num){
  //           console.log("response", tempFind[i].customer_uid)
  //            setcustomerUid(tempFind[i].customer_uid)
  //         }
  //       }
  //     }
  //   })

  //   console.log("response", customerUid)
  // },[customerUidState])

  async function bookAppt() {

    const price = props.cost.split(' ', 1)

    setCustomerUidState(!customerUidState)
    const temp = {
      tax: 0,
      total: price[0].replace(/[$]/g, '')
    };

    var clientSecret;
    const cardElement = await elements.getElement(CardElement);

    const postURL =
      "https://huo8rhh76i.execute-api.us-west-1.amazonaws.com/dev/api/v2/createPaymentIntent";
    axios
      .post(postURL, {
        //customer_uid: customerUid,
        customer_uid: props.customerID,
        business_code: props.notes === "BIZBUZTEST" ? "IOTEST" : "IOPAYMENT",
        payment_summary: temp,
      })
      .then(function (result) {
        console.log("createPaymentIntent result: " + JSON.stringify(result));
        console.log("clientSecret from createPaymentIntent: " + result.data);
        clientSecret = result.data;
        console.log("charge_id",clientSecret)

        console.log("calling createPayment gMethod...");

        const paymentMethod = stripe
          .createPaymentMethod({
            type: "card",
            card: cardElement,
            billing_details: result.data.billingDetails,
          })
          .then(function (res) {
            console.log("createPaymentMethod res: " + JSON.stringify(res));
            console.log(result.data.billingDetails);
            console.log("calling confirmedCardPayment...");
            console.log("charge_id", res.paymentMethod.id)
            setCharge_id(res.paymentMethod.id)
            sendToDatabase(res.paymentMethod.id);
            try {
              const confirmedCardPayment = stripe
                .confirmCardPayment(clientSecret, {
                  payment_method: res.paymentMethod.id,
                  setup_future_usage: "off_session",
                })
                .then(function (result) {
                 // setCharge_id(result.data.id)
                // console.log("charge_id", result.data.id)
                  console.log(
                    "confirmedCardPayment result: " + JSON.stringify(result)
                  );
                //  sendToDatabase();
                })
                .catch((err) => {
                  console.log(err);
                  if (err.response) {
                    console.log("error: " + JSON.stringify(err.response));
                  }
                  setSubmitted(false);
                  setLoadingState(false);
                });
            } catch (e) {
              console.log("error trying to pay: ", e);
              setSubmitted(false);
              setLoadingState(false);
            }
          });
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          console.log("error: " + JSON.stringify(err.response));
          setSubmitted(false);
          setLoadingState(false);
        }
      });
    setSubmitted(true);
  }

  const classes = useStyles();
  console.log("(Scheduler) props: ", props);

  return (
    <div>
      <div>
        <br></br>
        {/* <div hidden={!submitted ? "hidden" : ""}>
          <Switch>
            <Route path="/apptconfirm">
              <ApptContext.Provider value={{ apptInfo, apptConfirmed }}>
                <AppointmentConfirmationPage
                  first_name={props.fName}
                  email={props.email}
                  phone_no={props.phoneNum}
                  treatment={props.treatmentName}
                  purchase_price={props.cost}
                  duration={props.duration}
                  image_url={props.image_url}
                />
              </ApptContext.Provider>
            </Route>
          </Switch>
        </div> */}
        <div  className="CardTextInput" >
        <CardElement
          elementRef={(c) => (this._element = c)}
          // className={props.classes.element}
          // options={options}
          // style={{
          //   backgroundColor: "black",
          //   padding: "10px",
          //   boxSizing: "border-box",
          //   borderRadius: "20px",
          //   fontColor: "#52330D",
          //   fontSize: "20px",
          //   margin: "5px auto",
          //   border: "2px solid #52330D",
          //   width: "100%",
          //   fontFamily: "AvenirHeavy",
          //   outline: "none",
          // }}
        />
        </div>
        <div
          aria-label={"click button to book your appointment"}
          // hidden={!props.infoSubmitted ? "hidden" : ""}
          style={{
            marginTop:'1rem',
            display: "flex",
            justifyContent: "center"
          }}
        >
          <button 
            disabled={submitted}
            onClick={bookAppt}
            className={classes.payButton}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
