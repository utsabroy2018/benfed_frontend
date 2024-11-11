import React, { useEffect, useState } from 'react'
import scroll_top from "../Assets/images/scroll_top.png";
import { BASE_URL } from '../routes/config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Detector, Online, Offline} from "react-detect-offline"


function FooterCus() {

const [getImportantLinks, setImportantLinks] = useState([]);

const fetchdata = ()=>{
  
  axios.post(`${BASE_URL}/wapi/qlinkslist`,
 {
   auth_key:"xxxxx",
 }
 // ,
 // {
 //     headers: {
 //         Authorization: loginData.token,
 //     },
 // }
 ).then(res => {

   if(res.status == '200'){
     
     if(res.data.suc > 0){
         setImportantLinks(res?.data?.msg);
         // setFolderLocation()
         console.log(res.data.msg[0].title , 'uuuuuuuuuuuuuuuuuuuuuu', res?.data?.msg);

         // pageDataCheck = res.data.status;
     } else {
        setImportantLinks([])
        // pageDataCheck = res.data.status;
     }

     }

 }) 

}


useEffect(()=>{
  // fetchdata()
},[])

  return (
    <>
    <div class="footerBlue">
	<div class="wrapper">
    <div class="col-sm-9 float-left footerLeft">
    <h2>More Links</h2>
    <ul>
    <li><Link to="/">Home</Link></li> 
    <li><Link to="/about">About</Link></li> 
    <li><Link to="/department">Department </Link></li> 
    <li><Link to="/publication-reports">Publication & Reports</Link></li> 
    <li><Link to="/society-corner">Society's Corner</Link></li> 
    <li><Link to="/events">Events</Link></li> 
    <li><Link to="/notificationsorders">Notice & Tenders</Link></li> 
    <li><Link to="/gallery">Gallery</Link></li> 
    <li><Link to="/contact-us">Contact Us</Link></li> 
    </ul>
    </div>
    {/* <div class="col-sm-3 float-left footerMidle">
    <h2>Important Links</h2>
    <ul>
      {getImportantLinks.map(item=>

      <li><Link to={item.links} target="_blank">{item.title}</Link> </li>

      )}

    </ul>
    </div> */}
    <div class="col-sm-3 float-left footerRight">
    <h2>Get in Touch</h2>
    <ul class="address">
    <li class="addresList">
    Southend Conclave, 3rd Floor, 1582 Rajdanga Main Road, Kolkata - 700 107</li>
    <li class="emailList"><a href="mailto:info@benfed.org ">info@benfed.org </a></li>
    <li class="phonList">+91 33 2441 4366/67</li>
    </ul>
    
    </div>
    </div>
</div>
	
<div class="footerWhite">Copyright © 2024 Co-operative Election Commission, West Bengal. All rights reserved.</div>
	
<a href="#" class="scroll_top"> <img src={`${scroll_top}`} alt=""/> </a>
    </>
  )
}

export default FooterCus