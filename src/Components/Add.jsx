import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

function Add() {
  const [Name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [Gender, setGender] = useState("");
  const [Phone, setPhone] = useState("");
  const [Avatar, setAvatar] = useState("");

  const Data = {
    name: Name,
    dob: DOB,
    gender: Gender,
    phone: Phone,
    avatar: Avatar
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!Name || !DOB || !Gender || !Phone || !Avatar) {
      toast.error("Fill Required Fields!", { autoClose: 1500 });
    } else {
      try {
        const response = await axios.post("https://65e450c13070132b3b248872.mockapi.io/Name", Data);

        if (response.status === 201) {
          toast.success("Added successfully!", { autoClose: 2000 });
        } else {
          toast.error("Add failed. Please try again.");
        }

        // Add any further handling or navigation logic if needed
      } catch (error) {
        console.error(error);
        // Handle error, show toast, or perform any necessary actions
      }
    }
  };

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Form>
        <h3 className="pb-3 text-center">Update data</h3>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDOB">
          <Form.Label>Enter Date Of Birth</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter DOB"
            onChange={(e) => setDOB(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicphone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAvatar">
          <Form.Label>Avatar</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Avatar"
            onChange={(e) => setAvatar(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleRegister}>
          Add
        </Button>
        
      </Form>

      <ToastContainer />
    </Container>
  );
}

export default Add;
