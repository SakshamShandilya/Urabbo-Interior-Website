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


const Design=(props)=>{
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
              
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>What Makes Luxury Design… Luxury?</h1>
               <p className="text-white">Like most design terms, “luxury” is hard to define. However, most luxury spaces have a few common elements that unite them. Luxury homes focus on comfort, elegance, and custom touches to embody the highest pedigree of interior design. Basically, you know it when you see it. Here are six things you should consider in your next luxury interior design project.</p>
             </div>
             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/design1.jpg" className="rounded mt-5 border border-3 border-warning" width="100%"></img>
             </div>

             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/design2.jpg" className="rounded mt-5 border border-3 border-warning" width="100%"></img>
             </div>
            <div className="col-12 col-md-6 mx-auto text-left">
              
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>Comfort Meets Luxury</h1>
               <p className="text-white">In luxury homes, comfort is often a priority—but not the Lazy-Boy version of comfort. No, we’re talking the 1,000 thread count sheets and designer tile heated floors kind of comfort. Whether it’s a plush duvet cover or a relaxation-inspired claw-foot tub, a luxury home means stylish comfort. Soft, inviting rugs and upholstery, spa-worthy showers and baths, sumptuous curtains and pillows, and seating options that look as good as they feel are musts in a modern luxury home. </p>
               <p className="text-white">Luxury interior designers mix style with pleasure and ease for every aspect of daily life by choosing materials and room designs that are on-trend while also maintaining inviting softness and utility. Say goodbye to ugly recliners, scratchy sheets, tough carpeting, and uncomfy spaces in a luxury home </p>
             </div>


             <div className="col-12 col-md-6 mx-auto text-left">
               <h1 className="text-white text-center mt-5" style={{fontFamily:"'Aref Ruqaa', serif"}}>Those Personal Touches </h1>
               <p className="text-white">Luxury design is an expression of self as much as an exercise in style or comfort. Luxury interior designers encourage their clients to bring a little bit of their own personalities to the plate in their designs and incorporate those in a luxurious way. Examples include using a piece of children’s art in a large lucite floating frame with brushed gold hardware elegantly affixed to a statement wall, or reupholstering a beloved couch in a modern fabric. </p>
               <p className="text-white">Whether your taste tends toward the eclectic or the subtle, a standout accent piece with a luxurious twist really makes luxury design feel personal. A unique feature wall, an unusual sculpture, or a beautiful light fixture are all great places to make your presence felt. </p>
             </div>
             <div className="col-10 col-md-4 mx-auto">
               <img src="/images/design3.jpg" className="rounded mt-5 border border-3 border-warning" width="100%"></img>
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

export default Design
