
const rests = ['Spin Cafe', 'Back 40', 'Chicks Cafe']

const random =  Math.floor(Math.random() * rests.length);
//console.log(random, rests[random])


function restGen(evt){
    evt.preventDefault() 
    alert (random, rests[random],)
}

let restGenBtn = document.querySelector('#ranRes')

restGenBtn.addEventListener('click', restGen)


//ran out of time to finish this. 