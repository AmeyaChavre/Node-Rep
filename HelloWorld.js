// This is a hello world program in NodeJS

// step 1 : declare a variable and assign require

let http = require("http");

// step 2 : using http variable give call to callback function

http.createServer(function( req, res ){

    // inside the createServer() describe req and res
    // req is used for sending out return http header
    res.writeHead(200,{"Content-Type":"text/plain"}); // >> notice here that we are sending status code 200 OK 
    // >> notice here we declaring the content type of http header as text/plain
    res.end("Hello World\n"); // >> this is what server will return as a response 
}
).listen(3000); // end of callback function

// notice that we are using port 3000 to listen to our server 

console.log("The server is running at http://127.0.0.1:3000/");



