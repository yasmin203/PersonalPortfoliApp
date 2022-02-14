import React from 'react'

function ProjectVideo(props) {
    return (props.trigger)? (
      <>
     
      {props.children}
      <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam assumenda numquam eveniet, ipsa ad rem provident sunt tenetur animi vero incidunt atque quas enim quisquam et, iure nulla quis non?
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias accusantium consequatur cupiditate voluptatem, voluptate modi excepturi atque cum ab voluptas. Consequatur nesciunt ducimus, eos repellendus omnis quaerat saepe tempora nobis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quasi sint consequatur amet architecto asperiores porro eaque dolorem, officiis, odio laudantium in id unde saepe delectus totam laboriosam esse repudiandae!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      </>
        
 )  :"" 
}
export default ProjectVideo