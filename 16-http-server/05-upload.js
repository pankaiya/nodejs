#!/usr/bin/node

const http=require('http'),
      log=console.log;

http.createServer((req,res)=>{
  if(req.url==='/'&&req.method==='post'){
    log('${req.method} ${req.url} HTTP/${req.httpVersion}');
    log(req.headers);
    log('');
    req.pipe(process.stdout);
    res.end('OK!')
  }else{
    res.statusCode=404;
    res.end('error');
  }
}).listen(8080);
