import React,{useState,useEffect,useRef} from "react"
import { Link } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel"
import {listProjects,getSearchProject} from "./core/apicalls"
import { zoomIn} from 'react-animations';
import styled, { keyframes } from 'styled-components';
import TopMenu from "./core/TopMenu"
import Footer from "./core/footer"
import Data from "./projects.json"

import {Navbar,Container,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap"
import Marquee from "react-fast-marquee";
import {MdTravelExplore,MdLocationOn,MdOutlineCall,MdMarkEmailRead} from "react-icons/md"
import {FaBuilding,FaPhone,FaHandshake} from "react-icons/fa"

import './App.css';
import Contact from "./Contact"
import ContactModal from "./ContactModal";

const IndexHome=(props)=>{
    const theme='#191919'

    const [projects,setProjects]=useState([])


    const ZoomIn=styled.div`animation:3s ${keyframes`${zoomIn}`}`



    const listAllProjects=()=>{
        setProjects(Data)
     }

     useEffect(()=>{
      listAllProjects()
    },[props])

    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
      setTimeout(() => {
        setModalShow(true);
      }, 3000)
    }, [])

    const topNav=()=>(
        <div style={{maxWidth:"100vw"}}>
          <Navbar bg="" expand="lg" variant="dark" fixed="top" style={{backgroundColor:theme,opacity:"0.9"}} className="shadow-lg p-0">
            <Container fluid>
              <Navbar.Brand href="/" className="">
                <img src="/urabbo-logo.png" className="rounded" alt="" width="100%" height="60px" style={{borderRadius:"15px"}} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" className="text-warning " />
              <Navbar.Collapse id="navbarScroll" className="">
      
                
                <Nav
                  className="me-2 mx-auto my-2 my-lg-0 d-flex"
                  style={{ maxHeight: '100px'}}
                  navbarScroll
                >
                  <Nav.Link href="/" className="text-warning">Home</Nav.Link> 
              <Nav.Link href="/projects" className="text-warning">Projects</Nav.Link>             
			{/*<Nav.Link href="/aboutus" className="text-warning">About Us</Nav.Link>*/}
              <Nav.Link href="#contact" className="text-warning">Contact Us</Nav.Link>
 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )

      const topCarousel=()=>(
        <div className="topCarousel">
          <Carousel interval={2000} autoPlay={true} infiniteLoop={true} showThumbs={false} stopOnHover={false}> 
                <div>
                    <img src="/images/top.jpg" />
                </div>
          </Carousel>
        </div>
      )

     const sec1=()=>(
       <div className="mt-5" style={{backgroundImage:"url('/images/bg-1.jpg')",height:"auto"}}>
         <div style={{backgroundColor:theme,opacity:"0.95",height:"auto"}}>
           <div className="row mt-5 p-3">
             <div className="col-12 col-md-6 mx-auto text-center">
              
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>Urabbo interior Designer</h1>
               <p className="text-white">Every Urabbo concept evolves from a close collaboration between our team and our clients – a process predicated upon our having a firm understanding of both our client’s objectives and their unparalleled position within the hospitality industry. talented team listens, researches, synthesizes and ultimately implements a creative vision that is aesthetically compelling, budget and deadline compliant, and above all, speaks strategically to a project’s unique place and program.</p>
               <Link to="/projects" ><button className="btn btn-lg btn-warning ">View All Projects</button></Link>
             </div>
             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/d1a.jpg" className="rounded mt-5 border border-3 border-warning" width="100%"></img>
             </div>

             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/d1b.jpg" className="rounded mt-5 border border-3 border-warning" width="100%"></img>
             </div>
             <div className="col-12 col-md-6 mx-auto text-center">
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>design as distinctive as the people it serves</h1>
               <p className="text-white">Provides discriminating clients with a comprehensive range of design services and skills. By focusing-time and energy on development of state-of-the-art systems, exacting specifications and documentation, In creates innovative design solutions for every project. Complementing award-winning design talent is sound technical expertise, as well as a practical approach to project management. During each phase of the project, from initial concept, through design development, to final installation, Seeks to distinguish their work through rigorous attention to detail high standards and meticulous follow-through. Supported by exceptional project management teams, Ensures that each project is completed on time and within budget.</p>
               <Link to="/projects" ><button className="btn btn-lg btn-warning ">View All Projects</button></Link>
             </div>

           </div>
           <br/>
           <br/>
         </div>
       </div>
     )

     const process=()=>(
       <div className="mt-0" style={{backgroundImage:"url('/images/bg-2.jpg')",height:"auto"}}>
         <div style={{backgroundColor:theme,opacity:"0.9",height:"auto"}}>
           <h1 className="text-center mt-0 p-5 text-white" style={{fontFamily:"'Aref Ruqaa', serif"}}>Our Process</h1>
           <div className="row p-5 " >
             <div className="col-12 col-md-3 text-center p-2">
                <div className=" mx-auto bg-warning  rounded-circle row align-items-center" style={{height:"150px",width:"150px"}}><MdTravelExplore className="h1 text-muted  text-center display-1 " style={{fontSize:"5em"}} /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"'Aref Ruqaa', serif"}}>Idea & Concept</div>
             </div>
             <div className="col-12 col-md-3 text-center p-2">
                <div className=" mx-auto bg-warning  rounded-circle row align-items-center" style={{height:"150px",width:"150px"}}><FaBuilding className="h1 text-muted text-center" style={{fontSize:"5em"}} /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"'Aref Ruqaa', serif"}}>Design & Create</div>

             </div>
             <div className="col-12 col-md-3 text-center p-2">
                <div className=" mx-auto bg-warning  rounded-circle row align-items-center" style={{height:"150px",width:"150px"}}><FaPhone className="h1 text-muted text-center" style={{fontSize:"5em"}} /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"'Aref Ruqaa', serif"}}>Meet & Agree</div>

             </div>
             <div className="col-12 col-md-3 text-center p-2">
                <div className=" mx-auto bg-warning  rounded-circle row align-items-center" style={{height:"150px",width:"150px"}}><FaHandshake className="h1 text-muted text-center" style={{fontSize:"5em"}} /></div>
                <div className="h2 text-white text-center" style={{fontFamily:"'Aref Ruqaa', serif"}}>Deliver & Install</div>

             </div>
           </div>
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

     const ourServices=()=>(
       <div style={{backgroundImage:"url('/images/bg-5.jpg')",}} >
         <div style={{backgroundColor:theme, opacity:"0.9"}}>
           <div className="text-center h2 text-warning" style={{fontFamily:"'Aref Ruqaa', serif"}}><h2>Our Services</h2></div>
           <div className="row p-4">
               <div className="col">
               <Link to="/Architecture">
                 <div className="text-center "><img src="images/architecture.jpg" className="border border-5 border-warning" width="250px" height="250px"></img></div>
                 <div className="text-center h4 text-white p-2" style={{fontFamily:"'Aref Ruqaa', serif", textDecoration: "underline #ffc107"}}>
                 Architecture
                 </div></Link>
               </div>
               <div className="col">
               <Link to="/Design">
                 <div className="text-center "><img src="images/design.jpg" className="border border-5 border-warning" width="250px" height="250px"></img></div>
                 <div className="text-center h4 text-white p-2" style={{fontFamily:"'Aref Ruqaa', serif", textDecoration: "underline #ffc107"}}>
                 Design
                 </div></Link>
               </div>
               <div className="col">
               <Link to="/Interior">
                 <div className="text-center "><img src="images/interior.jpg" className="border border-5 border-warning" width="250px" height="250px"></img></div>
                 <div className="text-center h4 text-white p-2" style={{fontFamily:"'Aref Ruqaa', serif", textDecoration: "underline #ffc107"}}>
                 Interior</div></Link>
               </div>
           </div>
         </div>
       </div>
     )

     const testimonials=()=>(
       <div style={{backgroundImage:"url('/images/bg-4.jpg')"}}>
          <div style={{backgroundColor:theme,opacity:"0.8"}}>
              <h2 className="text-center p-3 text-warning" style={{fontFamily:"'Aref Ruqaa', serif"}}>What our Clients Say?</h2>
              <div className="row">
              <div className="col-12 col-md-6 my-auto ">
               <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>
                  <p className="text-white ">"Wonderful to work with, very professional team and very accommodating to the client!"</p>
                  <p className="text-white h6">-Anil Sharma</p>
                 
                </div>
                
               </div>

               <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>

                  <p className="text-white ">"From the very start moment that we talked with the team, the staff were young , cool and innovative. Although we were unsure of the exact direction to go, they listened to us and guided all the way through it was done. What a wonderful experience.."</p>
                  <p className="text-white h6">-Rajat Singhania</p>
                 
                </div>
                
               </div>

               <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>

                  <p className="text-white ">"Urabbo is highly recommend and creative team. They run smoothly and with accuracy. It has been one of the best experiences of my life."</p>
                  <p className="text-white h6">-Purvi Patil</p>
                 
                </div>
                
               </div>

              </div>
              <div className="col-12 col-md-6 my-auto">
              
              <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>

                  <p className="text-white ">"When we first bought our project land, we researched several companies including Interior designers that were exclusive. After critically analysing the URABBO team understood our needs and developed a vision that was beyond anything that we would anticipate. The value of their involvement was realised in savings in big bid process and in solving problems. They are very approachable and accessible. I would encourage everyone to allow Urabbo’s team to take the necessary steps and develop amazing and unique reality. Like they did for us. !"</p>
                  <p className="text-white h6">-Ajit Singh</p>
                 
                </div>
                
               </div>

               <div className="col-9 mx-auto rounded p-2" >
               <div className="card p-3 shadow-lg" style={{backgroundColor:"#000000",opacity:"1"}}>

                  <p className="text-white ">" They have good design also have detailed package for 3D rendering. They are really helpful. A team of professionals.."</p>
                  <p className="text-white h6">-Ketam Pate</p>
                 
                </div>
                
               </div>
                  

              </div>
             
              </div>
          </div>
       </div>
     )

     const footer=()=>(
       <div  style={{backgroundImage:"url('/images/bg-6.jpg')"}}>
         <div>
           <div className="row p-2 col-md-8 mx-auto ">



             


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
    
    return (
        <div className="g-0" style={{maxWidth:"100vw"}}>
            <div><TopMenu /></div> 
                 
            <div className="container-fluid ">
            <div>{topCarousel()}</div>
            <div>{sec1()}</div>
            <div>{process()}</div>
            <div>{ourServices()}</div>
            <div>{testimonials()}</div>
            <div>{ourProjectsMarquee()}</div>
            <br/><br/>
            <div id="contact"><Footer /></div>

            {/* <Button variant="primary" onClick={() => setModalShow(true)}>
              Launch vertically centered modal
            </Button> */}

            <ContactModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

            </div>
        </div>
    )
}

export default IndexHome
