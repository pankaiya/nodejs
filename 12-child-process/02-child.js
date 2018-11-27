#!usr/bin/node

console.log('I am child process.PID',process.pid);
var timer=global.setInterval(()=>{
  console.log('time:',Date.now());
},2000);
global.setTimeout(()=>{
  global.clearInterval(timer);
},16000);
