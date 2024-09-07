import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    familyName: '',
    email: '',
    password: ''
  });
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false); // State to control welcome message visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', formData);
      console.log(response.data); // Log the response from the backend
      setShowWelcomeMessage(true); // Show welcome message after successful form submission

      // Clear the form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        familyName: '',
        email: '',
        password: ''
      });

      // Hide welcome message after 2 seconds
      setTimeout(() => {
        setShowWelcomeMessage(false);
      }, 2000);

    } catch (error) {
      console.error('Error submitting the form:', error);
      // Handle error: show error message to user, etc.
    }
  };

  return (
    <div className="d-flex justify-content-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1564613469739-c78f970f9c17?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container className="mt-5" style={{ color: 'white', borderRadius: '10px', padding: '50px', marginBottom: '75px', border: '2px solid palegoldenrod' }}>
        <Row className="justify-content-md-center">
          <Col md="6">
            <h1 className="text-center mb-4">Family Registration</h1>
            {showWelcomeMessage && (
              <div className="alert alert-success text-center" role="alert">
                Welcome {formData.firstName}!
              </div>
            )}
            <Form onSubmit={handleSubmit}>
              {/* First Name */}
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
              </Form.Group>

              {/* Last Name */}
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
              </Form.Group>

              {/* Family Name */}
              <Form.Group controlId="formFamilyName">
                <Form.Label>Family Name</Form.Label>
                <Form.Control
                  type="text"
                  name="familyName"
                  value={formData.familyName}
                  onChange={handleChange}
                  placeholder="Enter your family name"
                />
              </Form.Group>

              {/* Email */}
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

              {/* Password */}
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

              {/* Submit Button */}
              <Button variant="secondary" type="submit" style={{ marginTop: '20px' }}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserForm;
