import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Label, Input, Button } from 'reactstrap';
import AOS from "aos";
import "aos/dist/aos.css";
import "../Contact/contact.css"
import ContactImage from "../../assets/contactimg.jpg"
import Instagram from './Instagram';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  //const [contactInfo, setContactInfo] = useState({});
  const [frameSrc, setFrameSrc] = useState("");
  const [contactInfo, setContactInfo] = useState([]);
  const [emptyError, setEmptyError] = useState("")

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.mobile || !formData.message) {
      setEmptyError('Please fill in all required fields.');
      return;
    }

    try {
      const baseUrl = "http://3.111.159.31:3411/api/user"
      const response = await axios.post(`${baseUrl}/contact-us/add`, formData);
      setEmptyError("")
      toast.success(response?.data?.meta?.msg || 'Form submitted successfully.');
    } catch (error) {
      toast.error('There was an error submitting the form. Please try again.');
      console.error('Error submitting form', error);
    }
  };

  useEffect(() => {
    const fetchContactInfo = async () => {
        const baseUrl = "http://3.111.159.31:3411/api/user"
        try {
            const response = await axios.get(`${baseUrl}/contact-info/details`); // Replace with your API endpoint
            setContactInfo(response?.data?.data);
            console.log(contactInfo)
            //setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchContactInfo();
}, []);


  

  return (
    <>
    <ToastContainer className="contact_us_toast" />
      <section className="contact-form">
        <Container>
          <Row className="row-gap-4 align-items-center">
            <Col lg={6} className="text-lg-start text-center" style={{height: "100%"}}>
              <img
                src={ContactImage}
                alt="Contact us"
                className="img-fluid wow fadeInLeft"
                data-aos="fade-left"
                style={{height: "100%", width: "100%", objectFit: "cover"}}
              />
            </Col>
            <Col lg={6} className="text-center text-lg-start">
              <h2 className="mb-3 mb-lg-4 about-title wow fadeInRight" data-aos="fade-right" data-aos-delay="100ms">
              Get in Touch with Us!
              </h2>
              <p className="mb-3 mb-lg-4 wow fadeInRight" data-aos="fade-right" data-aos-delay="200ms">
                {contactInfo.description}
              </p>
              <form onSubmit={handleSubmit} id="contactForm" noValidate>
        <div className="mb-lg-5 mb-3 wow fadeInRight" data-aos="fade-right" data-aos-delay="300ms">
          <label htmlFor="firstName" className="form-label">First Name*</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-lg-5 mb-3 wow fadeInRight" data-aos="fade-right" data-aos-delay="300ms">
          <label htmlFor="lastName" className="form-label">Last Name*</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-lg-5 mb-3 wow fadeInRight" data-aos="fade-right" data-aos-delay="600ms">
          <label htmlFor="email" className="form-label">Email*</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-lg-5 mb-3 wow fadeInRight" data-aos="fade-right" data-aos-delay="600ms">
          <label htmlFor="mobile" className="form-label">Mobile*</label>
          <input
            type="text"
            name="mobile"
            className="form-control"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-lg-5 mb-3 wow fadeInRight" data-aos="fade-right" data-aos-delay="900ms">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            id="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="text-center wow fadeInRight" data-aos="fade-right" data-aos-delay="1200ms">
          <button type="submit" className="btn btn-outline-secondary">Submit</button>
        </div>
        <span style={{fontSize: "12px", color: "#ff0000"}}>{emptyError}</span>
      </form>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contact-sec border-0 font-opt">
        <Container>
          <Row className="row-gap-4 reverse pt-lg-5 mob-line">
            <Col md={6}>
              <div className="contact-wrapper first wow fadeInLeft" data-wow-delay="100ms" style={{padding: "0"}}>
                <h3 className='contact_tagline'>
                  Customer Care, Anytime
                  <span>We Want to Hear From You</span></h3>
                <div className='contact_us_info'>
                  <div className='info_ele'>
                    <h3>Email</h3>
                    <p><a href={`mailto:${contactInfo?.email}`}>{contactInfo?.email}</a></p>
                  </div>
                  <div className='info_ele'>
                    <h3>Phone</h3>
                    <p><a href={`tel:+${contactInfo?.countryCode} ${contactInfo?.mobile}`}>{`+${contactInfo?.countryCode} ${contactInfo?.mobile}`}</a></p>
                  </div>
                  <div className='info_ele'>
                    <h3>Address</h3>
                    <p>{contactInfo?.address}</p>
                  </div>
                  <div className='info_ele'>
                    <h3>Open</h3>
                    <p>Mon-Sat: 9;30-6:30</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-center wow fadeInRight">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112096.4556984558!2d77.30378919167597!3d28.59934959694127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cef1146ca8267%3A0xe2ad03b2b84fa587!2sBH%2032%2C%20Sector%2070%2C%20Noida%2C%20Basi%20Bahuddin%20Nagar%2C%20Uttar%20Pradesh%20201307!3m2!1d28.5993745!2d77.38619059999999!5e0!3m2!1sen!2sin!4v1717322229680!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
            ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
      <Instagram />
    </>
  );
};

export default ContactPage;
