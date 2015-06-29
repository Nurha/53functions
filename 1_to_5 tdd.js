//declaring assert function
var assert = { 
	
	passed : false,
//only checks if the comparison passed or failed
	equals : function(message, result){
				if(message === result){ 
					this.passed = true;
				}
				else {
					this.passed = false;

				}
				
			}
		}

 
var TestMyCode = { //this is an object literal and it has a method which is run 
	
	runCount : 0,
	testPassedCount : 0,
	
	  run: function(name, assertTest){ // runs the assert
			this.runCount = this.runCount + 1;

var newDiv = document.createElement("div");//  build the blocks
			newDiv.id = "newDiv"+this.runCount;
			newDiv.style.height = "300px";
			newDiv.style.width = "300px";
			newDiv.style.border = "3px solid black";
			newDiv.style.display = "inline-block";

			document.body.appendChild(newDiv)//child is the node to append underneath element


var rg = new RedOrGreen(newDiv.id);
	this.name = name;
	assertTest(assert);

	if(assert.passed){
		newDiv.innerHTML = name;
		rg.makeGreen();
		this.testPassedCount = this.testPassedCount + 1;//keeps track of how many tests passed
	}
	else {
		rg.makeRed();
		newDiv.innerHTML = name;
	}
	document.getElementById("testResults").innerHTML= " Number of test passed : " + this.testPassedCount + " out of " + this.runCount; //makes the paragraph that tells you how many tests passed and failed
	document.body.appendChild(testResults); //puts the paragraph under the blocks
	}
}
	