//Ticket 1: selecting DOM elements
//1a
console.log(document.getElementById('title'));

//1b
const content = document.getElementsByClassName('content');
console.log(content);

//1c
const liElements = document.getElementsByTagName('li');
console.log(liElements)

//1d
const highlight = document.querySelector('.highlight'); //need the dot notaiton to indicate its a class
console.log(highlight)

//1e
const allHighlight = document.querySelectorAll('.highlight');
console.log(allHighlight)


//Ticket2: traversing the DOM
//2a
