//1:
// In profile.js, create event listeners that check for a click on each of these buttons.
// If a user clicks on “My Favorite Color”, 
// it should alert the user of your favorite color, and so on.
//2:
// Add a class to each button element from the previous section. Then, add CSS to
// styles.css that makes the buttons larger and yellow.


//Favorite Color
function FavColor(evt){
    evt.preventDefault()
    alert('Yellow!')
}
let favColorBtn = document.querySelector('#color')

favColorBtn.addEventListener('click', FavColor)


//Favorite Place
function favPlace(evt){
    evt.preventDefault()
    alert('Zion National Park!')
}
 let favPlaceBtn = document.querySelector('#place')

 favPlaceBtn.addEventListener('click', favPlace)


//Favorite Ritual 
function favRit(evt){
    evt.preventDefault()
    alert('None! I am not religious and enjoy living life freely!')
}

let favRitBtn = document.querySelector('#ritual')

favRitBtn.addEventListener('click', favRit)


