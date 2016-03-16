function calc_all(symbol, numberX, numberY){
  if(symbol === '+'){
    return numberX + numberY;
  };
  if(symbol === '*'){
    return numberX * numberY;
  };
  if(symbol === '/'){
    return numberX / numberY;
  };
  if(symbol === '-'){
    return numberX - numberY
  };
};
console.log(calc_all('+', 5, 5));
console.log(calc_all('*', 5, 5));
console.log(calc_all('/', 25, 5));
console.log(calc_all('-', 25, 5));
