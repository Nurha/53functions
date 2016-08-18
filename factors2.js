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
console.log(factors(2));


// function factors2(number) {
//   var factors = [];
//   for( x = 0; x < number; x++) {
//     if (x % 2 === 0) {
//       factors.push(x);
//     };
//   };
//   return factors
// };
// console.log(factors2(12));
