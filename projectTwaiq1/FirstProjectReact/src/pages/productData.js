let product=[
    {
    id: 1,
    name:"Starbucks® Caffè Verona™",
    price: 25,
    img:"./img/prodect1.png",
    description:"The roasty sweet with dark cocoa notes of this blend, make this well-balanced and rich cup of coffee."
},
{
    id: 2,
    name:"Starbucks Blonde® Espresso Roast",
    price: 20,
    img:"./img/product2.webp",
    description:"Savour a Latin American coffee with a bold but mellow flavour and sweet, vibrant notes. Enjoy our lighest espresso roast coffee at home."
},
{
    id: 3,
    name:"Starbucks® Caffè Verona™",
    price: 20,
    img:"./img/product3.png",
    description:"The roasty sweet with dark cocoa notes of this blend, make this well-balanced and rich cup of coffee."
},
{
    id: 4,
    name:"Starbucks® House Blend",
    price: 20,
    img:"./img/product4.png",
    description:"This Latin American coffee is loaded with flavour, balancing tastes of nut and cocoa with just a touch of sweetness brought out by the roast."
},
{
    id: 5,
    name:"Starbucks Veranda Blend™",
    price: 20,
    img:"./img/product5.png",
    description:"Help yourself to a lightly roasted Latin American coffee that’s mellow and flavourfully soft."
},
{
    id: 6,
    name:"Starbucks® Toffee Nut Latte",
    price: 20,
    img:"./img/product6.png",
    description:"We bring you a deliciously special blend with dairy milk and the rich, buttery taste of sweet toffee and toasted nuts, topped with a soft layer of foam."
}
]

export function getProducts() {
    return product;
  }

  export function getProduct(id) {
    return product.find(
        product => product.id === id
    );
  }