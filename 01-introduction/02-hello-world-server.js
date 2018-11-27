#!/usr/bin/node

const http = require('http');

http.createServer((req, res) => {
    res.end('hello world');

}).listen(8080);
//node 02-hello-world-server.js
//在浏览器中输入网址ip192.168.130.144:8080
//
//用 curl linux 命令行程序测试 web 程序
//curl http://localhost:8080/
