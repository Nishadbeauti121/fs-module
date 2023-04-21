const http = require("http")
const fs = require("fs")
const PORT = 8080;


const server = http.createServer((req,res)=>{
fs.readFile('index.html',function(error,data){
if(error==null)
{
res.write(data);
res.end();
}else(error)
});

});

server.listen(PORT,function(){
console.log('server startted')
})
