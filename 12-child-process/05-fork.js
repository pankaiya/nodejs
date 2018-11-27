#!/usr/bin/node

const cp=require('child_process');

console.log('I am father process.PID:',process.pid);

//fork方法，只输入文件名，不输入命令
cp.fork('02-child.js');

setTimeout(()=>{
  console.log('5 seconds passed.father Game Over!');
},5000);
