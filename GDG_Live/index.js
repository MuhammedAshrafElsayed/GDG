
var hello = 'Hello GDG!!';

function logHello () {
    console.log(hello);
}

function logArgs(args) {
    console.log(args)
}
console.log(logArgs(process.argv[2]));

module.exports = {
    hello,
    logHello
}

// module.