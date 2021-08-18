
const fs = require('fs');
function logRequest(fileName, requestDetails, callback) {
    const requestLog  = `\n request on ${requestDetails.date}: {url: ${requestDetails.pathname}, query: ${requestDetails.query}}`;

    fs.appendFile(fileName, requestLog, (err) => {
        if (err) console.log('serverHelper:', err);
        callback();
    })
}

function logRequestasync(fileName, requestDetails) {
    const requestLog  = `\n request on ${requestDetails.date}: {url: ${requestDetails.pathname}, query: ${requestDetails.query}}`;

    return new Promise((resolve, reject) => {
        fs.appendFile(fileName, requestLog, (err) => {
            if (err) {console.log('serverHelper:', err);reject();}
            resolve();
        })
    })
    
}

module.exports ={
    logRequest,
    logRequestasync
};