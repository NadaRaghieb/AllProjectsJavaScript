import React from 'react'
import{Container,Row,Col,Carousel} from "react-bootstrap"
//import './App.css';

export default function Main() {
  return (
    <div>
        <Container>
    <Row>
      <Col>
      <Carousel style={{marginTop:"100px"}}>
  <Carousel.Item interval={1000} >
    <img
      className="d-block w-100"
      src="../img/co2.jpg" style={{height:"50vh"}}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="./img/co3.png " style={{height:"50vh"}}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/cor.jpg" style={{height:"50vh"}}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
      
      </Col>
    </Row>
  </Container>
  
    </div>
  )
}


