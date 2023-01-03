'use strict';
/*
const button=document.querySelector('button');
button.addEventListener('click',logThis);//<button>Click me</button>


//this keyword in window
console.log(this);//logs window object -->global object

// this keyword in function
function logThis(x,y){
    console.log(this);
    console.log(x,y);
}
logThis();//undefined->in strict mode the its undefined and without strict mode it look for the parent element of global window this 


//this keyword in object
const obj={
    num:10,
    // logThis,
}
// obj.logThis();//{num: 10, logThis: ƒ}


//passing one object to another object-->bind method -->function of another function
const boundLogThis=logThis.bind(obj,10,20);
boundLogThis();//{num: 10, logThis: ƒ}

//immediately calling method
logThis.call(obj,'call','method');
//apply method-->works exactly same but difference is it only accepts parameters to an array
logThis.apply(obj,['call','method']);

*/

//////////////////ARRAY FUNCTIONS

[1,2,3].forEach((num)=>{
    console.log(this);//it refers the window only it happens in arrow functions
    console.log(num)
}
);


[1,2,3].forEach(function(num){
    console.log(this);//it shows the passed object
    console.log(num)
},{num:10}
);


//////this keyword on object

class Person{
    constructor(name){
        console.log(this);
        this.name=name;
    }
    speak(){
        console.log('Hello how are you '+this.name);
    }
}

const conner=new Person('conner');
const satheesh=new Person('satheesh');