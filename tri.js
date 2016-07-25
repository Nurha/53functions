function tri(number){
  var str = '';
  var count = 0;
  for(x=0; x<number; x++){
    for(y=0; y<count; y++){
        str += '*';
    };
    count++;
    str += '\n';
  };
  return str;
};
console.log(tri(5));

// function tri_char() {
//   for(triangle= '#'; triangle.length<=8; triangle+='#') {
//     console.log(triangle);
//   }
// }
// console.log(tri_char());
