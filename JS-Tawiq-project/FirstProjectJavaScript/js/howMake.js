$(document).ready(function() {

    
    let makeCoffee = JSON.parse(window.localStorage.getItem('makeCoffee'))
console.log(makeCoffee);

$('#howMake').append(`



<div class="card-body" >
<img src="../img/${makeCoffee.img}" class="card-img-top" alt="...">
  <h5 class="card-title">${makeCoffee.title}</h5>
  <p class="card-text">${makeCoffee.recipe}</p>
  <ul>
  <li>${makeCoffee.step1}</li>
  <li>${makeCoffee.step2}</li>
  <li>${makeCoffee.step3}</li>
</div>

`)})

