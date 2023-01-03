"use strict";

const BASE_API = "http://localhost:8080/api";

//before fetch request js uses xmlhttp request
// const request=new XMLHttpRequest();
// request.addEventListener('error',function(){
//     console.log(this.responseText());
// });

// request.open('GET',BASE_API);
// request.send();

// fetch data
// Its async funciton

// fetch(url)
// .then(res=>res.text())
// .then(console.log)
// .catch((error)=>console.log('oh no '+ error));//returns promise

async function main() {
  const url = new URL(BASE_API);
  url.searchParams.set("firstName", "Satheesh");
  url.searchParams.set("lastName", "Muthusamy");

  try {
    const response = await fetch(url);
    const text = await response.text();
    console.log(text);
  } catch(error) {
    console.log("oh no", + error);
  }
}

main();


// console.log('After fetch');//it will be printed first
