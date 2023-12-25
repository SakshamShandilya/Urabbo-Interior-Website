import React,{useState,useEffect,useRef} from "react"
import { Link } from "react-router-dom"
import {Navbar,Container,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap"
import {listProjects,getSearchProject} from "./core/apicalls"
import ProjectCard from "./core/ProjectCard"
import { bounce ,swing,bounceOut,zoomInRight,flipOutX,merge} from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import styled, { keyframes } from 'styled-components';
import LeadForm from "./core/LeadForm"
import {BsSearch} from "react-icons/bs"
import {MdTravelExplore,MdLocationOn,MdOutlineCall,MdMarkEmailRead} from "react-icons/md"
import TopMenu from "./core/TopMenu"
import Footer from "./core/footer"

const ani=merge(zoomInRight,flipOutX)


const Home=(props)=>{

  const [project,setProjects]=useState([])
  const [search,setSearch]=useState("")
  const [loading,setLoading]=useState(false)
  const [showLeadForm,setShowLeadForm]=useState(false)

  const count=useRef(0)

  const theme='#191919'

  const Bounce=styled.div`animation:6s ${keyframes`${zoomInRight}`}`

 const listSearchProjects=(e)=>{
   e.preventDefault()
   getSearchProject(search).then(data=>{
     if(data.error)
     {
       console.log(data.error);
     }
     else{
       setProjects(data)
     }
   })
 }

 const listAllProjects=()=>{
  listProjects().then(data=>{
    if(data.error)
    {
      console.log(data.error);
    }
    else{
      setProjects(data)
    }
  })
 }

 const handleSearchChange=(e)=>{
   setSearch(e.target.value)
   if(e.target.value=="")
   {
     listAllProjects()
   }
 }

  useEffect(()=>{
   listAllProjects()
   
   setTimeout(()=>{
     setLoading(false)
   },7000)
   setTimeout(()=>{
    setShowLeadForm(true)
   },10000)
 },[])

  const topNav=()=>(
    <div>
      <Navbar bg="" expand="lg" variant="dark" fixed="top" style={{backgroundColor:theme,opacity:"0.9"}} className="shadow-lg p-0">
        <Container fluid>
          <Navbar.Brand href="/" className="">
            <img src="/logo-2.png" className="rounded" alt="" width="100%" height="60px" style={{borderRadius:"15px"}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="text-warning" />
          <Navbar.Collapse id="navbarScroll" className="">
  
            <Form className="d-none d-md-flex mx-auto col-6" onSubmit={listSearchProjects}>
              <FormControl
                type="search"
                placeholder="Search"
                value={search}
                onChange={handleSearchChange}
                className="me-2 mx-auto d-flex col-6"
                aria-label="Search"
              />
              <Button variant="outline-warning" onClick={listSearchProjects}><BsSearch /></Button>
            </Form>
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
  const mobSearch=()=>(
  <div className="d-block d-md-none col-9 mx-auto m-0">
      <Form className="d-flex mx-auto p-2">
              <FormControl
                type="search"
                placeholder="Search"
                value={search}
                onChange={handleSearchChange}
                className="me-2 mx-auto d-flex"
                aria-label="Search"
              />
              <Button variant="outline-warning" onClick={listSearchProjects}><BsSearch /></Button>
      </Form>
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
    return(
        <div>
          {loading?
          (
            <div className="d-flex align-items-center" style={{height:"100vh",backgroundColor:theme}}  >
            <Bounce className="col-11 col-md-7 mx-auto">
            <img src="/logo-2.png" className="" width="100%" height="200px" ></img>
            </Bounce>
           </div>
          ):
          (
            <div className=" g-0" style={{maxWidth:"100vw"}}>
            <div><TopMenu /></div>
           
           {showLeadForm?(<LeadForm/>):null}
          
            <div style={{backgroundImage:"url('/images/bg-5.jpg')"}}>
            <div className="row justify-content-center col-12 m-0 p-4" style={{backgroundColor:theme,opacity:"0.96",minHeight:"500px"}}>
          {project.map((p,i)=>(
            <div className=" col-11 col-md-6 col-lg-4 p-3"> <Link to={`/projects/${p._id}`} style={{textDecoration:"none"}}><ProjectCard project={p} className="" style={{textDecoration:"none",opacity:"1"}}></ProjectCard></Link></div>
           ))}
          </div>
            </div>
            <br/>
          <div id="contact" className="g-0"><Footer /></div>
        </div>
          )}
        </div>
    )
}

export default Home;

