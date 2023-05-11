import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
        <a href="https://www.facebook.com/aletorres00" target="blank">
         <BsFacebook style={{width:'50px', height:'50px', margin:'10px'}} />
       </a>
       <a href="https://www.instagram.com/aletorres0" target="blank">
            <BsInstagram style={{width:'50px', height:'50px', margin:'10px'}}/>
       </a>
       <a href="https://www.twitter.com/aletorres0_" target="blank">
            <BsTwitter style={{width:'50px', height:'50px', margin:'10px'}}/>
       </a>
       <a href="https://github.com/FoxxxDeveloper   " target="blank">
         <BsGithub style={{width:'50px', height:'50px', margin:'10px'}}/>
       </a>
        
       
        
        
    </div>
  )
}

export default Footer