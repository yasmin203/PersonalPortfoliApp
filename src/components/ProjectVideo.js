import React from 'react'

function ProjectVideo(props) {
    return (props.trigger)? (
      <>
     
      {props.children}
      <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
           video
            </div>
            <div className="modal-body">
            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
            <p>descreption</p>
         <p> Disclaimer: </p><h6>ebsite is for demonstractive purposes only. No real transactions are to be made. </h6>

<p>TECHNOLOGIES</p>
<h6>REACT.JS | HTML 5 | CSS 3 | BOOTSTRAP 4</h6>
<p>Industry</p>
<h6>E-commerce</h6>
<p>LIVE WEBSITE</p>
<h6>HTTPS://CMRA.JOHNNYUNGCODES.COM/</h6>
<p>GITHUB</p>
<h6>
HTTPS://GITHUB.COM/JOHNNYUNG91/CMRA-JS</h6>



            </div>
          
          </div>
        </div>
      </div>

      </>
        
 )  :"" 
}
export default ProjectVideo