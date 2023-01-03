'use strict';

/////OBJECTS==> Objects are the non primitive data type which is used to store key value pairs in javascript.Object keys are usually string ,but they can also be symbols. Values on the other hand can be any type.Objects are usually declared with the object literal syntax.Javascript it objectifies almost everything
const object={
    firstName:'Satheesh M',
    job:'Jobless',
    age:24,
    location:'Coimbatore'
}

const myKey='key';

const website={
    name:'algoexpert',
    rating:5,
    fonuder:'Conner',
    isAwesome:true,
    [myKey]:1234,//[myKey] -> represents the key
}

console.log(website);

//accessing the values using dot notation and square notation
console.log(website.name,website['fonuder']);

const key='name';
console.log(website[key]);//algoexpert
//[]-->

//change the properties
website.name='Frontend Expert ';
console.log(website);//the name will be changed--> here we are not changing the whole value just mutating the name key value pair only

// adding
website.foo='bar';
console.log(website);

// removing 
delete website.foo;//removes foo key:value pair
console.log(website);


////OBJECT EQUALITY
console.log({}==={});//FALSE
// two objects are not equal to each other based on their values

const obj={};

console.log(obj=={});//false
console.log(obj==={});//false
console.log(obj==obj);//true
console.log(obj===obj);//true

// SHORT HAND NOTATION

const name="Satheesh";

const object2={
    // name:'name',//instead we can use shorthand notation
    name,
    age:24,
    place:'Coimbatore',
}

console.log(object2);//{name: 'Satheesh', age: 24, place: 'Coimbatore'}


const obj3=new Object();//creates empty object
obj3.name="Conner";
obj3.age=25;
console.log(obj3);


////CONSTRUCTOR FUNCTION

function Website(name,rating,founders){
this.name=name;
this.rating=rating;
this.founders=founders;
}

const frontEndExpert=new Website('Frontend Expert',5,'Conner Ardmen');
console.log(frontEndExpert);


//////SYMBOLS

//SYMBOLS==> Symbol is a primitive type for unique identifiers. Symbols are created with Symbol() call with an optional description (name). Symbols are always different values, even if they have the same name. If we want same-named symbols to be equal, then we should use the global registry: Symbol


const id=Symbol('id');
const id2=Symbol('id');
console.log(id===id2);//false--> It creates unique values to each and every value even if they have same values
console.log(id==id2);//false
const id3=Symbol.for('id3');
const id4=Symbol.for('id3');
console.log(id3===id4);///true -->It has same symbol--> comes from global symbol registery

const obj4={
    [id]:1234,
    [id2]:0,
    id:4568,
}
console.log(obj4);
// {id: 4568, Symbol(id): 1234, Symbol(id): 0}

// to check the key is there in object

console.log('name' in website);//true -->looks properties on objects and inherited object(parent object also)
console.log(website.hasOwnProperty('name'));//true-->only looks in the object
console.log(website.name !== undefined);//true-->don't recommend this


////METHODS IN OBJECTS

const obj6={
    firstName:'Jonas',
    lastName:'Schemedtman',
    course:'Javascript Mastery',
    rating:5,
    sayHello:function(){
        console.log(this);
        console.log(`Say Hello to ${this.firstName}`);
        // return this.firstName;
    },
    // GETTER AND SETTER METHODS
    get getRating(){
        return this.rating;
    },
    set setRating(value){
        this.rating=value;
    },
};
obj6.sayHello();
// use this as a normal property and not like function
console.log(obj6.getRating);//5
obj6.setRating=4.5;
console.log(obj6.getRating);//4.5

//////INHERITENCE THE OBJECT
const inheritObject={
    name:"Algo Expert",
    rating:5,
    founder:'Clement Conner',
}

const InheritedObject={
    __proto__:inheritObject,
    foo:'bar',
    hello:'world',
    [Symbol('id')]:0,
};
console.log(InheritedObject);//{}
console.log(InheritedObject.name);//Algo Expert-->It looks the property of parent element which is inherited from parent element

/////ITERATING OVER AN OBJECTS

console.log(Object.keys(InheritedObject));//['foo']-->It excludes the symbols and __prototype__
console.log(Object.values(InheritedObject));//['bar]
console.log(Object.entries(InheritedObject));//all entries will be printed

Object.entries(InheritedObject).forEach((value)=>console.log(value));//It gives the output in the form of arrays

///DESTRUCTURING THE OBJECT
Object.entries(InheritedObject).forEach(([key,value])=>console.log(key,value));//foo bar hello world-->gives the string outout

//Using for loop
for(const key in InheritedObject){
    console.log(key);//It actually see the proto and doesn't look for symbols
}

////copying object

const myOb={
    original:123,
}

Object.assign(myOb,InheritedObject);//It copies second Object properties to the first object (It won't copy the inumarables)
console.log(myOb);//{original: 123, foo: 'bar', hello: 'world', Symbol(id): 0}


// Object.freeze(InheritedObject);//It makes the object immutable-->once we use freeze the changes in objects won't be assigned and cant edit or add new properties
// InheritedObject.foo=20;
// console.log(InheritedObject);

// to check object is freezed
console.log(Object.isFrozen(InheritedObject));///true

// Object.seal(InheritedObject);//it works same as freeze here we can change existed properties but cant create new properties
Object.isSealed(InheritedObject);//To check whether seal is applied on object or not
 
//////CONVERT THE OBJECT TO THE STRING WHEN WE NEED

console.log(InheritedObject.toString());//[object Object]-->it won't change it nut we can set the string value by adding some function

// InheritedObject.toString= function() {
//     return 'Hello world!';
// }

// console.log(InheritedObject.toString());


// console.log(InheritedObject.valueOf());





