import React from 'react'

import { Card } from 'react-bootstrap';
import {Link,Outlet} from 'react-router-dom'
import {getProducts} from "../pages/productData"

export default function products(){
  let products =getProducts();
  return(
    <div style={{display:"flex", justifyContent:"space-around", margin:"30px", padding:"20px" }}>
      {products.map(product =>(
      <Card  className="d-flex" style={{ width: '18rem' }}>
      
  <Card.Img variant="top" src={product.img} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
      price:{product.price}$
    </Card.Text>
    <Link className="btn btn-success" to={`/products/${product.id}`} key={product.id}>Details</Link>
    {/* <Link to={`/products/ ${product.id}`} key={product.id}>
            
   </Link> */}
  </Card.Body>

       
         
          <Link to={`/products/ ${product.id}`} key={product.id}>
            
          </Link>
        </Card>
        ))}
    
      <Outlet/>
    </div>
  )
}

