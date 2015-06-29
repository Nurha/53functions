function RedOrGreen(mySquare){
	
	 this.makeGreen = function(){//this. is a place holder
		document.getElementById(mySquare).style.backgroundColor = "green";//Accessing by ID, returns a referance to the element by its ID, unique html value
	};          

	this.makeRed = function(){
		document.getElementById(mySquare).style.backgroundColor = "red";
	};

}