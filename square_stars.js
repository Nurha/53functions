function square_stars(number){
  var string = '';
  for(x=0; x<number; x++){
    //console.log(x);
    for(y=0; y<number; y++){
      //console.log(y);
      string += '*';
    };
    string += '\n';
  };
  return string;
};
console.log(square_stars(4));
