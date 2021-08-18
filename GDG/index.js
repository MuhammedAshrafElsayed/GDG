const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 5010;

fs.exists('./db_file.txt', (exists) => {

    console.log('alexa','exists', exists);
    
    if (!exists) {
        const file = fs.createWriteStream('./db_file.txt');
        for (let i = 0; i <= 1e5; i++) {
            file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
        }
        file.end();
    }
})

app.get('/:fileName', (req, res, next) => {
    try {
     
    console.log('alexa','req.params.fileName', req.params.fileName);
    // const file = fs.createReadStream(`./${req.params.fileName}`);
    //  file.pipe(res);
    let i = 1;
    setInterval(()=> {
        if (i >= 3) {
            res.end();
        }
        i++;
        res.write('data')
    }, 2000);

    } catch (error) {
        console.log('alexa','error', error);
        
    return next(error);    
    }
})

app.use((req,res,next,err) => {
    console.log('alexa','err', err);
    
});

app.listen(PORT, () => {
    console.log('alexa', 'server connected on Port:', PORT);

})
