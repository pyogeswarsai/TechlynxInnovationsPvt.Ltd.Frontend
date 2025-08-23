import React, { useState } from 'react'
import Homenavbar from '../components/Homenavbar'
import Homehero from '../components/Homehero'
import Homeservice from '../components/Homeservice'
import Homeabout from '../components/Homeabout'
import Homecareer from '../components/Homecareer'
import Homecontact from '../components/Homecontact'
import Homefooter from '../components/Homefooter'
import AuthModal from '../components/AuthModal'

const Homepage = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div>
        {/* <Homenavbar onOpen={() => setShowAuthModal(true)} /> */}

        {/* Pass onOpen function to Navbar */}
      <Homenavbar onOpen={() => setShowAuthModal(true)} />

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      )}
      
        <div id='home' >
            <Homehero />
        </div>            
        <div id='services' >
            <Homeservice />
        </div>      
        <div id='about'>
          <Homeabout />
        </div>
        <div id='career' >
          <Homecareer />
        </div>
        <div id='contact'>
          <Homecontact />
          <Homefooter />
        </div>
    </div>
  )
}

export default Homepage