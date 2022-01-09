import React from 'react'

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
               <div className='col-lg-4 col-md-6 col-12'>
               <div class="card">
                <img class="card-img-top" src="/images/projects/p1.png" alt="project__1 " />
                </div>
               </div>

               <div className='col-lg-4 col-md-6 col-12'>
               <div class="card">
                <img class="card-img-top" src="/images/projects/p1.png" alt="project__2" />
                </div>
               </div>

               <div className='col-lg-4 col-md-6 col-12'>
               <div class="card">
                <img class="card-img-top" src="/images/projects/p1.png" alt="project__3" />
                </div>
               </div>
           </div>
           </div>
           </div>
        </div>
    )
}
