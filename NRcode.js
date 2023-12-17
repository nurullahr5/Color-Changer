const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (button) => {
    console.log(button);
    button.style.borderRadius = "50%"
    button.addEventListener('click', (event) => {
        console.log(event);
        console.log(event.target);
        if(event.target.id === "gray"){
            body.style.backgroundColor = event.target.id;
            body.style.color = "white"
        }
        if(event.target.id === "red"){
            body.style.backgroundColor = event.target.id
            body.style.color = "white"
        }
        if(event.target.id === "blue"){
            body.style.backgroundColor = event.target.id
            body.style.color = "white"
        }
        if(event.target.id === "purple"){
            body.style.backgroundColor = event.target.id
            body.style.color = "white"
        }
        if(event.target.id === "yellow"){
            body.style.backgroundColor = event.target.id
            body.style.color = "black"
        }
        if(event.target.id === "green"){
            body.style.backgroundColor = event.target.id
            body.style.color = "white"
        }
    })
} )