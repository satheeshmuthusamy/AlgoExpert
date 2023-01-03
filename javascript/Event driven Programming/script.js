// const listItems=document.querySelectorAll('li');

// const scrollable=document.getElementById('scrollable');
// console.log(scrollable.clientHeight);//70height+10+10 vertical padding
// console.log(scrollable.offsetHeight);//94 px-->+border
// console.log(scrollable.scrollHeight);//284px
// console.log(scrollable.offsetTop);//90-->distance from the outer border to the inner positioned parent border-->how far from top of the scrollbar container

// console.log(scrollable.querySelectorAll('p')[5].offsetTop);//202px
// console.log(scrollable.querySelectorAll('p')[0].offsetTop);//26px from the top

// ///SCROLLING-->AUTOMATICALLY SCROLL THE CONTENT
// //SCROLL INTO VIEW
// scrollable.querySelectorAll('p')[5].scrollIntoView();//scroll to the index value of 5th

// ///SCROLLTO
// scrollable.scrollTo({
//     top:scrollable.querySelectorAll('p')[2].offsetTop,//scrolles to 2nd index value
//     behavior:'smooth',
// });

/////EVENT DRIVEN PROGRAMMING==>RESPONSE TO EVENTS

const scrollable=document.getElementById('scrollable');
const button = document.querySelector("button");
// console.log(button);
//click event

// event syntax==>element.addEventListener(eventName,callback,useCapture);if the third argument is true,the callback will fire during the capturing phase rather than the default bubblinh

// document.body.addEventListener('click',onClick,{
//     capture:true,once:true,passive:true
// });//-->to confirm the event is happened por not
// here the click happens if we click any bittons in the body and here this keyword represents the whole body==>this process is knpwn as event propagation-->It has three phases

const abortController = new AbortController(); //to remove or prevent the particular event

// button.addEventListener('click', onClick, {
    // double click-->'dblclick',
    // mousedown,mouseup-->click-before releasing mouse,click->after releasing the mouse
button.addEventListener('click', onClick, {
  capture: true, //event listener fires when we click
  once: true, //event listener only fires at one time and just remove the event
  passive: true, //if its true then it won't call prevent default-->don't used much but mostly used in touchStart and touchMove event-->to move the screen
  signal: abortController.signal,
});

//REMOVE EVENT LISTENER

// button.removeEventListener('click', onClick);

// abortController.abort();//to remove the event ->needed to be called after the event listerner

function onClick(event) {
  //to prevent event propagation
  // event.stopPropagation();//now the click happens only in the button
  // event.preventDefault();//to prevent default behaviour of the  function
  // console.log(event);//PointerEvent
  // console.log(event.type);//click
  console.log(event.target); //<button id="button">Click here</button>-->target which the event is happened-->event fired on
  console.log(this); //It also represents the button also
  console.log("You clicked the button!");
}



//////////DRAG AND DROP
// 1.set the element draggable true in html-->most of the elements are draggable except images

button.addEventListener('dragstart',event=>console.log(event))

scrollable.addEventListener('drop',event=>{
    scrollable.prepend(button);
})

scrollable.addEventListener('dragover',event=>event.preventDefault());








// KEYBOARD PRESSES

window.addEventListener('keydown',event=>{
    console.log(event.code);
    //it gives the key we clicked
})


scrollable.addEventListener('scroll',event=>{
    console.log(event.target.scrollTop);
    // prints the top value
})

scrollable.addEventListener('mouseenter',event=>{
    // mousemove gives all the x,y axis values when the mouse is moved
    console.log(event.pageX,event.pageY);//gives x and y axix value 
})


/////IMPORTANT ==>THE MORE EVENT LISTENER THE LESS SPEED



////EVENT DELIGATION==>always use this keyword
// Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.
scrollable.addEventListener('click',event=>{
    if(event.target!==this){
        event.target.textContent='Clicked';
    }
})




