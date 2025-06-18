const http = require("http")
const playsound = require("./playsound.js");

const server = http.createServer((req, res) => {
    if(req.method === 'POST'){
        console.log("post request");
        playsound();
    } else {
        res.write("Not a POST request");
    }
    res.end();
})

server.listen((5001), () => {
    console.log("Server is Running");
})