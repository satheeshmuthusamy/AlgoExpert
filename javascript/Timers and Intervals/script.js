'use strict';

const start=document.querySelector('#start');
const stop=document.querySelector('#stop');
const count=document.getElementById('count');
const reset=document.querySelector('#reset');

start.addEventListener('click',startTime);
stop.addEventListener('click',stopTime);
reset.addEventListener('click',function(){
  count.textContent=0;
})
// let timerID;

const date=new Date('january 25,2025');
console.log(date);

let animationFrameID;
setTimeout(()=>{
  console.log(performance.now());//it shows the time endup running this code
  console.log(Date.now());//1668930061744-->no of milli seconds completed from jan-1,1970
},1000);

const timeOut=setTimeout(()=>console.log('timeout'),1000);//only once print 
clearTimeout(timeOut);//to clear timeout
// clearTimeOut and clearInterval both does the same thing but we should need to use which is correct for code writing purpose
const resetTime=()=>count.textContent=0;

function startTime(timestamp){
    console.log(timestamp);//amount of milli seconds when the page loaded
    // timerID=setInterval(()=>{
    //     count.textContent++;
    // },500)//runs every 0.5 second

    // Animation intervals
    count.textContent++;
    animationFrameID=requestAnimationFrame(startTime);
    // 60 frames per second-->increase 60 times for every second
}
function stopTime(){
    // clearInterval(timerID);//clear setTimeInterval
    cancelAnimationFrame(animationFrameID);
}




///////EXERCISE
const timeInterval=setInterval(()=>console.log("set Time Interval!"),1000);
setTimeout(()=>console.log("set time Out!"),1000);
// timeInterval();
clearInterval(timeInterval);