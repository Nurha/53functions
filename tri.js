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
