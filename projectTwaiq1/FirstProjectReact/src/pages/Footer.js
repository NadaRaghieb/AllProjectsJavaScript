import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
 function Footer(){
    return(
        <div>
          <Footer>
          <Container style= {{height:"100%", backgroundColor:"white", width:"100%", marginLeft:"60px", marginRight:"60px"}}>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={12}>
      
    <span className="text-muted">© 2021 Company, Inc</span>
    </Col>
  </Row>
  </Container>
  </Footer>
        </div>
    )
}
export default Footer