import React, {useState} from 'react';
import { Container, Row, Col, Input, Button, FormGroup, Label, Form } from "reactstrap";
import axios from 'axios';
import "./action.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Action = () => {

  

  const contacts = [
    {
      name: 'Lets Start Project With Our Company & Booking Now !',
      role: 'The BIO CNG plants developed by Gruner Renewables using are highly efficient, cost-effective, and environmentally friendly. Our team of experts has been working closely with clients to provide customized solutions that meet their specific requirements.',
      email: 'info@gmail.com',
      phone: '+919988776655',
      aosDelay: 0
    },
    // Add more contacts if needed
  ];

  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    date: '',
    time: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    if (!form.name || !form.email || !form.mobile || !form.service || !form.date || !form.time || !form.comment) {
      toast.error('Please fill in all required fields.');
      return;
    }
    e.preventDefault();
    try {
      const baseUrl = "http://3.111.159.31:3411/api/user"
      const response = await axios.post(`${baseUrl}/callback/add`, form);
      toast.success(response.data.meta.msg);
      console.log('Form submitted successfully', response.data.meta);
    } catch (error) {
      toast.error('There was an error booking the appointment!');
      console.error('There was an error submitting the form!', error);
    }
  };
  
  return (
    <>
    <ToastContainer />
    <section className="contact-sec ">
      
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="text-center mb-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration={1500}>Contact</h2>
          </Col>
        </Row>
        <div className="d-line aos-init" data-aos="true" data-aos-duration={1500} />
        <Row className="align-items-center pt-lg-5 mob-line">
          {contacts.map((contact, index) => (
            <Col md={6} key={index}>
              <div className={`contact-wrapper ${index === 0 ? 'first' : ''} aos-init`} data-aos="fade-up" data-aos-duration={1500} data-aos-delay={contact.aosDelay}>
                <h3>{contact.name}<br />{contact.role}</h3>
                <div className="d-flex flex-wrap gap-5 floating">
                  <p>E-mail<br /><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                  <p className="ms-lg-5">Phone<br /><a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
                </div>
              </div>
            </Col>
          ))}
         <Col lg={6} className="fadeInUp px-5" data-aos="fade-up" data-aos-delay="500">
         <Form onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col xs={12} sm={6}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              style={{ height: 55 }}
              required
            />
          </Col>
          <Col xs={12} sm={6}>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              style={{ height: 55 }}
              required
            />
          </Col>
          <Col xs={12} sm={6}>
            <Input
              type="text"
              name="mobile"
              placeholder="Your Mobile"
              value={form.mobile}
              onChange={handleChange}
              style={{ height: 55 }}
              required
            />
          </Col>
          <Col xs={12} sm={6}>
            <Input
              type="select"
              name="service"
              value={form.service}
              onChange={handleChange}
              style={{ height: 55 }}
              required
            >
              <option value="">Choose Service</option>
              <option value="Service 1">Service 1</option>
              <option value="Service 2">Service 2</option>
              <option value="Service 3">Service 3</option>
            </Input>
          </Col>
          <Col xs={12} sm={6}>
            <FormGroup>
              <Input
                type="text"
                name="date"
                placeholder="Choose Date"
                value={form.date}
                onChange={handleChange}
                data-toggle="datetimepicker"
                style={{ height: 55 }}
                required
              />
            </FormGroup>
          </Col>
          <Col xs={12} sm={6}>
            <FormGroup>
              <Input
                type="text"
                name="time"
                placeholder="Choose Time"
                value={form.time}
                onChange={handleChange}
                data-toggle="datetimepicker"
                style={{ height: 55 }}
                required
              />
            </FormGroup>
          </Col>
          <Col xs={12}>
            <Input
              type="textarea"
              name="comment"
              rows={5}
              placeholder="Comment"
              value={form.comment}
              onChange={handleChange}
              required
            />
          </Col>
          <Col xs={12}>
            <Button color="primary" className="w-100 py-3" type="submit">
              Book Appointment
            </Button>
          </Col>
        </Row>
      </Form>
      
          </Col>
        </Row>
      </Container>
    </section>
    </>
    
  );
}

export default Action;
