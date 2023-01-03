"use strict";

// DOM MANIPULATION
const secondLi = document.getElementById("second-li"); //it selects the element which has the id of li
const firstLi = document.querySelector("li");
const allLiElements = document.querySelectorAll("li"); //gives the node list which is iterable
const scrollable = document.getElementById('scrollable');

console.log(window.innerWidth); //window width
console.log(window.innerHeight); //window height

console.log(window.getComputedStyle(allLiElements[0]).fontSize); //16px to get font size==>It give whatever the syle the browser window is showing

///scrollbar containers
console.log(scrollable.clientHeight); //-->It shows the height of showable content+its padding//102px
console.log(scrollable.offsetHeight); //+margin106
// console.log(scrollable);//total scroll height 106
console.log(scrollable.scrollHeight); //294
console.log(scrollable.offsetTop); //90px-->away from the top of scrollbar container
console.log(scrollable.querySelectorAll('p')[0].offsetTop); //32px from the top
// console.log(scrollable.querySelectorAll('p')[5].offsetTop);//208 px from the top
console.log('p');

// ///SCROLLING
scrollable.querySelectorAll('p')[4].scrollIntoView();
scrollable.scrollTo({
  top: scrollable.querySelectorAll('p')[3].offsetTop,
  behavior: "smooth",
});

////////CREATING OUR WON DOM NODES

const p = document.createElement("p"); //it creates the new node
// p.textContent="Hello world!";//  -->>instead we can create like below
const text = document.createTextNode("Hello world!");
p.append(text);
// document.body.appendChild(p);//Hello world is appended to the end of paragraph
document.body.append(text, "text"); //it adds both (we can pass two arguments at the same time)-->adds at the end

////innerhtml
// console.log(document.querySelector('ol').innerHTML);//it gives the html as an output as a strign

document.body.prepend(p); //adds the element at the beginning of the body node

document.body.innerHTML += `<p>Html test strings</p>`; //It also acts like normal html append child==>don't use like this because it will create bugs easily

// document.body.innerHTML='';//It clears everything

///never use inner html in user input

/////elements in loop
const parent = document.querySelector("ol");
// const listItemsToAdd=[];
const fragment = document.createDocumentFragment(); //fragment only exists in the js not it the debugging page so it will not affect our page
for (let i = 0; i < allLiElements.length; i++) {
  const li = document.createElement("li");
  li.textContent = `List with i=${i}`;
  fragment.append(li);
}
parent.append(fragment); //it will reduce the page render again and again when it was insode the loop

// REMOVING ELEMENT FROM THE NODE

// allLiElements[0].parentNode.removeChild(allLiElements[0]);
console.log(allLiElements[0].parentNode);
allLiElements[0].parentNode.removeChild(allLiElements[0]);
// allLiElements[0].remove();

// console.log(firstLi);
// console.log(secondLi);
// console.log(allLiElements);//NodeList(3) [li, li#second-li, li]

// console.log(allLiElements.length);
// allLiElements.forEach(li=>console.log(li));//print all elements
// //or if you wanted to use map use Array.from(function)

// //The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
// Array.from(allLiElements).map(li=>console.log(li));//work as forEach

// document.getElementsByClassName("className");
// document.getElementsByTagName("tagName");

allLiElements[0].style.backgroundColor = "orange";
allLiElements[0].textContent = "orange";
allLiElements[0].value = 0; //other list values will change with res to this value

///SET ATTRIBUTE
allLiElements[0].setAttribute("value", 7);
allLiElements[0].setAttribute("class", "blue big"); //adding blue class to this list

// CLASS LIST METHOD
allLiElements[0].classList.remove("big"); //removes the class big
allLiElements[0].classList.toggle("blue"); //if the class is there then it will remove the class or else the class is there then it will add the class to the element

// another way
allLiElements[0].className = "blue"; //it adds only one class at a time and removes all other classes which makes no mess between two classes in single element
