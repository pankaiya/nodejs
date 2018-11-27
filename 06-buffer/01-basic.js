#!/usr/bin/node
const log=console.log;

var buf1=new Buffer(256);
buf1[0]=0;

log('buf1 length:',buf1.length);
log('\nbuf1:',buf1);

//通过循环，来初始化buffer中的每个字节
for(var i=0;i<buf1.length;i++) buf1[i]=i;
log('\nbuf1:',buf1);

//类似数组，对buffer做切片处理
var buf2=buf1.slice(250,256);
log('\nbuf2:',buf2);

//在buffer中填充数据，buffer数据转化成JSON数据
buf2.fill(0);
log('\nbuf2:',buf2);
log('\nbuf2\'s JSON:',buf2.toJSON());
log('\nbuf2\'s JSON:',JSON.stringify(buf2));

//用数组初始化buffer
var array=['a',0xba,0xdf,0x00,255,10];var buf3=new Buffer(array);
log('\nbuf3:',buf3.length,buf3);

//用字符串初始化buffer
var buf4=new Buffer('hello world','utf8');
log('\nbuf4:',buf4.length,buf4.toString());

//buffer数据复制（把buf4复制给了buf3,并且buf3的长度不变）
buf4.copy(buf3,0,0,buf3.length);
log('\nbuf3:',buf3.length,buf3.toString());

