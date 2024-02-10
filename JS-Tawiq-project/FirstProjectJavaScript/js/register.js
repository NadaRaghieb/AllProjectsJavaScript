//button product

// $('#addOne').click(function () {
//   // console.log('inside addOne function');
//   let qty = parseInt($('#qty').text());
//   qty += 1;
//   $('#qty').text(qty);
//   // console.log(qty);

// })


// $('#subOne').click(function () {
//   let qty = parseInt($('#qty').text());
//   qty -= 1;
//   if (qty < 1)
//     qty = 1;
//   $('#qty').text(qty);
 
// })
// $(document).ready(function () {
//   $('.mdb-select').materialSelect();
//   $('.select-wrapper.md-form.md-outline input.select-dropdown').bind('focus blur', function () {
//     $(this).closest('.select-outline').find('label').toggleClass('active');
//     $(this).closest('.select-outline').find('.caret').toggleClass('active');
//   });
// });


//for register



  let name = $('#userName');
  let email = $('#email');
  let password = $('#password');
  let rePassword = $('#rePassword');
  let emailSign=$('#emailA');
  let passSign=$('#passwordB');

let result=$('.snUp > span');

$('.btnB').click(function(){


let oldEmail=localStorage.gitItem('emailSign');
let oldPassword =localStorage.gitItem('passSign');



    
if (emailSign.val() === oldEmail && passSign.val() === oldPassword)
  {
     result.html(`Login successful <span> ${emailSign.val()}</span>`);
  }

  else
    {
      result.html(`Login not successful <span> ${emailSign.val()}</span>`);
    }
  });
  

$('.btnA').click(function (){
  localStorage.setItem('name', name.val());
  localStorage.setItem('email', email.val());
  localStorage.setItem('password', password.val());
  localStorage.setItem('rePassword', rePassword.val());

  result.html(`Add <span> ${email.val()}</span>`);
});
 


//for login





