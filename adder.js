var perc = require('./perceptron');
var gen = function(i1, i2) {
    // assuming weight -2 and bia 3 for all
    var s_res = perc([i1, i2], 3);
    return {w: -2, s: s_res};
};

var adder = function(json) {
    var x1 = json.inputs[0];
    var x2 = json.inputs[1];

    var m1 = gen(x1, x2);
    var m2 = gen(x1, m1);
    var m3 = gen(x2, m1);
    var y1 = gen(m2, m3);
    var carry = m1.s - 4;

    return [y1, carry];
};

module.exports = adder;
    


