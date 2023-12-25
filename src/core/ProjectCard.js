import React,{useState,useEffect} from "react"

const ProjectCard=({project})=>{
    const theme='#191919'


    return(
        <div className="card  shadow-lg rounded border" style={{opacity:"1",minHeight:"500px",textDecoration:"none",fontFamily:"'Aref Ruqaa', serif"}}>
          <div className="card-header h5 text-center text-warning" style={{backgroundColor:theme,color:"#dca43f",opacity:"0.9"}} >{project.name}</div>
           <div className="p-3">
               <img src={project.thumbnail} width="100%" height="" style={{maxHeight:"200px",backgroundColor:"#ffffff",opacity:"1"}}></img>
           </div>
           <div className="card-body text-wrap" style={{fontFamily:"serif"}}>
               <div className=" text-muted">{project.location}</div>
               <div className="h6 lead text-warning" style={{color:""}}>Starting from {project.options[0].price}Cr.</div>
               <ul className="list-group list-group-horizontal-sm ">
               {project.options.map((o,i)=>(
                   <li className="list-group-item">{o.propertyType}</li>
                   ))}
               </ul>
           </div>

        </div>
    )
}
export default ProjectCard