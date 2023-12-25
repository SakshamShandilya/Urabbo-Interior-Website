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


const Architecture=(props)=>{
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
              
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>The Importance Of Architecture</h1>
               <p className="text-white">At its roots, architecture exists to create the physical environment in which people live, but architecture is more than just the built environment, it’s also a part of our culture. It stands as a representation of how we see ourselves, as well as how we see the world. </p>
               <p className="text-white">While the concept of shelter is a fairly simple thing, the style of buildings was originally shaped by the climate of a particular location, what materials were readily available, as well as the values of the society building them. As the world became more and more connected, the styles evolved, but even in modern construction, there is still an importance in honoring the cultural nuances in the built environment.</p>
             </div>
             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/archi1.jpg" className="rounded mt-5 border border-3 border-warning" width="100%"></img>
             </div>

             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/archi2.jpg" className="rounded mt-5 border border-3 border-warning" width="100%"></img>
             </div>
            <div className="col-12 col-md-6 mx-auto text-left">
              
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>Why we are the Best!</h1>
               <p className="text-white">Interior design is a process that provides its customers with a set of aesthetically pleasing but efficient solutions for a better use of the space in question. The goal of interior design is to improve the user experience by better managing the space available in the intervened environment.</p>
             </div>


             <div className="col-12 col-md-6 mx-auto text-left">
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>Architecture at it's Best</h1>
               <p className="text-white">Employing the highest standard of excellence and quality, Urabbo provides an extensive selection of professional services including: Interior & Architecture Design, Program Development, Master Planning, Dedicated Project, Management, Sub-Contractor, Negotiations / Management, Restaurant & Hotel, Wardrobe / Costume, Design 3D Interior Perspectives, Tableware and Amenity Selection / Design Procurement</p>
             </div>
             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/archi3.jpg" className="rounded mt-5 border border-3 border-warning" width="100%"></img>
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

export default Architecture
