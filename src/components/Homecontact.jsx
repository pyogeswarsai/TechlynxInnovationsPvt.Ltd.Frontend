import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Homecontact.css';
import { Link } from 'react-router-dom';

const Homecontact = () => {
  return (
    <div className="contact-section">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={6} md={8} sm={12}>
            <h1 className="contact-title text-center">
              Get in touch
            </h1>
            <p className="contact-subtext h3">
              Contact us now to explore our innovative solutions!
            </p>

            <div className="office-block mt-4">
              <h4 className='text-warning'>Head Office</h4>
              <p className="fs-5">Guntur:</p>
              <p className='fs-5'>
                <FaMapMarkerAlt className="icon" />
                33-6-73, Arundlepet, 19/3, Opp.Ravindranath Tagore Statue, Guntur, A.P - 522002
              </p>
              <p className='fs-5'>
                <FaEnvelope className="icon " /> 
                <span className="text-break">info@techlynxinnovations.com</span>
              </p>
              <p className='fs-5'>
                <FaPhone className="icon" /> +91 9989681812 <br/>
                <FaPhone className="icon" /> +91 9542982674
              </p>
              <Link to="/contact-us" ><Button variant="primary" className="know-more-btn" >
                Visit Us
              </Button></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homecontact;