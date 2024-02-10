import React from "react";
import {Link, Outlet} from "react-router-dom"
import {Card,Button} from "react-bootstrap"

export default function ProductsItem(props) {
   const {product}= props;
    return(
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.img} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
    price: {product.price}$
    </Card.Text>
    <Button style={{backgroundColor:"white"}} ><Link
                    style={{ display: "block" }}
                    to={`/products/${product.id}`}
                    key={product.id}> details
                </Link></Button>
  </Card.Body>
</Card>
        </div>
    )
    
}