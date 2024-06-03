import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './about.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  const sections = [
    {
      title: "We Turn Waste & Discards into Clean Energy!",
      text: "“Bharat Energreen is a trailblazer in the development and implementation of Bio CNG gas plants. With a commitment to sustainability and innovation, we harness the power of organic waste to produce clean, green, and renewable energy. Our bio CNG plants are designed to revolutionize the way we think about and utilize energy resources.",
      image: "https://gremedia.sgp1.digitaloceanspaces.com/media/28cc910f57.jpeg",
      link: "#",
      animationDelay: '0.1s'
    },
    // Add more sections as needed
  ];

  return (
    <section className="new">
      <Container>
        {sections.map((section, index) => (
          <Row key={index} className={`gx-5 align-items-center custom-row wow fadeIn`} data-wow-delay={section.animationDelay}>
             <Col lg={7} className="text-center">
              <div className="aos-init" data-aos="fade-up" data-aos-duration={1500}>
                <img src={section.image} className="img-fluid about-img" alt="rugs" />
              </div>
            </Col>
            <Col lg={5} className="mt-sm-5 custom-margin">
              <div className="aos-init" data-aos="fade-up" data-aos-duration={1500}>
                <h2>{section.title}</h2>
                <p className="new-para mt-lg-3">{section.text}</p>
                <a href={section.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary mt-lg-4">Know More</a>
              </div>
            </Col>
           
          </Row>
        ))}
      </Container>
    </section>
  );
}

export default About;
