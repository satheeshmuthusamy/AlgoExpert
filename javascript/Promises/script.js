'use strict';

/////PROMISES-->non blocking event
//promise is simply an object.
// it has states
// state-->pending,fulfilled,rejected
// resolve and reject is the two parameters to change the state


// Async 
// const promise=new Promise((resolve,reject)=>{
//     // resolve(2);//Promise {<fulfilled>: 2}
//     // change state to fulfilled and  value to 2

//     // Promise {<pending>}-->when there is no values
//     // reject(2);//Promise {<rejected>: 2}//we should need to catch the error
    
//     // setTimeout(()=>resolve(2),1000);
//     setTimeout(()=>reject(new Error('Something went wrong')),1000);
// });

// const promise=Promise.resolve(3);//directly creating promise which is resolved (no need for pending)


// Promise.all([
//     Promise.resolve(3),
//     Promise.resolve(2),
//     new Promise((res,rej)=>setTimeout(()=>res(5),1000))
// ]
// ).then(console.log)
// .catch(console.log);
;//to catch the error result

// if any one of the promise is rejected then all others are rejected

// Promise.race()=>returns the first promise which is resolved (it can be an error or anything)
// promise.any([])-->it waits any of the state is fulfilled,or else if all the promises throws errors then it will throw an error of all values are rejected
// .then(console.log).catch(()=>console.log('All rejected'))(it will be in the end of promise.any)


/////ASYNC AWAIT
//async implicitly returns the promise and returns as fulfilled Promise {<fulfilled>: 3}
// they allow us to use await
async function tester(){

    return await new Promise((res,rej)=>{
        setTimeout(()=>rej(new Error('Somethig went wrong')),1000);
    });
    // try{
    //     // const value= await new Promise((res,rej)=>setTimeout(()=>res(3),1000));
    //     const value= await new Promise((res,rej)=>setTimeout(()=>rej(new Error('Something went wrong')),1000));//for error catching
    //     console.log(value);
    //     // return 3;
    // }catch(error){
    //     console.log('oh no'+error);
    // }
}

tester().then(console.log).catch(error=>console.log('oh no'+ error));
//oh noError: Somethig went wrong



// console.log(promise);//Promise {<pending>}

// promise
// .then(value=>value*2)
// .then(value=>value+1)
// .then(value=>{
//     throw new Error('somethig went wrong');
// })
// .then(console.log)
// .catch(error=>{
//     console.log('oh no'+error);
//     return 10;
// })
// .then(console.log)
// .finally(()=>console.log('done'));//7

// finally takes np parameter
//initially it returns value 6 then it returns value 6+1 as call back function

//output
// Promise {<fulfilled>: 3}
// script.js:33 oh noError: somethig went wrong
// 10
// done






/////////////////////////////////////////////


// setTimeout(()=>console.log(promise),1500);//Promise {<fulfilled>: 2}-->after 1.5 milli seconds

// we always can't use timeout so we can use then -->we can use then after the promises is finished

// first function-->if case passed.2->if failed
// promise.then(value=>console.log(value),error=>console.log('oh no the '+error));//2
// promise.then(console.log).catch(error=>console.log('oh no the '+error));//2
// catching error






