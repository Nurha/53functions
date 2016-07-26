function factorial(n) {
  var f = n;
  for (var x = 0; x < n; x++) {
    if (f > 1) {
      n = n * (f - 1)
      f--
    } else if (n == 1) {
      n = 1
    }
  };
  return n
};
console.log(factorial(4));
