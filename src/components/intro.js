import React from 'react'

export default function Intro() {
  return (
    <div className="intro" id="home">
      <>
      <div className="heading">
        <div className="sub-heading">
            Hi, my name is <br />
        </div>
        <div className="main-heading">
            Chirag Goyal <br />
            <div className="head-2">I'm a Full Stack Developer<br /></div>
        </div>
        <div className="sub-heading-2">
            I'm a full-stack web developer who loves to work on creative and challenging websites. I'm 
            <br />currently focused on making React based user Interfaces.
        </div>
        <a href="#Skills"><button type="button" className="btn btn-outline-light intro-button">View Skills &rarr;</button></a>
      </div>
      </>  
    </div>
  )
}
