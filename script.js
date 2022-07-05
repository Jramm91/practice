const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// TOP Exercises on DOM Manipulation
// "Add the following elements to the container using ONLY JavaScript and the DOM methods shown above."

// 1. a <p> with red text that says “Hey I’m red!”
const p = document.createElement('p');
p.classList.add('p');
p.textContent = "Hey I'm red!";
p.style.color = 'red';

container.appendChild(p);

// 2. an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "I'm a blue h3!"
h3.style.color = 'blue';
container.appendChild(h3);

// 3. a <div> with a black border and pink background color with the following elements inside of it:
const div = document.createElement('div');
div.classList.add('div');
div.style.border = '1px solid black';
div.style.background = 'pink';

//  a. another <h1> that says “I’m in a div”
const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = "I'm in a div";

//  b. a <p> that says “ME TOO!”
const pDiv = document.createElement('pDiv');
pDiv.classList.add('pDiv');
pDiv.textContent = "ME TOO!";

//  c. Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it 
//      before adding it to the container.

div.appendChild(h1);
div.appendChild(pDiv);
container.appendChild(div);

// Exploring different button methods

// Method 2
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

// Method 3
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     alert("Hello World");
// })

// btn.addEventListener('click', function (e){
//     e.target.style.background = 'pink';
// })

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});