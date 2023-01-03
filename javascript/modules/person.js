'use strict;'

// export default class Person{
class Person{
    // here only one object is available so default makes it easier 
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`Hello this is ${this.name}!`);
    }
}

// more ways of export
export default Person;
// this also works in same way
// export {Person as default};



