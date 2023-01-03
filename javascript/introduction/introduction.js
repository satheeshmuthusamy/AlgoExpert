// 'use strict';
console.log("hello world!");

//INTRODUCTION TO JAVASCRIPT

// Multi paradigm ->event driven language==response to events
// functional-->pure functions ,first-class funcitons
// object oriented-->custom objects with inheritence
// Imperitive-->specify logic and control flow
// Declarative :specify desired output(js supports declarative programming)

// VERSION ECMA SCRIPT
// ES06->2015
// Intrepretted language
// Just in time compiler

/////////////Data types

/////////primitive types

//number,bigint (),Boolean (0,1),String,null(non existance value),symbol('unique value'),undefined(A value that has not been set)

var age = 25;
// dynamic typing no need to specify the datatype
let num = 10;
const name = "Satheesh M";
let num2 = 10.8;
console.log(Math.floor(num2)); //round minimum
console.log(Math.round(num2)); //closer value

let strNum = "10";
console.log(Math.random()); //random number
console.log(Number(strNum)); //to number10

let partNum = "10px";
console.log(parseInt(partNum)); //10
console.log(parseFloat(partNum)); //float numbers

// perform operations
// arthematic operatoes==>+,-,*,/,%
console.log(Math.pow(2, 2)); //power of the number

// Keywords
console.log(Infinity);
console.log(-Infinity);

// ////BIGINT
console.log(BigInt(100));
console.log(100n);
console.log(typeof 100n); //bigint

/////STRINGS
let str = "abcd";
console.log(str);
console.log(str > "efg"); //false
console.log("Hello \nworld!");

console.log(str.charAt(3));
console.log(str.includes("s"));
// startsWith(),endsWith,toUpperCase(),toLowerCase(),
console.log(str.substr(1, 2));
console.log(str.slice(1)); //it won't manipulate the str and it just returns remaining items

console.log(str.padStart(8, "*"));
console.log(str.padEnd(8, "*"));
// str.trim()==>remove the white space
console.log(` jshsh`.trim());
// trimStart()==>removes space from the start,trimEnd()==>removes space from the end

//////OBJECTS//////==>KEY VALUE PAIR

const Person = {
  name: "Satheesh",
  profile: "web developer",
};

console.log(Person);
// object to string
console.log(JSON.stringify(Person));
// {"name":"Satheesh","profile":"web developer"}
// string to object
console.log(JSON.parse(JSON.stringify(Person)));

// dot notation(.) & square bracket[] notation
console.log(Person.name);
console.log(Person["profile"]);
console.log(Person["name"]);

// /////MAP==>AGAIN A KEY VALUE PAIR

/////SETTING MAP VALUES
const map = new Map();
map.set(123, "Hello");
map.set("firstName", "Satheesh M");
//GET value in map
console.log(map);
console.log(map.get("firstName")); //value of firstName key
console.log(map.size); //2

//////SETS==>unique values
const set = new Set();
// adding the value
set.add("hello");
set.add("world");
console.log(set);
console.log(set.has("satheesh")); //false (to check the item is there)
console.log(set.size);

// delete values
console.log(set.delete("Hello"));

///////ARRAYS==>JUST AN OBJECT WITH SPECIAL SYNTAX
const array = [1, 2, 2, 5, 5];
console.log(array);
console.log(array.length);
// array methods
array.push(10); //add element in the end
array.pop(); //removes element in the end
array.shift(); //1-->removes first element from the array
array.unshift(57); //adds element from the start
console.log(array);

////////FUNCTIONS==>WORKS WHEN THEY CALLED SET OF CODE BLOCKS CAN BE CALLED EVERYWHERE IN THE CODE,THEY ARE ALSO TYPE OF OBJECTS
// function expression==>cant be called before declared
const addTwoNumbers = function (a, b) {
  return a + b;
};
console.log(addTwoNumbers(80, 100));

//function declaraiton==>can be called before declaration
function sumOfTwoNumbers(a, b) {
  return a + b;
}
console.log(sumOfTwoNumbers(100, 10));

// Higher order function==>passing functions as a parameter of another funciton

function addNumberpluetwo(number) {
  return number + 2;
}

function calcFunction(func, number) {
  return func(number);
}

console.log(calcFunction(addNumberpluetwo, 10));

///////LOOPING

for (let i = 0; i < 4; i++) {
  console.log(i);
}
// break continue

// WHILE LOOP
let j = 0;
while (j <= 3) {
  console.log(j);
  j++;
}

////DO WHILE LOOP==>PRINT ATLEAST ONCE
let k = 0;
do {
  console.log(1);
  k++;
} while (k <= 2);

/////FOR OF LOOP-->ITERABLES
for (const value of [1, 2, 3]) {
  console.log(value);
}

///output==>1,2,3

//FOR IN LOOP ==> KEY VALUE PAIRS
const object = {
  name: "Satheesh M",
  age: 23,
};

for (const key in object) {
  console.log(key);
  console.log(object[key]);
  // console.log(object['age']);
  // key,object[key];
}

// ///FOR EACH

[1, 2, 3, 4, 5, 6].forEach(function (value) {
  // annonymous functions
  console.log(value); //print each values in the passed array
});

///////CONDITIONALS
const condition = true;
if (condition) {
  console.log("Condition is true");
} else {
  console.log("condition is false");
}

////ELSE IF
///SWITCH STATEMENT

const myNumber = 3;
switch (myNumber) {
  case 1:
    console.log("The number is 1.");
    break;
  case 2:
    console.log("The number is Two.");
    break;
  case 3:
    console.log("The number is three.");
    case 5:
      case 6:
        case 7:
        console.log("The number in range between 5 to 7");
    break;
  default:
    console.log("No number found");
}

////////TERENARY OPERATOR

const conNumber=10;
console.log(conNumber>8?'The condtion is true and the number is greater than 8':'The condition is false and the number is less than 8');

///////THROW ERROR

//CATCHING ERROR

// throw 'oh no its an error!'///it throws an error in console window


// to avoid console error in debugging window use try and catch error
try{
  throw new Error('oh no');
}catch(error){
  console.log(error);
}


//////commentinf

//==>single line comment

/*
multiple line comment*/ 

/////CONSOLE FUNCTION
console.log('value');
// console.error('error message!');//to show the error message
// console.debug('Debug message!');
console.table([1,2],['hello ','world']);
// mostly used to get table view in 2D arrays

//////counts

console.count();//1
console.count();//2
console.count();//3
console.countReset();//reset the count again to 0
console.count();//1

///we can set counts to required values
console.count('number');
console.count('number');
console.count('key');

console.time();//time start
for(let i=0;i<1000;i++){}
console.timeEnd();//to end the time
// console.time();

// to trace where we are at the code
function foo(){
  console.trace();
}
foo();

////strict mode in required function

function strictMode(){
  // 'use strict';
  // write strict mode only inside single quotation
  x=20;
  console.log(x);
}

strictMode();