import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const FamilyTripComponent = () => {
  const [showSearch, setShowSearch] = useState(true); // Initially show the search interface
  const [searchResults, setSearchResults] = useState([]); // State to hold search results

  const handleSearch = () => {
    // Simulated search results, replace with actual search logic
    const results = [
      'https://images.unsplash.com/photo-1465306417166-e11002b6eb25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1465306417166-e11002b6eb25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1465306417166-e11002b6eb25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];
    setSearchResults(results);
    setShowSearch(false); // Hide the search interface after searching
  };

  const handleAddClick = () => {
    // Handle logic for adding a family trip
    console.log('Add Family Trip clicked');
  };

  const handleNewSearch = () => {
    setShowSearch(true); // Show search interface again for new search
    setSearchResults([]); // Clear previous search results
  };

  return (
    <div className="d-flex justify-content-center" style={{backgroundImage: 'url(../images/beach_night_moon.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '75vh'}}>
    <Container className="mt-5" style={{color: "white", borderRadius: "10px", padding: "50px 10px 500px 10px", marginBottom: "75px", border: "2px solid palegoldenrod", }}>
      <Row className="justify-content-md-center">
        <Col md="8">
          {showSearch ? (
            <div style={({ color: 'black' })}>
              <h1>Search Family Trip</h1>
              <Form>
                <Form.Group controlId="formTripSearch">
                  <Form.Label style={{color: "goldenrod"}}>Family's Trip Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter trip code here..." />
                </Form.Group>
                <Button variant="outline-light" style= {{borderColor: "#ffd700", fontWeight: "bold", color: "goldenrod", marginTop: "20px"}} onClick={handleSearch}>
                  Search
                </Button>
                <Button variant="outline-light" style= {{borderColor: "#ffd700", fontWeight: "bold", color: "goldenrod", marginTop: "20px", marginLeft: "20px"}} onClick={handleAddClick} href="/add">
                  Add Family Trip
                </Button>
              </Form>
            </div>
          ) : (
            <div>
              <Button variant="link" style={{color: "goldenrod", fontSize: "25px"}} onClick={handleNewSearch}>
                New Search
              </Button>
              <hr />
              <h2>Family Adventures</h2>
              <Row>
                {searchResults.map((imageUrl, index) => (
                  <Col key={index} xs={6} md={4} className="mb-4">
                    <img
                      src={imageUrl}
                      alt={`Search result ${index}`}
                      className="img-fluid rounded"
                      style={{ maxHeight: '300px', objectFit: 'cover' }}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default FamilyTripComponent;
