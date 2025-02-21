// import React from 'react'

import NavBarLanding from "../components/NavBarLanding"

function About() {
  return (
    <>
        <NavBarLanding/>
        <div className="relative w-full h-screen ">
            {/* Left top gradient */}
            {/* <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-rose-300 to-transparent rounded-full blur-3xl"></div> */}
            
            {/* Bottom right gradient */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-rose-300 to-transparent rounded-full blur-3xl"></div>
          </div>
      
    </>
  )
}

export default About
