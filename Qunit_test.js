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
	assert.equal(number_list(5),[1,2,3,4,5].toString());
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
 	assert.equal(count_words("good morning"), 2);
});

QUnit.test("sum_word_len" , function(assert){
 	assert.equal(sum_word_len("ho ho ho"), 6);
});
 QUnit.test("longest_word" , function(assert) {
    var results =  longest_word("I love waking up to music in the morning");
     assert.deepEqual(results,["morning", 7]);

 });

QUnit.test("shortest_word", function(assert) {
    var result = "Is it true that you are going? When will I go?";
	assert.equal(shortest_word(result), "I: 1");

});

QUnit.test("word_length", function(assert){
	var result = word_length("good morning africa");
	var expected = [6, 5];
	assert.equal(result.toString(), expected.toString());
});

QUnit.test("avg", function(assert){
	var result = avg("good morning africa")
	var expected = [6];
	assert.equal(result.toString(), expected.toString());
});

QUnit.test("starts", function(assert){
	var sentance = "We were at woolworth";
	assert.equal(starts(sentance), "w");
});

QUnit.test("ends", function(assert){
	var sentance = "We were at the sea";
	assert.equal(ends(sentance), "e");
});
QUnit.test("occurs_most", function(assert){
	var sentance = occurs_most("I love the smell of coffee in the morning");
	assert.equal(occurs_most(sentance), "E");
});

QUnit.test("occurs_least", function(assert){
  var string = occurs_least("nooo nooo yooo");
  assert.equal(occurs_least(string),"y" )
});
