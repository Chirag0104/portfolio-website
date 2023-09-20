import React from 'react'
import html from './html.png'
import css from './css.png'
import js from './js.png'
import react from './react.png'
import github from './github.png'
import sql from './sql.png'
import php from './php.png'
import php_admin from './php_admin.png'

export default function Skills() {
  return (
    <div>
        <div className="skills-container" id="Skills">
            <div className="child-container-2">
                <div className="skills-heading">
                <u className='about-underline'>Skills</u>
                </div>
                <div className="skills-sub-heading">
                    These are the technologies I've worked with
                </div>
                <div className="skills-cards">
                    <div className="card card-style">
                        <img src={html} className="card-img-top skills-image" alt="..."/>
                        <div className="card-body">
                            <p className="card-text ">HTML</p>
                        </div>
                    </div>
                    <div className="card card-style ">
                        <img src={css} className="card-img-top skills-image" alt="..."/>
                        <div className="card-body">
                            <p className="card-text ">CSS</p>
                        </div>
                    </div>
                    <div className="card card-style ">
                        <img src={js} className="card-img-top skills-image" alt="..."/>
                        <div className="card-body">
                            <p className="card-text ">JAVASCRIPT</p>
                        </div>
                    </div>
                    <div className="card card-style ">
                        <img src={react} className="card-img-top skills-image" alt="..."/>
                        <div className="card-body">
                            <p className="card-text ">REACT</p>
                        </div>
                    </div>
                    <div className="card card-style ">
                        <img src={github} className="card-img-top skills-image" alt="..."/>
                        <div className="card-body">
                            <p className="card-text ">GITHUB</p>
                        </div>
                    </div>
                    <div className="card card-style ">
                        <img src={sql} className="card-img-top skills-image" alt="..."/>
                        <div className="card-body">
                            <p className="card-text ">SQL</p>
                        </div>
                    </div>
                    <div className="card card-style ">
                        <img src={php} className="card-img-top skills-image" alt="..."/>
                        <div className="card-body">
                            <p className="card-text ">PHP</p>
                        </div>
                    </div>
                    <div className="card card-style ">
                        <img src={php_admin} className="card-img-top skills-image" alt="..."/>
                        <div className="card-body">
                            <p className="card-text ">PHP ADMIN</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
