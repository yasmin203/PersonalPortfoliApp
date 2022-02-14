import React from 'react'
import { Link } from 'react-router-dom'
import ProjectVideo from './ProjectVideo'
import '../App.css'

export default function Projects() {
  
    return (
        <div>
            <div id='Projects'>
            <div className='container '>
                <div className='text d-flex flex-column justify-content-center align-items-center pt-5'>
           <h1>Projects</h1>
           <p>From ideation to creation, here are some applications that I have developed</p>
           <ul>
               <button data-filter="*" className='btn btn-transparent active'>All</button>
               <button data-filter=".cat1" className='btn btn-transparent'>React</button>
               <button data-filter=".cat2" className='btn btn-transparent'>API</button>
               <button data-filter=".cat3" className='btn btn-transparent'>CSS</button>
               <button data-filter=".cat4" className='btn btn-transparent'>Bootstrap</button>
           </ul>
           </div>
           <div className='row mt-5 d-flex justify-content-center align-items-center'>
               <div className='col-lg-4 col-md-6 col-12 semicontainer'>
               <div className="card project">
                <img className="card-img-top project" src="/images/projects/p2.png" alt="project__1 " />
                <div className='img-content'>
                <div className="desc">

                    <a href="/" >CONSTRUCTION</a>
                    <p>A  responsive web application for construction company displaying there info and services and more ... </p>
                </div>
                </div>
                </div>
               </div>

               <div className='col-lg-4 col-md-6 col-12 semicontainer '>
               <div className="card project">
                <img className="card-img-top project" src="/images/projects/p4.png" alt="project__2" />
                <div className='img-content'>
                 <div className="desc">
                    {/* <Link to="/projectVideo" id='link1'  >Faculty</Link> */}
                    <button type='button' id='projectModal' data-toggle="modal" data-target="#exampleModalLong">
                    Faculty      </button>
                    <p>A  responsive web application for faculty  displaying there info and services and more ... </p>
                    </div>

                </div>
                <ProjectVideo trigger={true}></ProjectVideo>

                </div>


               </div>

               <div className='col-lg-4 col-md-6 col-12 semicontainer'>
               <div className="card project">
                <img className="card-img-top project" src="/images/projects/p5.png" alt="project__3" />
                <div className='img-content'>
                <div className="desc">

                    <a href="/" >CONSTRUCTION</a>
                    <p>A  responsive web application kasper clone company displaying there info and services and more ... </p>
                </div>
                </div>
                </div>
               </div>
           </div>
           </div>
           </div>
        </div>
    )
}
