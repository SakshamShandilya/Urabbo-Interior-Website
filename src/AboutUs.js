import React,{useState,useEffect,useRef} from "react"
import {Navbar,Container,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap"
import {MdTravelExplore,MdLocationOn,MdOutlineCall,MdMarkEmailRead,MdStars} from "react-icons/md"
import Marquee from "react-fast-marquee";
import TopMenu from "./core/TopMenu"
import Footer from "./core/footer"
import Data from "./projects.json"
import {FaBuilding,FaPhone,FaHandshake} from "react-icons/fa"

import { Link } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel"
import {listProjects,getSearchProject} from "./core/apicalls"
import { zoomIn} from 'react-animations';
import styled, { keyframes } from 'styled-components';



const AboutUs=(props)=>{

    const theme='#191919'

    const [projects,setProjects]=useState([])


    const ZoomIn=styled.div`animation:3s ${keyframes`${zoomIn}`}`



    const listAllProjects=()=>{
        setProjects(Data)
     }

     useEffect(()=>{
      listAllProjects()
    },[props])



    const topNav=()=>(
        <div>
          <Navbar bg="" expand="lg" variant="dark" fixed="top" style={{backgroundColor:theme,zIndex:"0",opacity:"0.9"}} className="shadow-lg ">
            <Container fluid>
              <Navbar.Brand href="/">
                <img src="/logo-2.png" className="rounded" alt="" width="100%" height="60px" style={{borderRadius:"15px"}} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" className="text-light" />
              <Navbar.Collapse id="navbarScroll" className="text-light">
      
                <Nav
                  className="me-2 mx-auto my-2 my-lg-0 d-flex"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="/" className="text-warning">Home</Nav.Link>
                  <Nav.Link href="/projects" className="text-warning">Projects</Nav.Link>
                  <Nav.Link href="/aboutus" className="text-warning">About Us</Nav.Link>
                  <Nav.Link href="#contact" className="text-warning">Contact Us</Nav.Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )

      const text=()=>(
          <div className="" style={{fontFamily:"serif"}}>
              <p className="h5 text-white" >URABBO was founded in 2009 by abcd. A versatile designer has been long in this business of creating interiors. With more than 15 years of work experience, she combines a unique sense of style with an excellent knowledge of design to create thoughtful, interior solutions. She has delved into many disciplines of design, her desire to create space that is perfect & detailed.</p>
               <br/>
              <p className="h5 text-white">Recognized to bring a classic sensibility to her designs, she tries to find inspiration for her clients by understanding, clarifying their ambition and vision as well as striving for perfection. Mrs Menka Rajpoot instills her team with confidence to be fearless while designing a space. Her specialties are confident space planning, intricate detailing & bold sense of colors.</p>
              <br/>
          </div>
      )

      const footer=()=>(
        <div  style={{backgroundImage:"url('/images/bg-6.jpg')"}}>
          <div >
            <div className="row p-2 col-md-8 mx-auto ">
             <div className="p-2  col-12 col-md-6">
             <div className="  rounded shadow-lg " style={{backgroundColor:theme,opacity:"0.9"}}>
                <div className="col-8 mx-auto" ><img src="/logo-2.png" width="100%" height="100px"></img></div>
                <div className="col-10 mx-auto text-center text-white p-4 h5" style={{fontFamily:"serif"}}>WHY WE ARE THE BEST!<br/>
 Interior design is a process that provides its customers with a set of aesthetically pleasing but efficient solutions for a better use of the space in question. The goal of interior design is to improve the user experience by better managing the space available in the intervened environment.</div>
              </div>
             </div>
 
 
 
              
 
 
              <div className="p-2 col-12 col-md-6">
              <div className="rounded" style={{backgroundColor:theme,opacity:"0.9",fontFamily:"'Aref Ruqaa', serif"}}>
                <p className="h3 text-center text-warning p-2" style={{fontFamily:"'Aref Ruqaa', serif"}}>Contact Us</p>
                <div className="p-3">
                  <div className="row mb-3">
                    <div className="col-2"><MdOutlineCall className="h1 text-warning rounded-circle bg-white " /></div>
                    <div className="col-10">
                      <p className="text-white h5">Call Us</p>
                      <p className="text-warning h5">+919694318893</p>
                    </div>
                  </div>
 
                  <div className="row mb-3">
                    <div className="col-2"><MdMarkEmailRead className="h1 text-warning rounded-circle bg-white " /></div>
                    <div className="col-10">
                    <p className="text-white h5">Email Us</p>
                      <p className="text-warning h5"></p>
                    </div>
                  </div>
 
                  <div className="row mb-3">
                    <div className="col-2"><MdMarkEmailRead className="h1 text-warning rounded-circle bg-white " /></div>
                    <div className="col-10">
                      <p className="text-white h5">Sales and Marketting</p>
                      <p className="text-warning h5"></p>
                    </div>
                  </div>
 
                </div>
              </div>
              </div>
 
            </div>
          </div>
          <div className="text-white text-center h3" style={{fontFamily:"'Aref Ruqaa', serif"}}>Mumbai | Pune | Dubai</div>
          <div style={{backgroundColor:theme}}><p className="text-center text-warning p-3 h6"></p></div>
        </div>
 
      )

     const sec1=()=>(
       <div className="mt-5" style={{backgroundImage:"url('/images/bg-1.jpg')",height:"auto"}}>
         <div style={{backgroundColor:theme,opacity:"0.95",height:"auto"}}>
           <div className="row mt-5 p-3">
             <div className="col-12 col-md-6 mx-auto text-center">
              
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>Nitesh Rajpoot</h1>
               <p className="text-white">DGM Projects 20years Of Experience In Project Development & Management</p>
               <p className="text-white">Consectetur a eius ipsa laudantium cumque Ipsa optio eligendi nulla labore quisquam. Illo culpa atque deserunt ducimus rerum Repellendus debitis eius eius dolores minima? Repudiandae quo culpa reprehenderit sequi molestias molestias vel Omnis obcaecati consectetur exercitationem illum debitis rem Veritatis quibusdam atque asperiores consequatur distinctio, pariatur! In et architecto optio</p>
             </div>
             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/d1.jpg" className="rounded mt-5 border border-3 border-warning" width="100%"></img>
             </div>

             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/d1.jpg" className="rounded mt-5 border border-3 border-warning" width="100%"></img>
             </div>
             <div className="col-12 col-md-6 mx-auto text-center">
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>Sadiq Khan</h1>
               <p className="text-white">Principal Designer Of Architect & Interior</p>
               <p className="text-white">Consectetur a eius ipsa laudantium cumque Ipsa optio eligendi nulla labore quisquam. Illo culpa atque deserunt ducimus rerum Repellendus debitis eius eius dolores minima? Repudiandae quo culpa reprehenderit sequi molestias molestias vel Omnis obcaecati consectetur exercitationem illum debitis rem Veritatis quibusdam atque asperiores consequatur distinctio, pariatur! In et architecto optio</p>
             </div>

           </div>
           <br/>
           <br/>
         </div>
       </div>
     )

     const ourProjectsMarquee=()=>(
       <div className="" style={{backgroundImage:"url('/images/bg-3.jpg')",}} >
       <div style={{backgroundColor:theme,opacity:"0.9"}}>
       <h2 className="text-warning text-center p-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>Our Projects</h2>
        <div className="col-12 col-md-9 mx-auto text-decoration-none">
        <Marquee className="col-9 mx-auto" gradient={false} speed={50}>
          {projects.map((p,i)=>(
            <div className="p-4 text-decoration-none" >
              <img src={p.royalRes} className="rounded border border-white" height="300px" width="300px"></img>
            </div>
          ))}
        </Marquee>
        </div>
        <div className="text-center p-5"><Link to="/projects"><button className="btn btn-warning">View All Projects</button></Link></div>
       </div>
       </div>
     )
     
     const process=()=>(
       <div className="mt-0" style={{backgroundImage:"url('/images/bg-2.jpg')",height:"auto"}}>
         <div style={{backgroundColor:theme,opacity:"0.9",height:"auto"}}>
           <h1 className="text-center mt-0 p-5 text-white" style={{fontFamily:"'Aref Ruqaa', serif"}}>Our Process</h1>
           <div className="row p-5 " >
             <div className="col-12 col-md-3 text-center p-2">
                <div className=" mx-auto bg-warning square row align-items-center" style={{height:"150px",width:"150px"}}><MdStars className="h1 text-muted  text-center display-1 " style={{fontSize:"5em"}} /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"'Aref Ruqaa', serif"}}>200+ PROJECTS CCOMPLETED</div>
             </div>
             <div className="col-12 col-md-3 text-center p-2">
                <div className=" mx-auto bg-warning square row align-items-center" style={{height:"150px",width:"150px"}}><MdStars className="h1 text-muted text-center" style={{fontSize:"5em"}} /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"'Aref Ruqaa', serif"}}>5 AWARDS RECEIVED</div>

             </div>
             <div className="col-12 col-md-3 text-center p-2">
                <div className=" mx-auto bg-warning square row align-items-center" style={{height:"150px",width:"150px"}}><MdStars className="h1 text-muted text-center" style={{fontSize:"5em"}} /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"'Aref Ruqaa', serif"}}>175+ HAPPY CUSTOMERS</div>

             </div>
             <div className="col-12 col-md-3 text-center p-2">
                <div className=" mx-auto bg-warning square row align-items-center" style={{height:"150px",width:"150px"}}><MdStars className="h1 text-muted text-center" style={{fontSize:"5em"}} /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"'Aref Ruqaa', serif"}}>15 YEARS IN SERVICE</div>

             </div>
           </div>
         </div>
       </div>
     )

    return(
        <div className="container" style={{maxWidth:"100vw",backgroundColor:theme}}>
           <div><TopMenu /></div>

          
           <div className="row">
               <div className="col-12 col-md-5 my-auto">
               
               <img src="images/about-img.jpeg" className="rounded border border-3 border-warning" width="100%" height="100%">
               </img>
               <p className="h4 text-center text-warning mb-0" style={{fontFamily:"'Aref Ruqaa', serif"}}>abcd</p>
               <p className="h6 text-center text-white mt-0" style={{fontFamily:"'Aref Ruqaa', serif"}}>Director, URABBO</p>
               </div>
               <br/><br/>
               <div className="col-12 col-md-7 mt-5 mt-md-0 overflow-auto " >
               <h3 className="text-center text-warning mb-3 " style={{fontFamily:"'Aref Ruqaa', serif"}}>Get To Know Our Director</h3>
               <div className="my-auto col-12  col-xl-9 mx-auto">{text()}</div>
               <div className="mt-5 mx-auto d-flex justify-content-center">
                 <iframe
                  className="border border-5 border-warning "
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5622221657577!2d73.00419986540547!3d19.08297605671098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c13a61d8a4f9%3A0x4835fbf744b50938!2sSatra%20Plaza%2C%20Phase%202%2C%20Sector%2019D%2C%20Vashi%2C%20Navi%20Mumbai%2C%20Maharashtra%20400703!5e0!3m2!1sen!2sin!4v1646935416929!5m2!1sen!2sin" width="600" height="300"></iframe>
               </div>
               </div>
           </div>
          <div>{sec1()}</div>
          <div>{process()}</div>
          <div>{ourProjectsMarquee()}</div>
           <div id="contact" className="g-0"><Footer /></div>
        </div>
    )
}

export default AboutUs
