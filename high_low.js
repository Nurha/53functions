
function high_low(array) {
	
// using Math.min/Math.max apply 
var max = Math.max.apply(null, array); /* This about equal to Math.max(numbers[0], ...)
                                         or Math.max(5, 6, ...) */
var min = Math.min.apply(null, array);

/* vs. simple loop based algorithm */
max = -Infinity, min = +Infinity;

for (var i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];

  }
  if (array[i] < min) {
    min = array[i];
  }
}
	return "max ="+max + "min ="+min;
};
