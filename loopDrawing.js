function draw(x, y){
	var drawing = '';
	for(p = 0; p < (x+y); p++) {
		for(i = 0; i < y; i++) {
			drawing += '*'
		}
		for(j = 0; j < x; j++) {
			drawing += '#';
		}
		drawing += '\n';
	}
	return drawing;
};
console.log(draw(6, 6));
