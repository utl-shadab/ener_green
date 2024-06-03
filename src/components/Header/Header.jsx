import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import BrowserRouter
import axios from 'axios';
import "./header.css";
import Logo from "../../assets/logo.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [form, setForm] = useState({
    name: '',
    subject: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseUrl = "http://3.111.159.31:3411/api/user"
      const response = await axios.post(`${baseUrl}/quote/add`, form);
      toast.success(response.data.meta.msg);
      console.log('Form submitted successfully', response.data.meta);
    } catch (error) {
      toast.error('There was an error submitting the form!');
      console.error('There was an error submitting the form!', error);
    }
    setModal(false)
  };

  const location = useLocation();
  return (
    <div>
      {/* topbar  */}
      <div className="container-fluid bg-dark text-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-phone me-2" />
              <small><a href="tel:9988776655">9988776655</a></small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <small className="far fa-envelope me-2" />
              <small><a href="mailto:info@bharatenergreen.com">info@bharatenergreen.com</a></small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-home me-2" />
              <small>Adress: new delhi Panjabi bagh</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center mx-n2">
              <a
                className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
                href=""
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
                href=""
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"
                href=""
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-square btn-link rounded-0" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* topbar end  */}
      {/* navbar start  */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
      <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
    <h3 className="m-0 logo">
        <img src={Logo} alt="Bharat Energreen Logo" />
        Bharat Energreen
    </h3>
</Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
      <Link to="/" className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}>
        Home
      </Link>
      <Link to="/bio-diesel" className={`nav-item nav-link ${location.pathname === '/bio-diesel' ? 'active' : ''}`}>
        Bio Diesel
      </Link>
      <Link to="/bio-ethanol" className={`nav-item nav-link ${location.pathname === '/bio-ethanol' ? 'active' : ''}`}>
        Bio Ethanol
      </Link>
      <Link to="/cbg" className={`nav-item nav-link ${location.pathname === '/cbg' ? 'active' : ''}`}>
        CBG
      </Link>
      <Link to="/gallery" className={`nav-item nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>
        Gallery
      </Link>
    </div>
          <a className="get-quote py-4 px-lg-5  d-lg-block" onClick={toggle}>
            Request Quote
            <i className="fa fa-arrow-right ms-3" />
          </a>
        </div>
      </nav>

      {/* navbar start  end*/}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Request Quote</ModalHeader>
        <form onSubmit={handleSubmit}>
      <ModalBody>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="username" value={form.name} onChange={handleChange} placeholder="Enter your name" required />
        </FormGroup>
        <FormGroup>
          <Label for="subject">Subject</Label>
          <Input type="text" name="subject" id="subject" value={form.subject} onChange={handleChange} placeholder="Enter subject" required />
        </FormGroup>
        <FormGroup>
          <Label for="mobile">Mobile Number</Label>
          <Input type="tel" name="mobile" id="mobile" value={form.mobile} onChange={handleChange} placeholder="Enter mobile number" required />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input type="textarea" name="message" id="message" value={form.message} onChange={handleChange} placeholder="Enter your message" required />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button type="submit" color="primary">Submit</Button>{' '}
        <Button color="secondary" onClick={() => console.log('Cancel button clicked')}>Cancel</Button>
      </ModalFooter>
    </form>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default Header;
