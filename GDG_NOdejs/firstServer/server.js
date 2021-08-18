const http = require('http');
const url = require('url');
const fs = require('fs');
const helper = require('../utils/serverHelpers');
const port = 3060;
const server = http.createServer((req, res) => {
    console.log('server Created on port: ', port);
    const pathname = url.parse(req.url).pathname;
    const query = url.parse(req.url).query;
    console.log('pathname', pathname, 'query', query);
    helper.logRequest('logs.txt', {pathname,query, date: new Date().toISOString()},() => {});

    if (pathname === '/') {
        res.statusCode = 200;
        res.write('hello world!!');
        res.end();
        return;
    }
    if (pathname === '/index') {
        fs.readFile(`html/index.html`, (err, data) => {
            if (err) {
                console.log('err', err);
                res.statusCode = 500;
                res.end('internal server error');
                return;
            }
            res.statusCode = 200;
            res.write(data);
            res.end();
        });
        return;
    }
    res.statusCode = 404;
    res.write('404 Not found!');
    res.end();
}).listen(port);
