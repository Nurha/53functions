QUnit.test( "helloWorld", function( assert) {
  assert.equal( helloWorld(), "hello world!" );
});
QUnit.test( "hello_uppercase", function( assert) {
  assert.equal( hello_uppercase("nurha"),"Hello, NURHA!" );
});


QUnit.test("hello_joe", function(assert){
	assert.equal(hello_joe("Joe"), "Hello!")
	assert.equal(hello_joe("Bob"), "Hello!")
	assert.equal(hello_joe("Nurha"), "Hello, Nurha!")
});

QUnit.test("number_list", function(assert){
	assert.equal(number_list(10),[1,2,3,4,5,6,7,8,9,10].toString());
});

QUnit.test("sum_numbers" , function(assert) {
	assert.equal(sum_numbers(5), 15);
});

QUnit.test("length", function(assert){
	assert.equal(length("nurha"), 5);
});
QUnit.test("upper", function(assert){
	assert.equal(upper("nurha"), "NURHA");
});
QUnit.test("reverse", function(assert){
	assert.equal(reverse("nurha"), "ahrun");
});
QUnit.test("hello_list", function(assert){
	assert.equal(hello_list(3), "hello world,hello world,hello world");
});

 QUnit.test("high_low", function() {
     var array = [1,2,3,4];	
     var result = "max =4min =1";
	deepEqual(high_low(array), result);
});

 QUnit.test("count_words" , function(assert){
 	assert.equal(count_words("good morning") ,2);
});

QUnit.test("sum_word_len" , function(assert){
 	assert.equal(sum_word_len("good morning"),12);
}); 
 // QUnit.test('longest_word()', function(assert) {
 //    var str = "good morning"; 
 //     assert.equal(longest_word(str), "morning: 7");
      
 // });

// QUnit.test("shortest_word" , function(assert){
//  	assert.equal(shortest_word("guns and roses"), ["and", 3].toString());
// }); 

