import React from 'react'
import  Navbar from '../components/Contactnav'
import PageOne from '../components/PageOne'
import ContactPage from '../components/ContactPage'
import Homefooter from '../components/Homefooter'


const ContactSection = () => {
  return (
    <div>
      <Navbar />
      <PageOne />
      <ContactPage />
      <Homefooter />
 
    </div>
  )
}

export default ContactSection