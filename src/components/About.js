import React from "react";

export default function About() {
  return (
    <div>
      <div className="container">
        <div className="row aboutSection">
          <div className=" col-lg-6 col-md-6 col-12">
            <img src="/images/me.jpg" alt="me" className="img-fluid " />
          </div>
          <div className=" col-lg-6 col-md-6 col-12">
            <div className="about-text">
              <h1 className="w-50">
                Hello! I'm Yasmin Ibrahim, A FrontEnd Developer From Alexandria,
                Egypt. Living In Riyadh , KSA
              </h1>
              <p className="w-100 pr-5 text-muted text-capitalize">
                After graduating with a bachelor’s in computer science
                department of information systems , i worked as a php developer
                with laravel freamwork for SANA technology company in alexandria
                Egypt we were working on an ERP system for medicine company and
                after that i worked for Wide horizons company we were working on
                inhancing and developing an ERP system for international schools
                in egypt.
              <br/>
                  After that i moved to Riyadh KSA and i decided to work
                  remotely and improving my skills and learning more about my
                  career.
               <br/>
                  now i am developing my frontend career path and i am
                  passionated and interested in a challenging technical track
                  career in a software development environment, where I can be
                  an added value, grow my experience, utilize my abilities and
                  develop my career path. I have developed a strong
                  understanding of JavaScript (ES5 & ES6), React, Node.js,
                  Express, PostgreSQL, HTML5, and CSS3. As a developer, I find a
                  lot of joy and excitement utilizing my skills to help
                  troubleshoot bugs and pushing projects forward.
            in a field that is constantly being pushed to new boundaries. Feel free to
                  connect with me! Let's talk about web dev, tech, sports,
                  photography, video games, cooking, or how I can be of help to
                  your team or business! I'd love to get to know more developers
                  and expand my network. I also love to discuss movies specially
                  marvel movies .
              
              </p>
              <h4>Let’s build something cool.</h4>
              <ul >
                <li className="text-muted"> <span className="text-primary">  Mail: </span> yasmin_ibrahim344@yahoo.com</li>
                <li className="text-muted">  <span className="text-primary"> Phone: </span>(966) 546548935 </li>
                <li className="text-muted">  <span className="text-primary"> LinkedIn: </span>https://www.linkedin.com/in/yasmin-ibrahim-b37976146/ </li>
                <li className="text-muted">  <span className="text-primary"> GitHub: </span>https://github.com/yasmin203/</li>
              </ul>
              <a href='/images/yasmin_ibrahim_resume2021.pdf' download >RESUME</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
