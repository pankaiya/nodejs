#!/usr/bin/node
const EventEmitter=require('events').EventEmitter;
var e=new EventEmitter();

//eventEmitter.on()方法用于注册监听器
e.on('hello',()=>{console.log('hello world!');});
e.on('bye',()=>{
  console.log('goodbye!');
  process.exit();
});

//eventEmitter.emit() 方法用于触发事件
setInterval(()=>{
  e.emit('hello');
},1000);

setTimeout(()=>{
  e.emit('bye');
},5000);

