import React from 'react'
import {BrowserRouter, Link} from "react-router-dom"
import "../App.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


function Navbar() 
{
  return (

    <div style={{display: "flex", alignItems: "center"}}>
         
         <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"black"}}>
  {/* <i class="fa-solid fa-list" style={{color:"white",fontSize:"30px"}}></i> */}
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
  
</div>
    
        
        <img width="150px" height="70px" src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png" alt='netflix'/>

            <BrowserRouter>
                <Link style={{color:"white" , paddingLeft:"20px",textDecoration:"None",fontSize:"20px"}} className='link'>Tv Shows</Link>
                <Link style={{color:"white",paddingLeft:"20px",textDecoration:"None",fontSize:"20px"}} className='link'>Movies</Link>
                <Link style={{color:"white",paddingLeft:"20px",textDecoration:"None",fontSize:"20px"}} className='link'>Recently Added</Link>
                <Link style={{color:"white",paddingLeft:"20px",textDecoration:"None",fontSize:"20px"}} className='link'>My List</Link>
            </BrowserRouter>
    </div>
  )
}

export default Navbar
