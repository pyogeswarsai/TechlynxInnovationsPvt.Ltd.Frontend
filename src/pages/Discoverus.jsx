import React from 'react';

import Navbar from '../components/nav';
import AboutUs from '../components/AboutUs';
import MeetOurPeople from '../components/MeetOurPeople';
import History from '../components/History';
import CoreValues from '../components/CoreValues';
import PartnerEcosystem from '../components/PartnerEcosystem';
import Awards from '../components/Awards';
import News from '../components/News';
import Location from '../components/Location';
import ServiceFooter from '../components/ServiceFooter';
import '../App.css';

function Discoverus() {
  return (
    <div>
      <Navbar/>
      <AboutUs/>
      <MeetOurPeople/>
      <History/>
      <CoreValues/>
      <PartnerEcosystem/>
      <Awards/>
      <News/>
      <Location/>
      <ServiceFooter />
    </div>
  );
}

export default Discoverus;