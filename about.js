

//1:
// Change the event listener that is listening for the Contact Us form to submit. 
// Instead of doing a console.log message on submit, the form should alert the user that the form has been submitted successfully. 
// Use the alert function in Javascript.

console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted Successfully');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

//2:
// Add an event listener that listens for a mouseover event. 
// When the user mouses over the picture on the page (cat or rubber duck)
//  the page should alert give the user a compliment.

function mouseoverImage(evt){
	//evt.preventDefault()

	alert('Good Job! You are incredible!')
}

let img = document.querySelector('.cat')

img.addEventListener('mouseover', mouseoverImage)

