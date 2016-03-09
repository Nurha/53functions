function tri_param_base(character,baseSize){
  var string = '';
  var count=0;
  for(x=0; x<=baseSize; x++){
    for(y=0; y<count; y++){
        string += character;
    };
    count++
    string += '\n';
  };
  return string;
};
console.log(tri_param_base('@',4));
