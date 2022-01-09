import React from 'react'
import Typed from 'react-typed'
import Particles from "react-tsparticles";

export default function Header() {
    <Particles
    options={{
      fpsLimit: 60,
      
      particles: {
  
        links: {
          color: "#ffffff",
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 2,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "square",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }}
    />
    return (
       
        <div className='header-wrapper'>
            <div className='main-info'>
                <h1>YASMIN <br/>IBRAHIM  </h1>
                <Typed className='typed-text' 
                strings={["Web Developer","FrontEnd Developer","Coder","Bug Squasher","Software Engeneer ","Web Solution"]} typeSpeed={30}
                backSpeed={60}
                loop />

                <a href='/images/yasmin_ibrahim_resume2021.pdf' download >RESUME</a>
                
            </div>
            
        </div>
    )
} 
