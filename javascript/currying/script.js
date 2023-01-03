"use strict";

////////CURRYING-->THE PROCESS OF TRANSFORMING A FUNCTION TO TREAT ITS PARAMETER AS A SEQUENCE OF INDIVIDUAL FUNCTION CALLS THAT EACH TAKE ONE PARAMETER .FOR EXAMPLE FUNC(A,B,C) WOULD BECOME FUNC(A)(B)(C)

//////ADVANTAGES OF CURRYING--> It helps you to avoid passing the same variable again and again. It divides your function into multiple smaller functions that can handle one responsibility.

function sum(a, b, c) {
  return a + b + c;
}

function curriedSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

//BOTH WORKS SAME BUT DIFFERENT SYNTAX
console.log(sum(1, 2, 3));
console.log(curriedSum(1)(2)(3));

////////PASSING FUNCTIONS

// function curry(func){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return func(a,b,c);
//             }
//         }
//     }
// }

//save protion of function
function curry(func) {
  return (a) => (b) => (c) => func(a, b, c);
}

function subtract(a, b, c) {
  return a - b - c;
}

const currySum = curry(sum);
const currySub = curry(subtract);
console.log(currySum(1)(2)(3)); //gives the same output
console.log(currySub(5)(3)(1)); //1
