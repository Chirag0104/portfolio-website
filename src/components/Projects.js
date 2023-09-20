import React from 'react'
import srms from './srms.png'
import zippy from './zippy.png'
import textUtils from './textUtils.png'
import covid from './covid.png'
import jira from './jira.png'
import excel from './excel.png'

export default function Projects() {
  return (
    <div>
        <div className="project-container" id="project">
            
            <div className="project-heading">
                <u className="project-underline">Projects</u>
            </div>
            <div className="project-sub-heading">
                Check out some of my recent work
            </div>
            <div className="project-cards">

                <div className="card text-bg-dark project-card-style">
                    <img src={srms} className="card-img project-image" alt="..." />
                    <div className="demo">
                        <div className="hover-text">Student Result Management System</div>
                        <a target="_blank" href="https://srms-chirag.000webhostapp.com/"><button className = "project-button btn btn-light">Demo</button></a>
                        <a target="_blank" href="https://github.com/Chirag0104/Student-Result-Management-System"><button className = "project-button btn btn-light">Code</button></a>
                    </div>
                </div>

                <div className="card text-bg-dark project-card-style">
                    <img src={zippy} className="card-img project-image" alt="..." />
                    <div className="demo">
                        <div className="hover-text">Zippy</div>
                        <a target='_blank' href='https://chirag0104.github.io/LGMVIP-WEB/'><button className = "project-button btn btn-light">Demo</button></a>
                        <a target='_blank' href='https://github.com/Chirag0104/LGMVIP-WEB'><button className = "project-button btn btn-light">Code</button></a>
                    </div>
                </div>

                <div className="card text-bg-dark project-card-style">
                    <img src={textUtils} className="card-img project-image" alt="..." />
                    <div className="demo">
                        <div className="hover-text">Text Utils</div>
                        <a target='_blank' href='https://chirag0104.github.io/TextUtils/'><button className = "project-button btn btn-light">Demo</button></a>
                        <a target='_blank' href='https://github.com/Chirag0104/TextUtils'><button className = "project-button btn btn-light">Code</button></a>
                    </div>
                </div>

                <div className="card text-bg-dark project-card-style">
                    <img src={covid} className="card-img project-image" alt="..." />
                    <div className="demo">
                        <div className="hover-text">Covid-19 Relief Foundation</div>
                        <a target='blank' href='https://chirag0104.github.io/Payment_Gateway_Integration-TSF/'><button className = "project-button btn btn-light">Demo</button></a>
                        <a target='_blank' href='https://github.com/Chirag0104/Payment_Gateway_Integration-TSF'><button className = "project-button btn btn-light">Code</button></a>
                    </div>
                </div>

                <div className="card text-bg-dark project-card-style">
                    <img src={jira} className="card-img project-image" alt="..." />
                    <div className="demo">
                        <div className="hover-text">Jira Ticket Manager</div>
                        <a target='_blank' href='https://chirag0104.github.io/jira-ticket/'><button className = "project-button btn btn-light">Demo</button></a>
                        <a target='_blank' href='https://github.com/Chirag0104/jira-ticket'><button className = "project-button btn btn-light">Code</button></a>
                    </div>
                </div>

                <div className="card text-bg-dark project-card-style">
                    <img src={excel} className="card-img project-image" alt="..." />
                    <div className="demo">
                            <div className="hover-text">Excel Clone</div>
                        <a target='_blank' href='https://chirag0104.github.io/excel-clone/'><button className = "project-button btn btn-light">Demo</button></a>
                        <a target='_blank' href='https://github.com/Chirag0104/excel-clone'><button className = "project-button btn btn-light">Code</button></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
