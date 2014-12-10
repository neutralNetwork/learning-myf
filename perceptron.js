var perceptron = function(inputs, bias) {
    // each inputs has:
    // weight w
    // state (0, 1)
    // bias is a numbeir
    return inputs
        .map(function(inp){
            return inp.w * inp.s;
        })
        .reduce(function(a, b) {
            return a + b;
        }) + bias;
};

module.exports = perceptron;
