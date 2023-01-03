"use strict";

// lexical scoping-->The scoping system in js that all code blocks have access to all identifiers in their parent enironment.When an identifier is not defined locally, js look to the parent environment for it.If it is still not found,it will look in grandparent's environment and so on before looking in the global environment.
let globalNum = 6;
// console.log(globalNum);//6 here
//closure-->A function along with saved reference to the lexical environment it was defined in. Simply but this function have access to all of the variables in scope at the time of definition ,even if the parent function has returned
function logNum() {
  const localNum = 5;
  console.log(globalNum * localNum); //30
}

globalNum = 10; //if we change it will reflect on the function
logNum();

function example() {
  const num = 5;
  function logNum() {
    console.log(num);
  }
  logNum();
}

example(); //5

//////EXAMPLE

function makeFunctions() {
  let privateNum = 0; //it cant be accessed outside of this function

  function privateIncrement() {
    privateNum++;
  }
  return {
    logNum: () => console.log(privateNum),
    increment: () => {
      privateIncrement();
      console.log("Incremented!");
    },
  };
}

// console.log(private);//error
// const {logNum,increment}=makeFunctions();
// const {logNum:logNum2,increment:increment2}=makeFunctions();

/////Interview question

for(let i=0;i<3;i++){
    //here let is scoped inside the curly brackets with iteration of loop

    setTimeout(()=>{
        console.log(i);//0,1,2
    },500)
}
// console.log(i);//here i is undefined

//here i is global and at the time the function runs the closure is created then the i value is in the top of global scope i=3;
for(var i=0;i<3;i++){
    //same var i is used in each iterations
    setTimeout(()=>{
        console.log(i);//3,3,3
    },500)
}

console.log(i);//3