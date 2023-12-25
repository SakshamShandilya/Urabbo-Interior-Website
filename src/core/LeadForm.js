import React,{useState} from "react"
import {Modal,Button} from "react-bootstrap"
import { createLead } from "./apicalls";
import emailjs from '@emailjs/browser';


  
const LeadForm=({setRun = f => f, run = undefined})=>{
    const [show, setShow] = useState(true);
    const [collectionName,setCollectionName]=useState("")
    const [error,setError]=useState("")
    const [success,setSuccess]=useState(false)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phoneNo,setPhoneNo]=useState("")
    const [interest,setInterest]=useState("")
  
    const theme='#545b5b'


    const handleClose = () =>{ setShow(false);}
    const handleShow = () => setShow(true);
  
    const handleCollection= ()=>event =>{
      setCollectionName(event.target.value)
    }

    
    var templateParams = {
      name: name,
      email: email,
      phoneNo:phoneNo,
      message:interest
  };
     
    const clickSubmit=(event)=>{
      event.preventDefault();
      createLead({name,email,phoneNo,interest}).then(data=>{
          if(data.err)
          {
              console.log(data.err);
          }
          else{
              console.log(data);
             
              emailjs.send('service_4rof0eg', 'template_0o4aici', templateParams,'gNDM0QR-RpPGiaEgl')
              .then(function(response) {
                 console.log('SUCCESS!', response.status, response.text);
              }, function(error) {
                 console.log('FAILED...', error);
              });
              setSuccess(true)
          }
      })
    }

    const showSuccess  =()=>(
      <div className="alert alert-info" style={{display:success ? "":"none"}}>
          Thank You. Soon our team will contact you.
    </div>
    )

    return (
      <>
       
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          className="border border-warning"
          style={{backgroundColor:"rgb(84, 91, 91,0.7)"}}
        >
          <Modal.Header closeButton className="border border-warning" >
            <div className="text-muted"><Modal.Title>Please help us understand you Better.</Modal.Title></div>
          </Modal.Header>
          <div className="col-12">{showSuccess()}</div>

          <Modal.Body className="border border-warning">
          <form >
              <div className="form-group">
              <label className="text-muted">Name:</label>
              <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control col-12" value={name}  required></input>
              </div>
              <div className="form-group">
              <label className="text-muted">Email:</label>
              <input onChange={(e)=>{setEmail(e.target.value)}} type="text" className="form-control col-12" value={email}  required></input>
              </div>
              <div className="form-group">
              <label className="text-muted">Phone No:</label>
              <input onChange={(e)=>{setPhoneNo(e.target.value)}} type="text" className="form-control col-12" value={phoneNo}  required></input>
              </div>
              <div className="form-group">
              <label className="text-muted">What are you looking for:</label>
              <input onChange={(e)=>{setInterest(e.target.value)}} type="text" className="form-control col-12" value={interest}  required></input>
              </div>

              <button onClick={clickSubmit}  type="submit" className="mt-3 col-12 btn btn-secondary btn-lg btn-block ">Submit</button>
            </form>
          </Modal.Body>
         
        </Modal>
      </>
    );
  }
  
  export default LeadForm;