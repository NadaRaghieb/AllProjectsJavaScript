//for button view file product.html

let product=[{
    title:'Starbucks® Caffè Verona™',
    price:'25$',
    img:'prodect1.png',
    description:'The roasty sweet with dark cocoa notes of this blend, make this well-balanced and rich cup of coffee. '
},
{
    title:'Starbucks Blonde® Espresso Roast',
    price:'20$',
    img:'product2.webp',
    description:'Savour a Latin American coffee with a bold but mellow flavour and sweet, vibrant notes. Enjoy our lighest espresso roast coffee at home.'   

},
{
    title:'Starbucks® Caffè Verona™',
    price:'20$',
    img:'product3.png',
    description:'The roasty sweet with dark cocoa notes of this blend, make this well-balanced and rich cup of coffee. '  
},
{
    title:'Starbucks® House Blend',
    price:'20$',
    img:'product4.png',
    description:'This Latin American coffee is loaded with flavour, balancing tastes of nut and cocoa with just a touch of sweetness brought out by the roast. '  
},

{
    title:'Starbucks Veranda Blend™',
    price:'20$',
    img:'product5.png',
    description:'Help yourself to a lightly roasted Latin American coffee that’s mellow and flavourfully soft.'  
},
{
    title:'Starbucks® Toffee Nut Latte',
    price:'20$',
    img:'product6.png',
    description:'We bring you a deliciously special blend with dairy milk and the rich, buttery taste of sweet toffee and toasted nuts, topped with a soft layer of foam.' 
},
{
    title:'Starbucks® Espresso Roast',
    price:'20$',
    img:'product7.webp',
    description:'A delicious blend of Latin American and Asia/Pacific coffees, this espresso has a rich and caramelly sweetness and is at the heart of our handcrafted latte.'  
},
{
    title:'Starbucks Blonde® Espresso Roast',
    price:'20$',
    img:'product2.webp',
    description:'Savour a Latin American coffee with a bold but mellow flavour and sweet, vibrant notes. Enjoy our lighest espresso roast coffee at home.'   

},

{
    title:'Starbucks Blonde® Espresso Roast',
    price:'20$',
    img:'product2.webp',
    description:'Savour a Latin American coffee with a bold but mellow flavour and sweet, vibrant notes. Enjoy our lighest espresso roast coffee at home.'   
}
];


