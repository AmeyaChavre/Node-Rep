// This is a hello world program in NodeJS


let http = require("http");



http.createServer(function( req, res ){

    
    res.writeHead(200,{"Content-Type":"text/plain"}); // >> notice here that we are sending status code 200 OK 
    // >> notice here we are declaring the content type of http header as text/plain
    res.end("Hello World\n"); // >> this is what server will return as a response 
}
).listen(3000); // end of callback function

// notice that we are using port 3000 to listen to our server 

console.log("The server is running at http://127.0.0.1:3000/");



