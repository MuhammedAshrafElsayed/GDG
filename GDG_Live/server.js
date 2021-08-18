const http = require('http');
const url = require('url');
const port = 3000;
const cbFn = (request, response) => {
    console.log(request.url);
    const path = url.parse(request.url).pathname
    if (path === '/about') {
        response.write('About');
        response.end('done');
        return;
    }

    if (path === '/home') {
        response.write('Home bta3y');
        response.end();
        return;
    }
    response.statusCode = 404;
    response.end('404 not Found');

};
http.createServer(cbFn).listen(port);