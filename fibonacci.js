function fibonnaci(number) {
  var sequence = [];
  var num = 1;
  for(x=0; x < number ; x++) {
    if(sequence.length > 1) {
      num = num + sequence[x-1]
    }
    sequence.push(num)
  }
  return sequence
}
 console.log(fibonnaci(100));
