#!/usr/bin/node

const http=require('http'),
      fs=require('fs'),
      qs=require('querystring'),
      log=require('util').debuglog('UPLOAD-FILE');

var uploadPage=''
  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
    + '<meta charset="UTF-8">'
    + '<title>Upload File</title>'
  + '</head>'
  + '<body>'
  + '<h1>Upload File</h1>'
  + '<form method="post" enctype="multipart/form-data" action="/upload" >'
    + '<input type="file" name="upload" mutiple="multiple">'
    + '<input type="submit" value="Upload">'
  + '</form>'
  + '</body>'
  + '</html>';

