var program = require('commander');
var perceptron = require('./perceptron');

program
    .version('0.0.1')

program
    .command('compute <file>')
    .description('computing from json input')
    .action(function(file){
        var json = require('./' + file);
        console.log(perceptron(json))
    })
program.parse(process.argv);



