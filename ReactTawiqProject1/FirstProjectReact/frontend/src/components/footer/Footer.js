import React from 'react';
import { Col,Row,Container } from 'react-bootstrap';
import '../footer/footer.css'

const Footer = () => {
	return <div className="App">

<Container fluid="md">
  <Row>
    <Col>
    <footer className="footer">
        <hr/>
                    <div  className="row no-gutters justify-content-between fs--1 mt-4 mb-3">
                        <div className="col-12 col-sm-auto text-left">
                            <ul className="nav1 footer-nav">
                                <li className="nav2">Home</li>
                                <li className="nav2">About</li>
                                <li className="nav2">Tawakkalna Services</li>
                                <li className="nav2">How Tawakkalna Works</li>
                                <li className="nav2">FAQs</li>
                                <li className="nav2">Contact Us</li>
                            </ul>
                        </div>
                        <div className="col col-12 col-sm-auto text-center">
                            <p className="p1 pt-2 text-600">All rights reserved to SDAIA <span className="d-none d-sm-inline-block">| </span><br className="d-sm-none"/> 2021 © </p>
                        </div>
                    </div>
                </footer>
    
    </Col>
  </Row>
</Container>


	</div>;
};

export default Footer;
