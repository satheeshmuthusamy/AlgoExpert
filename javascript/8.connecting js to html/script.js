'use strict';

window.addEventListener('load',main);//after all css and images loaded then it will work
window.addEventListener('DOMContentLoaded',main);//after dom is loaded

function main(){
    const button=document.querySelector('#button');
    
    button.addEventListener('click',function(){
    document.body.style.backgroundColor='blue';
    });
}

// linking script in head tag is not a good practice it will loads before the content(DOM tree) is readed .then it will not work
// but we link that in body it will take too much time (to be loaded after the html content)
// ṣo we can neglecte this problem by adding event listener in the top  of script

// or else just use defer attribute in the script ==>HERE JS WILL NOT EXECUTED UNTIL ALL THE DOM IS DOWNLOADED AND IT LOOKS BETTER AND CLEANER
// OR ASYNC-->WHILE IT DOWNLOADS BOTH AND WAITS UNTIL DOM IS LOADED
const array=[1,2,3,4,5];
const addOneDArray=(nums)=>{
let newArray=[];
let temp=0;

for(let i=0;i<nums.length;i++){
    console.log(nums.length);
    for(let j=0;j<=i;j++){
        temp+=nums[j];
        console.log(temp);
    }newArray.push(temp);
    temp=0;
}
return newArray;
}

console.log(addOneDArray(array));

