const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    
    const url = req.url;

    res.writeHead(200, { 'content-type': 'text/html' })

    switch(url){
        case '/index':
            fs.createReadStream(__dirname + '/index.html').pipe(res);
            break;
        case '/about':
            fs.createReadStream(__dirname + '/about.html').pipe(res);
            break;
        case '/contact-me':
            fs.createReadStream(__dirname + '/contact-me.html').pipe(res);
            break;
        default:
            fs.createReadStream(__dirname + '/404.html').pipe(res);
            break;
    }
});

server.listen(8080)