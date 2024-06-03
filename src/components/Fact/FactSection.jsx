import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./fact.css"
import First from "../../assets/first.jpg"
import Second from "../../assets/second.jpg"
import Third from "../../assets/third.jpg"
import { Link } from 'react-router-dom';

const FactSection = () => {
    // Initialize AOS
    React.useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // Array of objects representing data for each column
    const factsData = [
        
        {
            imgSrc: First,
            title: 'CBG',
            text: 'We provide CBG, a sustainable and renewable energy source produced from organic waste, offering an eco-friendly alternative to conventional fuels.',
            delay: 300,
            url: '/cbg'
        },
        {
            imgSrc: Second,
            title: 'Bio Ethonol',
            text: 'Bioethanol is ethanol (C2H5OH), or ethyl alcohol, produced by biological methods. It is among the best established of biofuels. Bioethanol is used mostly as an additive to gasoline (petrol).',
            delay: 500,
            url: '/bio-ethonol'
        },
        {
            imgSrc: Third,
            title: 'Bio Diesel',
            text: 'Biodiesel is an alternative fuel similar to conventional or ‘fossil’ diesel. Biodiesel can be produced from straight vegetable oil, animal oil/fats, tallow and waste cooking oil.',
            delay: 700,
            url: '/bio-diesel'
        }
        
    ];

    return (
        <Container fluid className="my-5 p-0">
            <Row className="g-0">
                {factsData.map((fact, index) => (
                    <Col key={index} xl={4} sm={6} data-aos="fade-up" data-aos-delay={fact.delay}>
                        <div className="position-relative">
                            <img className="img-fluid w-100 facts-img" src={fact.imgSrc} alt="" />
                            <div className="facts-overlay">
                                <h1 className="display-1">{`0${index + 1}`}</h1>
                                <h4 className="text-white mb-3">{fact.title}</h4>
                                <p className="text-white">{fact.text}</p>
                                <Link className="text-white small" to={fact.url}>
                READ MORE
                <i className="fa fa-arrow-right ms-3" />
            </Link>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default FactSection;
