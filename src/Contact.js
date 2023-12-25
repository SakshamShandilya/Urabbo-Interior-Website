import React,{useState,useEffect} from "react";
import TopMenu from "./core/TopMenu";
import Footer from "./core/footer";
import { createLead } from "./core/apicalls";
import emailjs from '@emailjs/browser';



const Contact=()=>{
    const theme='#191919'
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phoneNo,setPhoneNo]=useState("")
    const [interest,setInterest]=useState("")
    const [success,setSuccess]=useState(false)

    var templateParams = {
        name: name,
        email: email,
        phoneNo:phoneNo,
        message:interest
    };
    
    const clickSubmit=(event)=>{
        event.preventDefault();
          emailjs.send('service_3jlok77', 'template_hfizhdc', templateParams, 'ZO5UxhPU0L6_h7Bh4')
          .then(function(response) {
             console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
             console.log('FAILED...', error);
          });
         
          setSuccess(true)
          setName("");
          setEmail("");
          setPhoneNo("");
          setInterest("");
      }


      const showSuccess  =()=>(
        <div className="alert alert-warning text-dark" style={{display:success ? "":"none"}}>
            Thank You. Soon our team will contact you.
      </div>
      )
  

    const contactForm=()=>(
        <div style={{backgroundImage:"url('/images/bg-2.jpg')"}}>
           <div >
               <div className="col-11 col-md-9 mx-auto p-5" style={{backgroundColor:theme,opacity:"0.9"}}>
               
                <div className="row">
                    <div className="col-12 col-md-6 my-auto p-3">
                        <p className="h1 text-warning text-center " style={{fontFamily:"'Aref Ruqaa', serif"}}>Our Expertise , Your Lifestyle</p>
                        <hr className="text-white d-md-none" />

                    </div>
                    <div className="col-12 col-md-6 ">
                    <p className="h2 text-warning text-center" style={{fontFamily:"'Aref Ruqaa', serif"}}>Contact Us</p>
                    {showSuccess()}
                    <form >
              <div className="form-group">
              <label className="text-white">Name:</label>
              <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control col-12" value={name}  required></input>
              </div>
              <div className="form-group">
              <label className="text-white">Email:</label>
              <input onChange={(e)=>{setEmail(e.target.value)}} type="text" className="form-control col-12" value={email}  required></input>
              </div>
              <div className="form-group">
              <label className="text-white">Phone No:</label>
              <input onChange={(e)=>{setPhoneNo(e.target.value)}} type="text" className="form-control col-12" value={phoneNo}  required></input>
              </div>
              <div className="form-group">
              <label className="text-white">Message:</label>
              <textarea rows="4" onChange={(e)=>{setInterest(e.target.value)}} type="text" className="form-control col-12" value={interest}  required></textarea>
              </div>

              <button onClick={clickSubmit}  type="submit" className="mt-3 col-12 btn btn-warning btn-lg btn-block ">Submit</button>
            </form>
                    </div>
                </div>
               
               </div>
           </div>
        </div>
    )
    return(
        <div>
          <div><TopMenu/></div>
          <div>{contactForm()}</div>
          <div><Footer/></div>
        </div>
    )
}

export default Contact
