 const fs = require("fs");

 fs.readFile('input.txt',"utf8",afterReadingsCompleted);


 
 function afterReadingsCompleted(error,data){
	
	 try{
		 console.log(data);
	}catch(error){
		 console.log('can not read the file ,try again');
	 }
	 
  // console.log(error);
  
	 // console.log(data);
 }	
 doSomething();
 function doSomething(){
	 let i=0;
	 for(;i<1000000;i++);{
		 
	 }
	 
	  console.log('some event is performed',+i);
 }
 