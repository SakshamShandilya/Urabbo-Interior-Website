import React,{useState,useEffect} from "react"
import {useParams,Link} from "react-router-dom"
import {listProjects,getSearchProject} from "./core/apicalls"
import TopMenu from "./core/TopMenu"
import ProjectCard from "./core/ProjectCard"
import {MdTravelExplore,MdLocationOn,MdOutlineCall,MdMarkEmailRead} from "react-icons/md"
import Footer from "./core/footer"


const SearchResult=()=>{

    const theme='#191919'


    const [projects,setProjects]=useState([])

    const {searchkey}=useParams();

    const listSearchProjects=()=>{
        
        getSearchProject(searchkey).then(data=>{
          if(data.error)
          {
            console.log(data.error);
          }
          else{
            setProjects(data)
          }
        })
      }

      useEffect(()=>{
        listSearchProjects()
      },[projects])

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
          <div><TopMenu /></div>
          <div style={{backgroundImage:"url('/images/bg-5.jpg')"}}>
            <div className="row justify-content-center col-12 m-0 p-4" style={{backgroundColor:theme,opacity:"0.9",minHeight:"500px"}}>
          {projects.map((p,i)=>(
            <div className=" col-11 col-md-6 col-lg-4 p-3"> <Link to={`/projects/${p._id}`} style={{textDecoration:"none"}}><ProjectCard project={p} className="" style={{textDecoration:"none"}}></ProjectCard></Link></div>
           ))}
          </div>
            </div>
            <div id="contact"><Footer /></div>
        </div>
    )
}

export default SearchResult
