import React from 'react'

export default function Tools() {
    return (
        <div>
        <div id="Tools">
          <div className="container">
            <div className="text d-flex flex-column justify-content-center align-items-center mt-5 pt-5 text-center">
              <h1>Tools</h1>
              <p>
              My weapons of choice to help tackle any project.
              </p>
            </div>
            <div className="row d-flex align-items-center justify-content-center media">
              <div className="col-12 col-md-6 col-lg-3  ">
                <div className="card d-flex align-items-center justify-content-center">
                  <img
                    className="card-img-top img-fluid"
                    src="/images/skills/js.png"
                    alt="js logo"
                  />
                  <div className="card-body ">
                    <h5 className="card-title text-center">JavaScript</h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3  ">
                <div className="card d-flex align-items-center justify-content-center p-2">
                  <img
                    className="card-img-top img-fluid"
                    src="/images/skills/react.png"
                    alt="js logo"
                  />
                  <div className="card-body ">
                    <h5 className="card-title text-center">React Js</h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3  ">
                <div className="card d-flex align-items-center justify-content-center p-2">
                  <img
                    className="card-img-top img-fluid"
                    src="/images/skills/bootstrap.png"
                    alt="js logo"
                  />
                  <div className="card-body ">
                    <h5 className="card-title text-center">Bootstrap</h5>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3  ">
                <div className="card d-flex align-items-center justify-content-center p-2">
                  <img
                    className="card-img-top img-fluid"
                    src="/images/skills/html5.png"
                    alt="js logo"
                  />
                  <div className="card-body ">
                    <h5 className="card-title text-center">HTML 5</h5>
                  </div>
                </div>
              </div>
  
              
            </div>
          </div>
        </div>
      </div>
    );
}
