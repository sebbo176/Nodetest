var http = require('http');

var app = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify({
        "dataFromServer": "ThisWasFromNode"
    }));
    console.log('Request received and reseponse sent');
});
app.listen(8081);
console.log('Server running at http://127.0.0.1:8081/');