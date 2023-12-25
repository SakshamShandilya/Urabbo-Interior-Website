import React,{useEffect,useState} from "react"
import {Navbar,Container,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap"
import { readProject } from "./core/apicalls"
import {useParams,Link} from "react-router-dom"
import ImageViewer from "react-simple-image-viewer";
import {Table,Toast,ToastContainer} from "react-bootstrap"
import LeadForm from "./core/LeadForm"
import {Carousel} from "react-responsive-carousel"
import TopMenu from "./core/TopMenu";
import Footer from "./core/footer"


import {MdTravelExplore,MdLocationOn,MdOutlineCall,MdMarkEmailRead} from "react-icons/md"

import{BsImages,BsBuilding,BsWhatsapp} from "react-icons/bs"


const Project=(props)=>{

    const theme='#191919'

    const[project,setProject]=useState({})
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [showLeadForm,setShowLeadForm]=useState(false)


 
    const {projectId}=useParams();


    const openImageViewer = () => {
      setIsViewerOpen(true);
    }
  
    const closeImageViewer = () => {
      setIsViewerOpen(false);
    };

    useEffect(()=>{
       
        readProject(projectId).then(data=>{
            if(data.error)
            {
                console.log(data.error);
            }
            else{
                console.log(data);
                setProject(data)
            }
        })
      },[props])

    const topNav=()=>(
        <div>
          <Navbar bg="" expand="lg" variant="dark" fixed="top" style={{backgroundColor:theme,zIndex:"1",opacity:"1"}} className="shadow-lg ">
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
                   <Nav.Link href="/home" className="text-warning">Home</Nav.Link>
                   <Nav.Link href="/projects" className="text-warning">Properties </Nav.Link>

			{/*<Nav.Link href="/aboutus" className="text-warning">About Us</Nav.Link>*/}
                  <Nav.Link href="#contact" className="text-warning">Contact Us</Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )

      const topCarousel=()=>(
        <div style={{backgroundColor:theme}}>
          <Carousel interval={2000} autoPlay={true} infiniteLoop={true} showThumbs={false}>
           
          {project.photos && project.photos.map((photo,i)=>(
            <div className="col-12 col-md-8 mx-auto p-5" ><img src={photo} className="rounded" height="400px" width="400px" ></img></div>
          ))}          
            
          </Carousel>
        </div>
      )


    const optionsTable=()=>(
      <div style={{borderRadius:"10px" , fontFamily:"'Aref Ruqaa', serif"}}>
        <Table striped bordered hover style={{borderRadius:"20px"}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Property Type</th>
              <th>Price</th>
              
            </tr>
          </thead>
          <tbody>
            {project.options && project.options.map((o,i)=>(
              <tr>
              <td>{i+1}</td>
              <td>{o.propertyType}</td>
              <td>{o.price} Cr</td>
              
            </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )

    const amenities=()=>(
     <div className="col-12" style={{backgroundColor:theme,opacity:"0.9",fontFamily:"'Aref Ruqaa', serif"}}>
         <h3 className="text-light text-center p-3" style={{fontFamily:"'Aref Ruqaa', serif"}}>Ammenities</h3>
        <div  className="row">
          {project.ammenities && project.ammenities.map((a,i)=>(
            <div className=" col-6 col-md-4 p-3 ">
            <span className="h5 text-light"><BsBuilding/></span>
            <span className="h6 text-warning p-2">{a}</span>
            </div>
          ))}
      </div>
     </div>
    )

    const scrollingImages=()=>(
      <div>
        <div className="row flex-nowrap">
          {project.photos && project.photos.map((p,i)=>(
            <div className="w-auto  p-4">
              <img src={p} width="300px" height="250px"></img>
            </div>
          ))}
        </div>
      </div>
    )

    const whatsappToast=()=>(
      <span className="d-flex justify-content-end p-3 ">
       <div className="col-3 col-md-1 p-4  rounded-circle text-center" style={{backgroundColor:theme,opacity:"0.9"}}>      <a target="_blank" href="https://wa.me/+919860596900"><div className=""><BsWhatsapp className="h1 text-warning text-center " /></div></a></div>
      </span>
    )
    {/*
       <ToastContainer position="bottom-end">
        <Toast  bg="success" >
          <Toast.Header>
            <BsWhatsapp className="h4 text-success"/>
          </Toast.Header>
          <Toast.Body className="text-white"><a target="_blank" href="https://wa.me/+919694318893" className="text-white">Click Here </a> to connect with us on Whatsapp.</Toast.Body>
        </Toast>
        </ToastContainer>
     */}
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

    const embedmap=()=>(
      <div className="mx-auto d-flex justify-content-center">
        <iframe src={project.gmapurl} width="600" height="350"></iframe>
      </div>
    )

    return(
        <div className=" col-12 m-0" style={{maxWidth:"100vw"}}>
         <div className=""><TopMenu /></div>
         {showLeadForm?(<LeadForm/>):null}
         
          
          <div>{topCarousel()}</div>
           <div className="col-12 p-3" >
               <div className="float-right col-12 text-end"><BsImages className="h1 text-secondary " onClick={openImageViewer} /></div>

               <div className="h1 text-center text-warning" style={{fontFamily:"'Aref Ruqaa', serif"}}>{project.name}</div>
           </div>
           <div className="col-12 col-md-8 mx-auto p-4">
               <div className="text-center text-muted">{project.description}</div>
           </div>
           {isViewerOpen && (
             <ImageViewer
               src={project.photos}
               currentIndex={0}
               onClose={closeImageViewer}
               disableScroll={true}
               backgroundStyle={{
                 backgroundColor: "rgba(0,0,0,0.9)"
               }}
               closeOnClickOutside={true}
               style={{zIndex:"99999"}}
             />
           )}
           <div className="m-0" style={{backgroundImage:"url('/images/c2.jpg')"}}>{amenities()}</div>
           <div className="col-10 col-md-8 mx-auto shadow-lg mt-5 rounded">{optionsTable()}</div>
           <div className="overflow-auto" onClick={openImageViewer}>{scrollingImages()}</div>
           <div className="p-5 text-center mb-3 h2" style={{backgroundColor:theme,opacity:"0.9",fontFamily:"'Aref Ruqaa', serif"}}><button onClick={()=>{setShowLeadForm(true)}} className="btn btn-lg btn-warning text-light h2" ><b>Request a Call Back.</b></button></div>

           <div className="row" style={{backgroundImage:"url('/images/bg-3.jpg')"}}>
             <div className="col-12 col-md-7">
               <div className="col-10 mx-auto p-5 rounded" style={{backgroundColor:theme,opacity:"0.9"}}>{embedmap()}</div>
             </div>
             <div className="col-12 col-md-5 my-auto">
               <div className="col-10 mx-auto p-5 rounded h5 text-white" style={{backgroundColor:theme,opacity:"0.9",fontFamily:"'Aref Ruqaa', serif"}}>
                 {project.location}
               </div>
             </div>
           </div>
           <br/>
           <br/>
           <div className="fixed-bottom">{whatsappToast()}</div>
           <div id="contact"><Footer /></div>
        </div>

       
    )
}

export default Project
