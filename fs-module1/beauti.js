const http = require("http")
const fs = require("fs")
const PORT = 8080;


const server = http.createServer((req,res)=>{
	console.log(req);
	
	let filename = '';
	
	switch(req.url){
		case'/:
		 filename = 'about.html';
		 break;
		 
		 case'/:
		 filename = 'about.html';
		 break;
		 
		 case'/:
		 filename = 'about.html';
		 break;
		 
		 default  
	} 
res.writeHead(200,{
	"Content-Type":"text/html"
});

fs.readFile('${filename})
	
});