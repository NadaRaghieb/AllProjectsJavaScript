import React, { useState, useEffect } from "react";



function Cart(){

    const [products, setProducts] = useState([]);
  useEffect(async () => {
    const resProducte = await fetch(
      "http://localhost:5060/product/show"
    );
    const products = await resProducte.json();
    setProducts(products);
    console.log("products: ",products);
  }, []);
    return(
         
            <div class="row row-cols-1 row-cols-md-3 g-4" style={{margin:"50px", padding:"20px"}}>
                {products.map((post) => (
            <div class="col" key={post._id} style={{padding:"20px"}}>
              <div class="card h-100">
                <img src={post.imageProduct} width={300} height={250} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{post.pantingName}</h5>
                  <p class="card-text">{post.description}.</p>
                  <h5 class="card-title">{post.typeOfArt}</h5>
                  <h5 className="card-title">{post.price}</h5>
                </div>
              </div>
            </div>))}
            </div>
   
    )
}
export default Cart