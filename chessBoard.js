// function chessBoard(size) {
// 	var white = true;
// 	var space = '';
// 	for(x= 0;  x< size; x++) {
// 		for(i= 0; i<size; i++) {
// 			if(white) {
// 				white = false;
// 				space += ' ';
// 			}
// 			else {
// 				white = true;
// 				space += '#';
// 			}
// 		}
// 		space += '\n';
// 		// if(white) {
// 		// 	white = false;
// 		// }
// 		// else {
// 		// 	white = true;
// 		// }
// 	}
// 	return space;
// };
// console.log(chessBoard(8));

function chessBoard(size) {
  var board = "";

  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  };
  console.log(board);
};
console.log(chessBoard(8));
