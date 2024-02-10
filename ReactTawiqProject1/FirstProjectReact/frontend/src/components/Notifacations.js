import Header from './header/Header';
import Footer from "./footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {   
    Card,
    Col,
    Container,
    Row,
    Form,
    Button,
    FormGroup, } from 'react-bootstrap';
    import "./Permits.css"

export default function Notifacations() {
    return (
        <div>
            <Header/>
            <hr></hr>
            <br></br>
<Container className="nofContain">
          <Row>
              <Col>
              <Card id="permits-card-body">
                 <Form>
                  <Form.Label className="nofLabel" > Notifications </Form.Label><br></br>
                  <br></br>
                
                <Button
                className="nofButton"
                    variant="secondary"
                    type="submit"
                  >
                    {" "}
                   <h6> Tawakkalna feeds </h6>{" "}
                  </Button>
                  <hr></hr> <br></br>
                  <hr></hr>
                <Form.Group 
                className="nofGroup" 
                controlId="formBasicEmail">
                  <Form.Label className="nofLabel1" > Null </Form.Label>{" "} <br></br>
                  <h6 className="nofH1" >We congratulate you on completing the first dose of the vaccine, and hope for your wellbeing. You may now view your health status in your health passport through Tawakkalna</h6>
                </Form.Group>{" "}
                <FormGroup>
                </FormGroup>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>

            <Footer/>
        </div>
    )
}