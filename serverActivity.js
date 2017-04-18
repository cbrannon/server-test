const http = require("http");

const PORT1 = 7000;
const PORT2 = 7500;

let compliments = ["You're nice!", "I like your hair!", "Nice shoes!"];
let cuts = ["I hate your face", "When was your last shower?", "Get a haircut hippy"];

function handleRequest1(request, response) {
    response.end(compliments[Math.floor(Math.random()*compliments.length)]);
}

function handleRequest2(request, response) {
    response.end(cuts[Math.floor(Math.random()*cuts.length)]);
}

const server1 = http.createServer(handleRequest1);
const server2 = http.createServer(handleRequest2);

server1.listen(PORT1, () => {
    console.log("server listening on http://localhost:" + PORT1);
});

server2.listen(PORT2, () => {
    console.log("server listening on http://localhost:" + PORT2);
});