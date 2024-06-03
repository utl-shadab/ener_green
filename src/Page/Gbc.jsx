import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal,  ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import "../components/Contact/contact.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../index.css"
import Action from '../components/Action/Action';

const Gbc = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
      setModalOpen(!modalOpen);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted!");
      
      toggleModal();
  };
  const features = [
    {
        image: "https://gremedia.sgp1.digitaloceanspaces.com/media/Untitled%20(9).png",
        title: "Environment Friendly",
        description: "BIO CNG plants are a sustainable alternative to traditional fossil fuels and help to reduce greenhouse gas emissions. The biogas produced from organic waste is a renewable energy source that can be used to power vehicles, generate electricity, or for heating purposes.",
        delay: 100
    },
    {
        image: "https://gremedia.sgp1.digitaloceanspaces.com/media/Untitled%20(7).png",
        title: "Cost Effective",
        description: "Setting up a BIO CNG plant in India can be a cost-effective solution for organizations and industries that generate a large amount of organic waste. By converting this waste into biogas, companies can save on disposal costs and generate revenue from the sale of CNG.",
        delay: 300
    },
    {
        image: "https://gremedia.sgp1.digitaloceanspaces.com/media/ourTech.png",
        title: "Customizable",
        description: "BIO CNG plants can be designed and customized to meet the specific needs of different industries and organizations. Gruner Renewables works closely with clients to provide tailor-made solutions that meet their requirements and optimize the production of biogas.",
        delay: 500
    }
];
// Initialize AOS
React.useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <div>
      <Container className="py-5">
            <Row>
                <Col xs={12} lg={6} className="my-5 order-lg-2">
                    <span className="biospan p-lg-3 p-3">GBC</span>
                    <h1 className="headingenergy pt-lg-5 pt-5 pb-5">Energy For A Sustainable And Environmentally Friendly Society.</h1>
                    <div className="biogaspara pt-lg-3 pt-3 pb-3 pb-lg-0">
                        <p>We work on the motto of ‘Zero waste to landfill.’ In other words, we turn trash to treasure. Biogas can aid in filling a shortcoming in the supply of green energy. Because we require an environmentally friendly option to make ends meet while there is no breeze and no sunlight. Biogas is this alternative, and that is what we are aiming towards. As a member of the Indian Biogas Association, it is our responsibility to help India achieve its goal of becoming a global leader in production of clean energy within a decade</p>
                    </div>
                    <div className="pt-lg-5 pt-5">
                            <Button className="biogasbutton" onClick={toggleModal}>Get a Quote </Button>
                    </div>
                </Col>
                <Col xs={12} lg={6} className="my-lg-5">
                    <img src="https://gremedia.sgp1.digitaloceanspaces.com/media/92e39d7b552ac3497642a931066f339b.jpeg" className="plantsetup2 img-fluid" alt="Plant Setup" />
                </Col>
            </Row>
        </Container>
        <Container fluid className="pb-lg-5 px-5 pt-lg-5">
            <Row className="g-2 p-lg-3 resposvibeblocks">
                {features.map((feature, index) => (
                    <Col key={index} xs={12} lg={4} className="pt-5 pt-lg-0" data-aos="fade-up" data-aos-delay={feature.delay}>
                        <div className="p-3 homepagegreenborderparagraph border-colorofhomepagenbiogas">
                            <span className="ryticonimage">
                                <img src={feature.image} alt="" />
                            </span>
                            <h1 className="homepagesgreenborderheader">{feature.title}</h1>
                            <div className="homepagegreenborderparagraph pb-lg-3">
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
        <Action/>
        <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Get a Quote</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Enter your name" required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="subject">Subject</Label>
                            <Input type="text" name="subject" id="subject" placeholder="Enter subject" required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="mobile">Mobile Number</Label>
                            <Input type="tel" name="mobile" id="mobile" placeholder="Enter mobile number" required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="message">Message</Label>
                            <Input type="textarea" name="message" id="message" placeholder="Enter your message" required />
                        </FormGroup>
                        <ModalFooter>
                            <Button type="submit" color="primary">Submit</Button>{' '}
                            <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalBody>
            </Modal>
    </div>
  )
}

export default Gbc
