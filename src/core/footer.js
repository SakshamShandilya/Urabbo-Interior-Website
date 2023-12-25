import React from "react"
import {MdTravelExplore,MdLocationOn,MdOutlineCall,MdMarkEmailRead} from "react-icons/md"



const Footer=()=>{
    const theme='#191919'

    const laptopFooter=()=>(
        <div  style={{backgroundImage:"url('/images/bg-6.jpg')"}}>
        <div >
          <div className="row p-2 col-md-8 mx-auto ">
      {/*<div className="p-2  col-12 col-md-6">
           <div className="  rounded shadow-lg " style={{backgroundColor:theme,opacity:"0.9"}}>
              <div className="col-8 mx-auto" ><img src="/logo-2.png" width="100%" height="100px"></img></div>
              <div className="col-10 mx-auto text-center text-white p-1 h5" style={{fontFamily:"serif"}}><p className="p-2 h5">WHY WE ARE THE BEST! </p>
              Urabbo provides credibility, strength, and benefits to ensure our client succeeds. We bring together the buyers and the sellers and manage and solve many challenging and complex transactions to gladden everyone involved, especially our clients. Our knowledge and expertise will help you achieve your real estate goals expeditiously.</div>
            </div>
           </div>*/}



            
            <div className="p-2 col-12 col-md-6">
            <div className="rounded" style={{backgroundColor:theme,opacity:"0.9",fontFamily:"'Aref Ruqaa', serif",height:"100%"}}>
              <p className="h3 text-center text-warning p-2" style={{fontFamily:"'Aref Ruqaa', serif"}}>Office Address</p>
              <div className="p-3">
                <div className="row mb-3">
                  <div className="col-2"><MdLocationOn className="h1 text-warning rounded-circle bg-white " /></div>
                  <div className="col-10">
                    <p className="text-white h5">Mumbai Address</p>
                    <p className="text-warning h5">Satara Palaza office no 160 sector 19B plam beach road Vashi Navi Mumbai</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-2"><MdMarkEmailRead className="h1 text-warning rounded-circle bg-white " /></div>
                  <div className="col-10">
                  <p className="text-white h5">Pune Address</p>
                    <p className="text-warning h5">Sr No 251/4 ,Basera house , Vrindavan Nagar, near Neeti Tarangan, Sus, Pune, Maharashtra 411021</p>
                  </div>
                </div>
              
              </div>
            </div>
            </div>


            <div className="p-2 col-12 col-md-6">
            <div className="rounded" style={{backgroundColor:theme,opacity:"0.9",fontFamily:"'Aref Ruqaa', serif",height:"100%"}}>
              <p className="h3 text-center text-warning p-2" style={{fontFamily:"'Aref Ruqaa', serif"}}>Contact Us</p>
              <div className="p-3">
                <div className="row mb-3">
                  <div className="col-2"><MdOutlineCall className="h1 text-warning rounded-circle bg-white " /></div>
                  <div className="col-10">
                    <p className="text-white h5">Call Us</p>
                    <p className="text-warning h5">+91 80556 80290</p>
                  </div>
                </div>

                {/* <div className="row mb-3">
                  <div className="col-2"><MdMarkEmailRead className="h1 text-warning rounded-circle bg-white " /></div>
                  <div className="col-10">
                  <p className="text-white h5">Email Us</p>
                    <p className="text-warning h5">info@urabbo.com</p>
                  </div>
                </div> */}

                <div className="row mb-3">
                  <div className="col-2"><MdMarkEmailRead className="h1 text-warning rounded-circle bg-white " /></div>
                  <div className="col-10">
                    <p className="text-white h5">Sales and Marketting</p>
                    <p className="text-warning h5">sales@urabbo.com</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-2"><MdMarkEmailRead className="h1 text-warning rounded-circle bg-white " /></div>
                  <div className="col-10">
                    <p className="text-white h5">Career</p>
                    <p className="text-warning h5">career@urabbo.com</p>
                  </div>
                </div>
                <br/>

              </div>
            </div>
            </div>

          </div>
        </div>
        <div className="text-white text-center h3" style={{fontFamily:"'Aref Ruqaa', serif"}}>Mumbai&nbsp;&nbsp;|&nbsp;&nbsp;Pune&nbsp;&nbsp;</div>
        <div style={{backgroundColor:theme}}><p className="text-center text-warning p-3 h6">Copyright © 2022 Think Luxury Think Urabbo</p></div>
      </div>

    )
    const mobileFooter=()=>(
      <>
        <div  style={{backgroundImage:"url('/images/bg-6.jpg')"}}>
            <div className="p-2 col-12 col-md-6">
            <div className="rounded" style={{backgroundColor:theme,opacity:"0.9",fontFamily:"'Aref Ruqaa', serif"}}>
              <p className="h3 text-center text-warning p-2" style={{fontFamily:"'Aref Ruqaa', serif"}}>Office Address</p>
              <div className="p-3">
                <div className="row mb-3">
                  <div className="col-2"><MdLocationOn className="h1 text-warning rounded-circle bg-white " /></div>
                  <div className="col-10">
                    <p className="text-white h5">Mumbai Address</p>
                    <p className="text-warning h5">Satara Palaza office no 160 sector 19B plam beach road Vashi Navi Mumbai</p>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-2"><MdMarkEmailRead className="h1 text-warning rounded-circle bg-white " /></div>
                  <div className="col-10">
                  <p className="text-white h5">Pune Address</p>
                    <p className="text-warning h5">Sr No 251/4 ,Basera house , Vrindavan Nagar, near sus hospital, Sus, Pune, Maharashtra 411021</p>
                  </div>
                </div>

              </div>
            </div>
            </div>


           <div className="p-2 col-12 col-md-6 text-center">
            <div className="rounded" style={{backgroundColor:theme,opacity:"0.9",fontFamily:"'Aref Ruqaa', serif"}}>
              <p className="h3 text-center text-warning p-2" style={{fontFamily:"'Aref Ruqaa', serif"}}>Contact Us</p>
              <div className="p-3">
                <div className="text-center mb-3">
                  <div className=" text-center"><MdOutlineCall className="h1 text-warning text-center rounded-circle bg-white " /></div>
                  <div className="p-3">
                    <p className="text-white h5">Call Us</p>
                    <p className="text-warning h5">+91 80556 80290</p>
                  </div>
                </div>

                {/* <div className=" p-3 mb-3 text-center">
                  <div className=""><MdMarkEmailRead className="h1 text-warning rounded-circle bg-white " /></div>
                  <div className="">
                  <p className="text-white h5">Email Us</p>
                    <p className="text-warning h5">info@urabbo.com</p>
                  </div>
                </div> */}

                <div className="p-3 text-center mb-3">
                  <div className=""><MdMarkEmailRead className="h1 text-warning rounded-circle bg-white " /></div>
                  <div className="">
                    <p className="text-white h5">Sales and Marketting</p>
                    <p className="text-warning h5">sales@urabbo.com</p>
                  </div>
                </div>

                <div className="p-3 text-center mb-3">
                  <div className=""><MdMarkEmailRead className="h1 text-warning rounded-circle bg-white " /></div>
                  <div className="">
                    <p className="text-white h5">Career</p>
                    <p className="text-warning h5">career@urabbo.com</p>
                  </div>
                </div>


              </div>
            </div>
            </div>
           


            </div>
            <div className="text-white text-center h3" style={{fontFamily:"'Aref Ruqaa', serif"}}>Mumbai&nbsp;&nbsp;|&nbsp;&nbsp;Pune&nbsp;&nbsp;|&nbsp;&nbsp;Dubai</div>
        <div style={{backgroundColor:theme}}><p className="text-center text-warning p-3 h6"></p></div>
        </>
    )


    return(
        <div>
           <div className="d-none d-md-block">{laptopFooter()}</div>
           <div className="d-block d-md-none">{mobileFooter()}</div>
          {/*whatsapp*/}
          <div class="elfsight-app-6c2b3ebe-7fe5-46aa-a5f4-c954c639aa41"></div>
        </div>
    )
}

export default Footer
