function factors(number) {
    var factors = [];
    for(x=0; x <= number; x++) {
      if(number % x === 0) {
        factors.push(x)
      }
    }
    return factors;
    console.log(factors);
};
console.log(factors(100));
