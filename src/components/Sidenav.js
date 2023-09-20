import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
export default function Sidenav() {
  return (
    <>
    
    <div className="sidenav-container">
        <div className="child-sidenav">
            <a className="sidenav-link" target="_SEJ" rel="noreferrer" href='https://www.linkedin.com/in/chirag-goyal-485352211/'><div className="sidenav-component lin"> Linked In <FaLinkedin style={{color:'rgb(209 213 219)' , fontSize:'25px' , margin:'4px 15px 0px 18px' }} /></div></a>
            <a className="sidenav-link" target="_SEJ" rel="noreferrer" href='https://github.com/Chirag0104/Chirag0104'><div className="sidenav-component gi"> Github <FaGithubSquare style={{color:'rgb(209 213 219)', fontSize:'25px' , margin:' 4px 15px 0px 18px'}} /></div></a>
            <a className="sidenav-link" target="_SEJ" rel="noreferrer" href="mailto:chiraggoyal0104@gmail.com"><div className="sidenav-component em"> Email<FaEnvelope style={{color:'rgb(209 213 219)', fontSize:'25px' , margin:'1px 15px 0px 18px'}}/></div></a>
            <a className="sidenav-link" target="_SEJ" rel="noreferrer" href='https://drive.google.com/file/d/1e0R0FGXi69KV2Aw7Dv2nxeVuSzLm1bug/view?usp=sharing'><div className="sidenav-component re"> Resume<FaEnvelopeOpenText style={{color:'rgb(209 213 219)', fontSize:'25px' , margin:'3px 15px 0px 18px'}}/></div></a>
            
        </div>
        
    </div>
    
    </>
  )
}
