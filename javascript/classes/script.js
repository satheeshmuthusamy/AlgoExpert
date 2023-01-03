'use strict';

//////////CLASSES
/*
const person={
isHuman:true
};

//class object inherited from another class object
const child =Object.create(person);
// child.__proto__=person;//depricated version of prototyping
child.maxAge=18;

console.log(person);

//creating proto and assigning properties of new object

// const child=Object.assign(Object.create(person),{
//     maxAge:18,
// })

//setPrototypeOf method
// const child = {
//     maxAge:18,
// }
// Object.setPrototypeOf(child, person);

// Another way
// const child = {
//     maxAge:18,
//     __proto__:person,
// }

//Another way  -->it works the same way

// const child=Object.create(person,{
//     maxAge:{
//         value:18,
//         writable:true,
//         configurable:true,
//         enumerable:true,
//     },
//     lastName:{
//         value:'Satheesh M',
//     }
// })


const jhon=Object.create(child);
jhon.name='John';
console.log(jhon.__proto__);//proto of jhon is child object's property
console.log(jhon.__proto__.__proto__);//It represents the proto of child

child.maxAge=19;//it will reflect on the jhon's properties

console.log(child.isHuman);//true
console.log(child);
*/

/////EVERYTHING UNDER NON PRIMITIVE VALUE IS ALMOST OBJECTS
/////ARRAYS AND FUNCTIONS ARE SIMPLY OBJECTS

// const funcProto=Object.getPrototypeOf(()=>{});
// console.log(Object.getOwnPropertyNames(funcProto));// ['length', 'name', 'arguments', 'caller', 'constructor', 'apply', 'bind', 'call', 'toString']

// const arrayProto=Object.getPrototypeOf([]);
// console.log(Object.getOwnPropertyNames(arrayProto));//more array's properties


////FUNCTION CONSTRUCTORS
/*
function Person(name){
    console.log('here');//It gets called when we create new object with Person prototype
    this.name=name;
}


// .prototype represents its own properties itself
Person.prototype={
    constructor: Person,
    isHuman:true,
};


Person.prototype.test='ok';


const conner=new Person('Conner');
const clemet=new Person('Clemet');
console.log(Object.getPrototypeOf(conner));
console.log(Object.getPrototypeOf(clemet));
// clemet.firstName='clemet';
// console.log(conner);
// console.log(clemet);
console.log(conner.prototype===clemet.prototype);//true

Person.prototype.speak=function(){
    console.log(`Hello this is `+ this.name);
}
// // console.log(Person);
// clemet.speak();
// conner.speak();

///INSTANCE OF --> IS THIS OBJECT IS INHERITED FROM THE OBJECT
console.log(conner instanceof Person);//1
console.log(clemet instanceof Person);//1

*/

//////POLYFILLS

//TO PUSH THE VALUE IN THE ARRAY

//if the push is not working in old day browsers
if(Array.prototype.push===undefined){
    Array.prototype.myPush=function(value){
        console.log(this);//[1, 2, 3]
        this[this.length]=value;
        //
    }
}

const arr=[1,2,3];
// arr.myPush(4);
arr.push(4);
console.log(arr);


////////CLASSES

class Person{

    static isHuman=true;//it's only the property for Person ,not for its instances
    constructor(name){
        this.name=name;
        // speak(name);
    }
    speak(){
        console.log('Hello this is '+this.name);
    }
}
const Satheesh = new Person('Satheesh');
console.log(Satheesh);
console.log(Satheesh.isHuman);//undefined


//Child is the instance of Person
class Child extends Person{
    #age;//to private the value-->private field
constructor(name,age){
    super(name);//super keyword calls the constructor of class Person-->this.name=name;
    this.#age=age;
}

}

const child=new Child('Ana',10);
console.log(child);
console.log(child instanceof Person);//true
console.log(Person instanceof Function);//true


console.log(child.age);//undefined


class GrandChild extends Child{

}