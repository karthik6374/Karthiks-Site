import React, { useState, useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  console.log("profiles:", profiles);

  const getApiData = async () => {
    try {
      const response = await axios.get("https://65e450c13070132b3b248872.mockapi.io/Name");
      setProfiles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const goToAddPage = (profileid) => {
    navigate("/add");
  };

  const goToUpdatePage = (profileid) => {
    navigate("/update");
  };

  const handleDeleteProfile = async (profileid) => {
    try {
      await axios.delete(`https://65e450c13070132b3b248872.mockapi.io/Name/${profileid}`);
      getApiData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-5">
      {[...Array(Math.ceil(profiles.length / 3))].map((_, rowIndex) => (
        <Row key={rowIndex} className="mb-3">
          {[...Array(3)].map((_, colIndex) => {
            const index = rowIndex * 3 + colIndex;
            const profile = profiles[index];
            return (
              profile && (
                <Col key={profile.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={profile.Avatar} />
                    <Card.Body>
                      <Card.Title>{profile.Name}</Card.Title>
                      <Card.Text>{profile.Gender}</Card.Text>
                      <Card.Text>{profile.Mobile}</Card.Text>
                      <Card.Text>{profile.DOB}</Card.Text>
                      <div className="d-flex gap-3">
                        <Button className="primary" onClick={() => goToAddPage(profile.id)}>
                          Add
                        </Button>
                        <Button variant="primary" onClick={() => goToUpdatePage(profile.id)}>
                          Update
                        </Button>
                        <Button variant="primary" onClick={() => handleDeleteProfile(profile.id)}>
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            );
          })}
        </Row>
      ))}
    </Container>
  );
}

export default Home;
