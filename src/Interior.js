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


const Interior=(props)=>{
    const theme='#191919'
    const [projects,setProjects]=useState([])


    const ZoomIn=styled.div`animation:3s ${keyframes`${zoomIn}`}`



    const listAllProjects=()=>{
        setProjects(Data)
     }

     useEffect(()=>{
      listAllProjects()
    },[props])

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
             <div className="col-12 col-md-6 mx-auto text-left">
              
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>Philosophy</h1>
               <p className="text-white">Urabbo's ability to stay abreast of the latest in interior design industry coupled with the ingenuity and imagination of Urabbo interior experienced professionals has made Home Makers Interior Designers & Decorators Private Limited a dominant player in this market. Urabbo Interior has successfully completed a diverse range of projects throughout India for hotels, restaurants, financial institutions, hospitality installations, corporate facilities and luxury homes. Urabbo Interior customers are located in communities such as Mumbai, Pune, Solapur, Nasik, Kolhapur , satara, and many other cities of India. Whether it is a prestigious office, luxury home, casual cafe or an upscale restaurant, the Urabbo Interior team of interior Designer is equally at ease to carry out any type of project from initial planning to final implementation. One of Home Makers primary responsibilities is to focus on all the key elements in your home or office space. The next step is to create a functional environment in each of these elements that optimizes space and finally, create a unique design solution that relates to the client's vision while maintaining a balance between functionality and aesthetics. Whether it's a bedroom, washroom, kitchen, living area or hallway in your home or the bar, restrooms, waiting areas, kitchen and dining areas in a restaurant or office set up in a corporate building, Urabbo Interior Design professionals have unique and innovative design solutions for any type of outfit. Home Makers ensure that our design will create a stunning first impression when your guests enter your home for the first time. Home Makers will create just the perfect decor and ambiance in your restaurant or hotel that will entice your customers to keep coming back. Home Makers focus on ergonomically designed office space with a stress-free environment which will help increase employee productivity. You can actually view and appreciate examples of the finest work in residential & commercial interior design </p>
             </div>
             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/inti1.jpg" className="rounded mt-5 border border-3 border-warning" width="100%"></img>
             </div>

             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/inti2.jpg" className="rounded mt-5 border border-3 border-warning" width="100%"></img>
             </div>
            <div className="col-12 col-md-6 mx-auto text-left">
              
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>Home Interiors </h1>
               <p className="text-white">Our key line of operation is full home interiors. Our leading interior designers take a brief and understand your requirements and vision for your house. Basis those requirements we work on the designs and once the designs are locked, we get into execution. We are a one stop solution provider when it comes to full home interior designing and particular room interior for partial home interior designing. </p>
             </div>


             <div className="col-12 col-md-6 mx-auto text-left">
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>The Finest Modular Kitchen </h1>
               <p className="text-white">Urabbo is one of the finest companies that design and execute modular kitchens. As a process, our top most priority is to understand your requirements and challenges that you face and basis those we provide designs that are most suitable for you. Our designs are deep rooted in the Indian culture and we understand the sensibilities of an Indian kitchen and usage patterns. We use high-quality products that are heat proof and termite resistant. The need for storage is highly demanded in most of the kitchens and our designs take special care of maximising the storage space. As we give a lot of importance to size specifications and quality, our modular kitchens are easier to install as the measurements are accurate. The panels of the modular kitchen are carefully delivered to your doorstep, unpacked and installed. The whole process is a delight as there is no time wastage. once the designs are locked, we get into execution. We are a one stop solution provider when it comes to full home interior designing and particular room interior for partial home interior designing. </p>
             </div>
             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/inti3.jpg" className="rounded mt-5 border border-3 border-warning" width="100%"></img>
             </div>

             <div className="col-12 col-md-6 mx-auto text-center">
              
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>Urabbo interior Designer</h1>
               <p className="text-white">Every Urabbo concept evolves from a close collaboration between our team and our clients – a process predicated upon our having a firm understanding of both our client’s objectives and their unparalleled position within the hospitality industry. talented team listens, researches, synthesizes and ultimately implements a creative vision that is aesthetically compelling, budget and deadline compliant, and above all, speaks strategically to a project’s unique place and program.</p>
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
    return (
        <div className="g-0" style={{maxWidth:"100vw"}}>
            <div><TopMenu /></div> 
                 
            <div className="container-fluid ">
            <div>{topCarousel()}</div>
            <div>{sec1()}</div>
            <div>{ourProjectsMarquee()}</div>
            <br/><br/>
            <div id="contact"><Footer /></div>
            </div>
        </div>
    )
}

export default Interior
