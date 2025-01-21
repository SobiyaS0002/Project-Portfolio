//   alert(`Thank you, ${name}! Your message has been sent.`);
//   document.getElementById('contactForm').reset();
// });

// Contact Form Submit Handling 


// select the form by its ID
var con_form = document.getElementById('contactForm')

// Add an event listener for the form submission
con_form.addEventListener('submit', function(event){
  event.preventDefault()     // It prevents form from autosubmitting
  var u_name=document.getElementById('name').value;
  console.log('Name: ' + u_name); // log the value of te name field
  var u_email=document.getElementById('email').value
  console.log('Email: ' + u_email)   // log the value of te email field
  var u_msg=document.getElementById('message').value
  console.log('Message: ' + u_msg)   // log the value of te message field
})


// Add an event listener for form resetting
con_form.addEventListener('reset', function(event){
  console.log("cleared")
})





