import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [signedInUser, setSignedInUser] = useState({ firstName: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData); // Log form data
    try {
      const response = await axios.post('/api/users/signin', formData);
      console.log('Response from server:', response.data); // Ensure the response includes the token and user data
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('firstName', response.data.firstName);
      setSignedInUser({ email: formData.email, firstName: response.data.firstName });
      setShowModal(true);
    } catch (error) {
      console.error('There was an error signing in!', error);
    }
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
        navigate('/search');
        window.location.reload(); // Refresh the browser after navigating
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showModal, navigate]);

  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="d-flex justify-content-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1594179594534-9d826c107c10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '75vh'}}>
        <Container className="mt-5" style={{color: "white", borderRadius: "10px", paddingTop: "50px", marginBottom: "275px", border: "2px solid palegoldenrod"}}>
          <Row className="justify-content-md-center">
            <Col md="6">
              <h1>Sign In</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                  />
                </Form.Group>

                <Button variant="outline-light" style={{color: "black", fontWeight: "bold", marginTop: "20px"}} type="submit">
                  Sign In
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome {signedInUser.firstName}!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignInForm;
