import { useParams } from "react-router-dom";
import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"
 import {getProduct} from "./productData"
export default function Product() {
  let params = useParams();
  let product = getProduct(parseInt(params.id, 10));
  return(
    
    // <main style={{ padding: "1rem" }}>
    //   <img src={product.img} style={{height:"100px", width:"100px"}}/>
    //   <h2>Total Due: {product.name}</h2>
    //   <p>
    //     {product.description}: {product.id}
    //   </p>
    //   <p>Due Date: {product.price}</p>
    // </main>
    <Card  className="d-flex" style={{ width: '18rem' }}>
      
    <Card.Img variant="top" src={product.img} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        price:{product.price}$
      </Card.Text>
      <Link className="btn btn-success" to={`/products/${product.id}`} key={product.id}>add to cart</Link>
      {/* <Link to={`/products/ ${product.id}`} key={product.id}>
              
     </Link> */}
    </Card.Body>
  
         
           
            <Link to={`/products/ ${product.id}`} key={product.id}>
              
            </Link>
          </Card>
       
         
         
    
     
  )
}