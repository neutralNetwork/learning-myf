var program = require('commander');
var perceptron = require('./perceptron');
var adder = require('./adder');

program
    .version('0.0.1');

program
    .command('perceptron <file>')
    .description('computing from json input')
    .action(function(file){
        var json = require('./' + file);
        console.log(perceptron(json.inputs, json.bias));
    });

program
    .command('adder <file>')
    .description('computing from json input')
    .action(function(file){
        var json = require('./' + file);
        console.log(adder(json));
    });

program.parse(process.argv);



