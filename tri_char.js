function tri_char(character){
  var str = '';
  var count = 0;
  for(x=0; x<=4; x++){
    for(y=0; y<count; y++){
      str += character;
    };
    count++
    str += '\n';
  };
  return str;
};
console.log(tri_char('*'));
