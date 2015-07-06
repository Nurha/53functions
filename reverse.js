//function reverse(name){
	//var name = ["nurha"];
		//for(var i=0; i <= name; i++){
			//return "nurha" + name[i];
		//};
	//}	
	function reverse(str){
		str = str + "";
		return str.split("").reverse().join("");//split sperates the string, reverse turns it around, join brings things together. 
}