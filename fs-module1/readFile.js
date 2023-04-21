 const fs = require("fs");

 fs.readFile('input.txt',"utf8",afterReadingsCompleted);

 function afterReadingsCompleted(error,data){
	
	 try{
		 console.log(data);
	}catch{
		 console.log(error);
	 }
	 
  // console.log(error);
  
	 // console.log(data);
 }	

// const fs = require("fs");

// fs.readFile('input.txt',"utf8",afterReadingsCompleted);

// function afterReadingsCompleted(error,data){
	
	// if(error==null){
		// console.log(data)
	// }else{
		// console.log('can not read file');
	// }
 // // console.log(error);
	 // // console.log(data);
// }	