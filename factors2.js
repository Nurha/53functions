// function factors(number) {
//     var factors = [];
//     for(x=0; x < number; x++) {
//       if(x % 2 === 0) {
//         factors.push(x)
//       }
//     }
//     return factors;
//     console.log(factors);
// };
// console.log(factors(12));

// function factors(number) {
//     var factors = [];
//     for(x = 0; x < number; x++) {
//       if(x * x === number) {
//         console.log(x);
//         factors.push(x)
//       };
//     };
//     return factors;
// };
// console.log(factors(12));

function factors2(number) {
  var factors = [];
  for(x = 1; x <= Math.floor(Math.sqrt(number)); x += 1) {

    if (number % x === 0 ) {
      factors.push(x)
    }

    if (number/x !== x) {
      factors.push(number / x);
    }

    factors.sort(function(x, y) { return x-y;});
    return factors;
  }
};
console.log(factors2(17));
