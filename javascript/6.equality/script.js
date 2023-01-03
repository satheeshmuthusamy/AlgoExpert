'use strict';

// ==->"loose equality",compares values only
console.log(5=='5');//true
// here implicit type coertion is happened one to another or both same types

//===-->"strict equality"-->compares value and type also
console.log(5==='5');//false

console.log(Number(false));
console.log(Number(true));
console.log(true==1);//true
console.log(true===1);//false-->here the number and boolean data is not same

console.log(Boolean(10));//true
console.log(Boolean(0));//false
console.log(typeof 0);//Number

//////NAN-->Not a number
console.log(Number('abv'));//false
console.log(NaN==NaN);//false-->NaN is not equal to anything
console.log(NaN===NaN);//false

////Null
const x=5;
if(x==null|| x==undefined){
    console.log('do something!');
}

console.log(null==undefined);//true
console.log(null===undefined);//false-->here type is different
console.log(null===0);//false
console.log(null==='');//false
console.log(null===false);//false

console.log({}==={});//false=>nothing inside of them but they are different objects
console.log({}=={});//false

const obj={};
console.log(obj==obj);//true-->here both are same objects
console.log(obj===obj);//true-->both are same type also

console.log([]==[]);//false-->here they can't have same values
console.log([]===[]);//false-->here type is same but value is different

const array=[];
console.log(array==array);//true
console.log(array===array);//true

///95% use === operator
//== use null and undefined