$('#btn1').click(()=>{
    window.localStorage.setItem("product", JSON.stringify(product[0]))
    console.log(product[0]);
    window.location.href="../html/view.html"
}
)
$('#btn2').click(()=>{
    window.localStorage.setItem("product", JSON.stringify(product[1]))
    console.log(product[1]);
    window.location.href="../html/view.html"
}
)
$('#btn3').click(()=>{
    window.localStorage.setItem("product", JSON.stringify(product[2]))
    console.log(product[2]);
    window.location.href="../html/view.html"
}
)
$('#btn4').click(()=>{
    window.localStorage.setItem("product", JSON.stringify(product[3]))
    console.log(product[3]);
    window.location.href="../html/view.html"
}
)
$('#btn5').click(()=>{
    window.localStorage.setItem("product", JSON.stringify(product[4]))
    console.log(product[4]);
    window.location.href="../html/view.html"
}
)
$('#btn6').click(()=>{
    window.localStorage.setItem("product", JSON.stringify(product[5]))
    console.log(product[5]);
    window.location.href="../html/view.html"
}
)
$('#btn7').click(()=>{
    window.localStorage.setItem("product", JSON.stringify(product[6]))
    console.log(product[6]);
    window.location.href="../html/view.html"
}
)
$('#btn8').click(()=>{
    window.localStorage.setItem("product", JSON.stringify(product[7]))
    console.log(product[7]);
    window.location.href="../html/view.html"
}
)
$('#btn9').click(()=>{
    window.localStorage.setItem("product", JSON.stringify(product[8]))
    console.log(product[8]);
    window.location.href="../html/view.html"
}
)
// $('#addOne').click(function () {
//     // console.log('inside addOne function');
//     let qty = parseInt($('#qty').text());
//     qty += 1;
//     $('#qty').text(qty);
//     // console.log(qty);
//   })
  
  
//   $('#subOne').click(function () {
//     let qty = parseInt($('#qty').text());
//     qty -= 1;
//     if (qty < 1)
//       qty = 1;
//     $('#qty').text(qty);
//   })

  //for button add to cart file product.html 
  let cart=[{
    name:'Coffee',
    Quantity:'1',
    price:'25$',
    img:'prodect1.png',
    total:'22$'
    
},
{
    name:'Coffee',
    Quantity:'1',
    price:'20$',
    img:'product2.webp',
      
},
{
    
    price:'20$',
    img:'product3.png',
      
},
{
    price:'20$',
    img:'product4.png',
     
},

{
    price:'20$',
    img:'product5.png',
    
},
{price:'20$',
    img:'product6.png',
    },
{
    price:'20$',
    img:'product7.webp',
     
},
{
    price:'20$',
    img:'product2.png',
      
},
{
    price:'20$',
    img:'product2.png',
       }
];
$('#bt1').click(()=>{
    window.localStorage.setItem("cart", JSON.stringify(cart[0]))
    console.log(cart[0]);
    window.location.href="../html/checkOut.html"
}
)
$('#bt2').click(()=>{
    window.localStorage.setItem("cart", JSON.stringify(cart[1]))
    console.log(cart[1]);
    window.location.href="../html/checkOut.html"
}
)
$('#bt3').click(()=>{
    window.localStorage.setItem("cart", JSON.stringify(cart[2]))
    console.log(cart[2]);
    window.location.href="../html/checkOut.html"
}
)
$('#bt4').click(()=>{
    window.localStorage.setItem("cart", JSON.stringify(cart[3]))
    console.log(cart[3]);
    window.location.href="../html/checkOut.html"
}
)
$('#bt5').click(()=>{
    window.localStorage.setItem("cart", JSON.stringify(cart[4]))
    console.log(cart[4]);
    window.location.href="../html/checkOut.html"
}
)
$('#bt6').click(()=>{
    window.localStorage.setItem("cart", JSON.stringify(cart[5]))
    console.log(cart[5]);
    window.location.href="../html/checkOut.html"
}
)
$('#bt7').click(()=>{
    window.localStorage.setItem("cart", JSON.stringify(cart[6]))
    console.log(cart[6]);
    window.location.href="../html/checkOut.html"
}
)
$('#bt8').click(()=>{
    window.localStorage.setItem("cart", JSON.stringify(cart[7]))
    console.log(cart[7]);
    window.location.href="../html/checkOut.html"
}
)
$('#bt9').click(()=>{
    window.localStorage.setItem("cart", JSON.stringify(cart[8]))
    console.log(cart[8]);
    window.location.href="../html/checkOut.html"
}
)
$('#addCart').click(()=>{
    window.localStorage.setItem("cart", JSON.stringify(cart[0]))
    console.log(cart[0]);
    window.location.href="../html/checkOut.html"})

    $('#addOne').click(function () {
        // console.log('inside addOne function');
        let qty = parseInt($('#qty').text());
        qty += 1;
        $('#qty').text(qty);
        // console.log(qty);
      
      })
      
      
      $('#subOne').click(function () {
        let qty = parseInt($('#qty').text());
        qty -= 1;
        if (qty < 1)
          qty = 1;
        $('#qty').text(qty);
       
      })
      $(document).ready(function () {
        $('.mdb-select').materialSelect();
        $('.select-wrapper.md-form.md-outline input.select-dropdown').bind('focus blur', function () {
          $(this).closest('.select-outline').find('label').toggleClass('active');
          $(this).closest('.select-outline').find('.caret').toggleClass('active');
        });
      });
      