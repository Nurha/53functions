function Calc_Chain(value) {

  this.add = function(x) {
    value += x;
    return this;
  };

  this.subtract = function(x) {
    value -= x;
    return this;
  };

  this.multiply = function(x) {
    value *= x;
    return this;
  };

  this.divide = function(x) {
    value /= x;
    return this;
  };

  this.equals = function(callback) {
    callback(value);
    return this;
  };

  this.end = function() {
    return value;
  };
};

var calc_chain = new Calc_Chain(10)
  .add(1.2)
  .multiply(9)
  .equals(function (result) {
    console.log("= " + result);
  })
  .add(2).equals(function(result) {
    console.log(result);
  }).divide(2);


console.log("final result: " + calc_chain.end());
