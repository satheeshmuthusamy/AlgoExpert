"use strict";

//////GENERATORS-->AN ITERABLE OBJECT BY USING A GENERATOR FUNCTION. A GENERATOR FUNCTION IS DEFINED USING function*.THEN EACH yield RESULTS IN ANOTHER ITEM BEING ADDED TO ITERABLE GENERATOR OBJECT.

////THE GENERATOR OBJECT HAS THREE METHODS

//NEXT(value)-->It returns an object with the next value in the iterator and a done boolean. Optionally passes a value back into the generator function.
//RETURN(value)--> Adds a passed in argument to the iterable results and ends iteration
//THROW(error)-->Throws an error, stopping code execution unless the error is caught.

function* getNumbers() {
  const x = yield 1;
  yield x + 2;
  yield 3;
}

const generatorObj = getNumbers();
console.log(generatorObj.next()); //{value: 1, done: false}
console.log(generatorObj.next().value); //NaN
console.log(generatorObj.next(3).value);//3
console.log(generatorObj.next(7).value);
console.log(generatorObj.next().value);
