
$(document).ready(function() {

    
    let cart = JSON.parse(window.localStorage.getItem('cart'))
console.log(cart);

$('#cart').append(`
<div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="cart_container">
                        <div class="cart_title">Shopping Cart<small> (1 item in your cart) </small></div>
                        <div class="cart_items">
                            <ul class="cart_list">
                                <li class="cart_item clearfix">

<div class="cart_item_image"><img src="../img/${cart.img}" alt=""></div>
<div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
    
<div class="cart_item_name cart_info_col">
<div class="cart_item_title">name</div>
<div class="cart_item_text" >${cart.name}</div>
</div>

<div class="cart_item_quantity cart_info_col">
<div class="cart_item_title">Quantity</div>
<div class="cart_item_text">${cart.Quantity}</div>
</div>

<div class="cart_item_price cart_info_col">
<div class="cart_item_title">Price</div>
<div class="cart_item_text">${cart.price}</div>
</div>
<div class="cart_item_total cart_info_col">
<div class="cart_item_title">Total</div>
<div class="cart_item_text">${cart.total}</div>
</div>
</div>
</li>
                            </ul>
                        </div>
`)})

