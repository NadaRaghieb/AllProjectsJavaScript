import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router";
import './login.css';
import Logo from './img/twlogo.png'
import axios from "axios";
import { Image } from "react-bootstrap";

export default function Login() {
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  function validateForm() {
    return nationalId.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("user/login", {
        nationalId: nationalId,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if(response.status===200){
          sessionStorage.setItem("userId", nationalId);
        navigation("/Main",);
      }
      else {
      }
      })
      .catch((err) => {
        console.log(err);
        alert("Not found")
      });
      
  }
  return (
    
    <div className="Login">
      <Image className="imgTwaLogin"
        src={Logo} alt=""/>
      <Card className="cardTwaLogin">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label className="LabelTwaLogin">Login</Form.Label>
              <Link to="/Register">
              <Card.Link className="LinkTwaLogin">
                Sign Up
              </Card.Link></Link>
              <Form.Control
                autoFocus
                type="nationalId"
                placeholder="Enter nationalId"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label></Form.Label>
              <Form.Control
                placeholder="Enter password "
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br></br>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="remember me" />
              </Form.Group>
            </Form.Group>
            <br></br>
            <Button 
            className="buttonTwaLogin"
             variant="success"
              size="lg"
              type="submit"
              disabled={!validateForm()}
            >
              Next
            </Button>
            <br/>
            
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}