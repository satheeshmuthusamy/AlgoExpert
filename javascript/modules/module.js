'use script';

//MODULES-->JAVASCRIPT CODE THAT RUNS IN ISOLATION ,WITHOUT POLLUTING THE GLOBAL NAMESPACE
//javascript files can access each others

///NAMING COMPLEX ISSUES-->LARGE SCALE INDUSTRIES LIKE AMAZON , FLIPKART ARE USING LARGE AMOUNT OF JAVASCRIPT IN ONE PROJECT ,SO WE CAN'T USE THE SAME NAME EVERYWHERE.SO THEREFORE HERE WE USE IIFE(IMMEDIATELY INVOKING FUNCTION EXPRESSION)


// wrap all the code in one expression and call it(annonymous function)
// (function (){

//     frontEndExpert();
//     algoExpert();
    
//     const satheesh=new Person('Satheesh');
//     console.log(satheesh);
//     satheesh.speak();
// })();
// it does not includes any function global nemes--> it can't work everywhere
// to solve this problem use imports and exports

// IMPORTING
/*
// import * as helpers from './helper.js';//importing helper.js folder
import {frontEndExpert,algoExpert as algo} from './helper.js';//new way(as keyword to change name)

// import * as person from './person.js';//importing from person.js folder
import Person from './person.js';//importing from person.js folder
frontEndExpert();
algo();
const satheesh = new Person('Satheesh');
console.log(satheesh);
*/






// way-2-->wait for the code to be loaded -->data fetched from other servers

const shouldSayFrontend=true;
if (shouldSayFrontend){
    const {frontEndExpert}=await import ('./helper.js');
    frontEndExpert();
}