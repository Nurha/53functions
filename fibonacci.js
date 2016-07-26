function fibonnaci(number) {
  var sequence = [];
  var num = 1;
  for(x=0; x < number ; x++) {
    sequence.push(num)
    if(sequence.length > 1) {
      num = num + sequence[x-1]
    }
  }
  return sequence
}
 console.log(fibonnaci(100));
