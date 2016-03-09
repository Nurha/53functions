function diamond(number){
  var string = '';
  var count = 0;

  for(x=0; x<=number; x++){
    for(y=0; y<count; y++){
      string += '*';
    };
    count++;
    string += '\n';
  };

  for(z=0; z<=number; z++){
      for(w=0; w<count; w++){
        string += '*';
      };
      count--
      string += '\n';
  };
  return string;
};
console.log(diamond(5));



/*function Diamond() {
  public static void main(String[] args) {
    for (int i = 1; i < 10; i += 2) {
      for (int j = 0; j < 9 - i / 2; j++)
        System.out.print(" ");

      for (int j = 0; j < i; j++)
        System.out.print("*");

      System.out.print("\n");
    }

    for (int i = 7; i > 0; i -= 2) {
      for (int j = 0; j < 9 - i / 2; j++)
        System.out.print(" ");

      for (int j = 0; j < i; j++)
        System.out.print("*");

      System.out.print("\n");
    }
  }
}*/
