import React from 'react';
import { Container, Row, Col, Button, Input } from 'reactstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Logo from "../../assets/logo.png"

class Footer extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }

  render() {
    return (
      <div
        className="container-fluid bg-dark text-light footer my-2 mb-0 py-5"
        data-aos="fade-in"
      >
        <Container>
          <Row className="g-5">
            <Col lg={3} md={6}>
              <h4 className="text-white mb-4">Get In Touch</h4>
              <h2 className="text-primary mb-4 logo">
                {/* <i className="fa fa-c text-white me-2 " /> */}
               <img src={Logo} alt="" />
              </h2>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                info@example.com
              </p>
            </Col>
            
      <Col lg={3} md={6}>
        <h4 className="text-light mb-4">Quick Links</h4>
        <Link to="/about-us" className="text-white text-decoration-none d-block">About Us</Link>
        <Link to="/contact-us" className="text-white text-decoration-none d-block">Contact Us</Link>
        <Link to="/bio-ethonol" className="text-white text-decoration-none d-block">Bio Ethanol</Link>
        <Link to="/bio-diesel" className="text-white text-decoration-none d-block">Bio Diesel</Link>
        <Link to="/gbc" className="text-white text-decoration-none d-block">GBC</Link>
      </Col>
      <Col lg={3} md={6}>
        <h4 className="text-light mb-4">Popular Links</h4>
        <Link to="/gallery" className="text-white text-decoration-none d-block">Gallery</Link>
        <Link to="/privacy" className="text-white text-decoration-none d-block">Privacy Policy</Link>
        <Link to="/terms" className="text-white text-decoration-none d-block">Terms &amp; Conditions</Link>
        <Link to="/whatsapp" className="text-white text-decoration-none d-block">Whatsapp</Link>
      </Col>
            <Col lg={3} md={6}>
              <h4 className="text-light mb-4">Newsletter</h4>
              <form action="#">
                <div className="input-group">
                  <Input
                    type="text"
                    className="form-control p-3 border-0"
                    placeholder="Your Email Address"
                  />
                  <Button color="primary">Sign Up</Button>
                </div>
              </form>
              <h6 className="text-white mt-4 mb-3">Follow Us</h6>
              <div className="d-flex pt-2">
                <Button color="outline-light" className="me-1">
                  <i className="fab fa-twitter" />
                </Button>
                <Button color="outline-light" className="me-1">
                  <i className="fab fa-facebook-f" />
                </Button>
                <Button color="outline-light" className="me-1">
                  <i className="fab fa-youtube" />
                </Button>
                <Button color="outline-light">
                  <i className="fab fa-linkedin-in" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container  className='copyright container-fluid  text-light py-4'>
          <Row>
            <Col md={6} className="text-center text-white text-md-start mb-3 mb-md-0">
              © <a href="#" className='text-white'>Your Site Name</a>, All Right Reserved.
            </Col>
           
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
