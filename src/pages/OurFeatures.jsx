import React from 'react'
import ServiceHero from '../components/ServiceHero'
import ServiceCard from '../components/ServiceCard'
import ServiceNavbar from '../components/ServiceNavbar'
import ServiceFooter from '../components/ServiceFooter'

const OurFeatures = () => {
  return (
    <div>
        <ServiceNavbar />
        <ServiceHero />
        <ServiceCard />
        <ServiceFooter />
    </div>
  )
}

export default OurFeatures