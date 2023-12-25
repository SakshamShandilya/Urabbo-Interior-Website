//import {API} from "../config"
const API=process.env.REACT_APP_API_URL;

export const listProjects=()=>{
    return fetch(`${API}/projects`,{
        method:"GET",
            headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json"
            },
            
      })
      .then((data)=>{
            return data.json()
                  
            
      })
      .catch(err=>{
            console.log(err);
      
    })
}
///

export const readProject=(projectId)=>{
      return fetch(`${API}/project/${projectId}`,{
          method:"GET",
              headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
              },
              
        })
        .then((data)=>{
              return data.json()
                    
              
        })
        .catch(err=>{
              console.log(err);
        
      })
  }

  export const getSearchProject=(searchKey)=>{
      return fetch(`${API}/projects/search?search=${searchKey}`,{
          method:"GET",
              headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
              },
              
        })
        .then((data)=>{
              return data.json()
                    
              
        })
        .catch(err=>{
              console.log(err);
        
      })
  }

  export const createLead=(leadData)=>{
      return fetch(`${API}/lead/create`,{
          method:"POST",
          headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
          },
          body:JSON.stringify(leadData)
      })
      .then((data)=>{
          return data.json()
                
          
    })
    .catch(err=>{
          console.log(err);
    })
  }