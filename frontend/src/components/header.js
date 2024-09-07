import React from 'react';
import { Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/signin');
  };

  return (
    <Navbar className="w-100" style={{backgroundColor: "#fff077"}}>
      <Container>
        <Row className="w-100">
          <Col className="d-flex justify-content-center">
            <Navbar.Brand style={{fontSize: "36px", fontWeight: "bold", fontFamily: "calibri", color: "black", textShadow: "2px 2px 10px babyblue"}}>
              <a href="/">
                <img src="/images/logo2.png" alt="Logo" style={{height: '100px', marginRight: '10px', borderRadius: '50%'}} />
              </a>
              Bonded by Adventure
            </Navbar.Brand>
          </Col>
          <Col className="d-flex justify-content-end">
            <div className="d-flex align-items-center">
              {user ? (
                <>
                  <span className="me-2" style={{color: "black", fontWeight: "bold"}}>Welcome {user.firstName}</span>
                  <Button variant="outline-light" onClick={handleLogout} className="me-2" style={{borderColor: "#ffd700", color: "black", fontWeight: "bold"}}>Logout</Button>
                </>
              ) : (
                <>
                  <Button variant="outline-light" href="/signup" className="me-2" style={{borderColor: "#ffd700", color: "black", fontWeight: "bold"}}>Sign Up</Button>
                  <Button variant="outline-light" href="/signin" className="me-2" style={{borderColor: "#ffd700", color: "black", fontWeight: "bold"}}>Sign In</Button>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
