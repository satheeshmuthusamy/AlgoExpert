'use strict';

//CREATING AN ARRAYS IN JAVASCRIPT
// const array=[1,2,3,'Satheesh M'];
// const array=new Array(1,2,3,'Satheesh M');
// empty array
// const array=new Array(5).fill(0);//5 empty spaces
// console.log(array);//[0,0,0,0,0]
// console.log(array.length);//5

const array=[1,2,3,5,4];
console.log(array[3]);//5->starts from 0th index
console.log(array.includes(4));//true

///manipulating array
array.push(6,5,9);
console.log( array.pop());
console.log(array);

array.unshift(10,11,12);
console.log(array);//adds element in the beginning
array.shift();//removes element from the beginning
// [10, 11, 12, 1, 2, 3, 5, 4, 6, 5]


console.log(typeof array);//object

////to check the variable is an array
console.log(array instanceof Array);//true

////////MAINPULATING ARRAY
console.log(array.splice(1,2));//removes the index element of 1 to 2
console.log(array);//[11, 2, 3, 5, 4, 6, 5]-->It mutates the array

const arr=[1,2,3];
arr.splice(1,3,"hello","world");
console.log(arr);// [1, 'hello', 'world']

///slice-->It will not mutate the original array-->gives the removed elements ass output
const newArr=arr.splice(0,2);
console.log(newArr);//[1, 'hello']

///concat
const concatedArray=arr.concat(newArr);
console.log(concatedArray);//['world', 1, 'hello']

///reverse array
const ages=[10,20,33];
// ages.reverse();
console.log(ages.reverse());//[33, 20, 10]

////array joining
// console.log(ages.join(',').replace(',',''));


//////LOOPING AN ARRAY
const loopArray=[1,2,3];
for(let i=0;i<loopArray.length;i++){
    console.log(loopArray[i]);
}

//using functions

loopArray.forEach((value)=>console.log(value));
loopArray.forEach((value,index,array)=>console.log(value,index,array));

for(const value of loopArray){
    console.log(value);
}

// loopArray.forEach((value)=>console.log(value));
for(const [key,value] in loopArray){
    console.log(key,value);
}

/////////MAPS-->did not mutate array

const map=[1,2,3];

const mappedArray=map.map((value,index,array)=>value+index);
console.log(mappedArray);//[1, 3, 5]

///FILTER METHOD

//only returns the values which passes the condition
const filteredArray=map.filter((value)=>value>1);
console.log(filteredArray);//[2, 3]-->returns new Array

////find
const findArray=map.find(
    function(value){
    return value>this.num;
},
{num:2}//object inside the function can be accessed by this keyword
)

console.log(findArray);//3-->gives the large value than the number

///every method--.to chech every elements
const everyArray=map.every(
    function(value){
    return value>this.num;
},
{num:2}//object inside the function can be accessed by this keyword
)
console.log(everyArray);//false-->gives boolean output


////SOME

const someArray=map.some(
    function(value){
    return value>this.num;
},
{num:2}//object inside the function can be accessed by this keyword
)
console.log(someArray);

///REDUCE METHOD
//can't pass this argument to reduce
const sumofArray=map.reduce((accumulator,currValue,index,array)=>
accumulator-currValue,0);
console.log(sumofArray);//6

////REDUCERIGHT==>WORKS FROM RIGHT TO LEFT
const sumofRightArray=map.reduceRight((accumulator,currValue,index,array)=>accumulator-currValue,0);
console.log(sumofRightArray);//-6

/////SORTING ARRAY==>ascending order
const sortArray=[5,9,2,1];
sortArray.sort(compareNumber);
function compareNumber(firstNumber,secondNumber){
// return firstNumber-secondNumber;//ascending order
// return 0;//nothing will happen
return secondNumber-firstNumber;//decending order
}

console.log(sortArray);




