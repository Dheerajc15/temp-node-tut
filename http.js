const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Welcome to our home page.');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('This is the about us page.');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for.</p>
        <a href="/">Back Home</a>
        `);
    }
});

server.listen(5000);
