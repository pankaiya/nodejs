#!usr/bin/node

const cp=require('child_process');

cp.spawnSync('node',['02-child.js'],{stdio:['ignore',1,2]});

//同步执行（按顺序执行），下面这条语句就要等到子进程进行完才会执行
//异步进程的话，下面这条语句就会首先执行，不管子进程是否执行。
console.log('I am father process.PID:',process.pid);
