import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./why.css"

const Why = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Sample data for demonstration
  const features = [
    { icon: "https://gremedia.sgp1.digitaloceanspaces.com/media/Rectangle%20151.png", title: "Sustainability", description: "We are committed to building a sustainable future by promoting clean and renewable energy sources." },
    { icon: "https://gremedia.sgp1.digitaloceanspaces.com/media/innovation.png", title: "Innovation", description: "We embrace innovative ideas and solutions that challenge the status quo and lead to the development of new technologies and processes ." },
    { icon: "https://gremedia.sgp1.digitaloceanspaces.com/media/innovation2.png", title: "Collaboration", description: "We are dedicated to making a positive impact on society by promoting environmentally friendly practices and contributing to the communities in which we operate." },
    { icon: "https://gremedia.sgp1.digitaloceanspaces.com/media/innovation1.png", title: "Social Responsibility", description: "We believe that working together as a team and collaborating with partners and stakeholders is essential to achieving our mission." }
  ];

  return (
    <section className="why-us">
      <div className="container-xxl py-5 ">
        <Container className='section'>
          <Row className="g-5">
            <Col
              lg={6}
              className="wow fadeInUp "
              data-wow-delay="0.1s"
              data-aos="fade-up"
            >
              <h4 className="section-title">OUR VALUES</h4>

              <p className="mb-4 main-para">
              We uphold our motto of giving this Earth all our services and looking out for best alternatives to make it as green as much blue it is.

We address every new task with excellence and with professionalism in order to determine the innovation and technologies that will provide the quality results.

New initiatives and collaborations are constantly welcomed and sought after by us. Our procedures are always evolving and customer focused.
             
              We work with utmost integrity and passion to seek the outlook for the future. Our goal is to offer solutions that adapt more and more to the demands of the environment in which we live.

We have the honour of working every day to improve and optimise resources from nature, recover garbage, and empower the world to protect the environment. </p>
              {/* Mapping over the features data */}
              {features.map((feature, index) => (
                <div key={index} className="row g-4">
                  <div className="col-12">
                    <div className="d-flex align-items-start my-3">
                      <img
                        className="flex-shrink-0"
                        src={feature.icon}
                        alt="Icon"
                      />
                      <div className="ms-4">
                        <h3 className='why-title'>{feature.title}</h3>
                        <p className="mb-0 why-para">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Col>
            <Col
              lg={6}
              className="wow fadeLeft"
              data-wow-delay="0.5s"
              data-aos="fade-lrft"
            >
              <div className="feature-img">
                <img className="img-fluid" src="https://gremedia.sgp1.digitaloceanspaces.com/media/a830ddf694d5dd5d18b25b5b8deeab2d.jpeg" alt="" />
                <img className="img-fluid" src="https://gremedia.sgp1.digitaloceanspaces.com/media/a830ddf694d5dd5d18b25b5b8deeab2d.jpeg" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Why;
