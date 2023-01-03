'use strict';

///SYNTACTIC SUGAR==>UNIQUE FUNCTIONALATIES TO MAKE OUR CODE MORE CONCISE(SHORTER FORMAT)
const array=[1,2,3,4];

const doubledArray=array.map(value=>value*2);//arrow function
// here instead of creating new function for double the value we can write the same inline function code here it reduces code blocks and it is called annonymous function
//**It applied only if the functions is called once throughout the code */

console.log(doubledArray);


//DESTRUCTURING 

const array0=[1,2,3,4];

// const first=array0[0];
// const second=array0[1];
// instead of this long code we can use destructuring
const [first,second,...rest]=array0;//it won't mutate original arary
//here ...rest takes the remaining values

console.log(first,second,rest);//1 2 (2) [3, 4]
console.log(array0);

/// DESTRUCTURING IN OBJECTS

const Person={
    name:'Satheesh',
    age:24,
    website:'shiftCoder',
    friends:['sanjay','ramesh','sudhar','vasnth','ranga'],
}

const {name:firstName,company='AlgoExpert',...others}=Person;//-->here we defines the name to firstName from the Person object
//here we can also define a default value to the variables-->only works if the variables are not there in object and has no value


// console.log(name);//satheesh
console.log(firstName,others,company);//satheesh,{age: 24, website: 'shiftCoder', friends: Array(5)}


/// DESTRUCTURING OBJECT AS A PARAMETER
function printName({name}){
console.log(name);
}

printName(Person);//Satheesh

////SPREAD OPERATOR

const array1=[1,3,4,5];

function addTwoNumbers(x,y){
    return x+y;
}
console.log(addTwoNumbers(...array1));//4
//It spreads all the values and the function only can take two inputs at a time so it gives 4 as an output

const arr2=[8,5,9];

const combinedArray=[...array1,...arr2];
console.log(combinedArray);//(7) [1, 3, 4, 5, 8, 5, 9]


//////  TRMPLATE LITERAL-->STRING CONCATINATIONS
// const name='Satheesh M';
// const name=null;
const name=undefined;

//NULLISH COLLASION-->TO CHECK DEFAULT NAME
const defaultName=name??'Satheesh Muthusamy';
console.log(`Hello ${defaultName}.`);

const person={
    // company:{
    //     website:'AlgoExpert',
    // }
}

// optional chaining

// console.log(person.company.website);//this gives error but the answer should be undefined
console.log(person?.company?.website);//here we can solve this problem using optional chaining (?) and also Nullish collasion (??)
// undefined
// Really usefull in api's that does exist or doesn't


/////SHORT CIRCUIT
//JS reads from left to right
const shouldRunCode=true;
function logWorld(){
    console.log("Hello world!");
}

if(shouldRunCode){
    logWorld();
}

// instead we can write like this
shouldRunCode && logWorld();//here first it checks shouldRunCode is true and then if its true then it calls the function else the code will short circuited
