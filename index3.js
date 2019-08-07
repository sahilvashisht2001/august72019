const http=require('http');
const site=http.createServer(function(req,res){

    console.log('Hello world')
    
    res.setHeader('Content-Type','text/html');
    console.log(req.rawHeaders);
    res.end('<h1>Hello class</h1>');
});

site.listen(3000);