//   alert(`Thank you, ${name}! Your message has been sent.`);
//   document.getElementById('contactForm').reset();
// });

// Contact Form Submit Handling 


// select the form by its ID
var con_form = document.getElementById('contactForm')

// Add an event listener for the form submission
con_form.addEventListener('submit', function(event){
  event.preventDefault()     // It prevents form from autosubmitting
  var u_name=document.getElementById('name').value
  console.log('Name: ' + u_name); // log the value of te name field
  var u_email=document.getElementById('email').value
  console.log('Email: ' + u_email)   // log the value of te email field
  var u_msg=document.getElementById('message').value
  console.log('Message: ' + u_msg)   // log the value of te message field
})


// Add an event listener for form resetting
con_form.addEventListener('reset', function(event){
  console.log("successfully reset page")
})


// Add focus to input fields
var u_name_focus=document.getElementById('name')
u_name_focus.addEventListener('focus', function(event){
this.style.borderColor="teal";
})

var u_email_focus=document.getElementById('email')
u_email_focus.addEventListener('focus', function(event){
this.style.borderColor="teal";
})

var u_msg_focus=document.getElementById('message')
u_msg_focus.addEventListener('focus', function(event){
this.style.borderColor="teal";
})


// function to add focus event and change border color
function addFocusEvent(element){
  element.addEventListener('focus', function(event){
    this.style.borderColor="teal";
    this.style.outline="0.4px solid teal"
});
}

// Select the input fields
var u_name=document.getElementById('name');
var u_email=document.getElementById('email');
var u_msg=document.getElementById('message');

// Apply the foocus events to all fields
addFocusEvent(u_name);
addFocusEvent(u_email);
addFocusEvent(u_msg);

// Function to revoke the bordercolor once focus is drawn
function addblurEvent(element){
  element.addEventListener('blur', function(event){
    this.style.borderColor='#ccc';
     this.style.outline="0.4px solid #ccc";
  });
}

// select the elements
var u_name=document.getElementById('name');
var u_email=document.getElementById('email');
var u_msg=document.getElementById('message');

// Add targeted elements to the function 
addblurEvent(u_name);
addblurEvent(u_email);
addblurEvent(u_msg);

// Change event demonstration for tracking any changes in the
//  input inserted in the field by the user before submitting
function addChangeEvent(element){
  element.addEventListener('change', function(event){
    console.log('new values' +this.value)
  });
}

// Selecting the elements
var u_name=document.getElementById('name')
var u_email=document.getElementById('email')
var u_msg=document.getElementById('message')

// Add elemnts to functions
addChangeEvent(u_name)
addChangeEvent(u_email)
addChangeEvent(u_msg)


// Input event demonstration for dynamic form input handling
function addInputEvent(element){
  element.addEventListener('input', function(event){
    console.log('realtime values' +this.value);
  });
}

// Selecting the elements
var u_name=document.getElementById('name')
var u_email=document.getElementById('email')
var u_msg=document.getElementById('message')

// Add elemnts to functions
addInputEvent(u_name)
addInputEvent(u_email)
addInputEvent(u_msg)


