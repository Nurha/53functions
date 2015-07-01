QUnit.test( "helloWorld", function( assert ) {
  assert.equal( helloWorld(), "hello world!" );
});
QUnit.test( "hello_uppercase", function( assert ) {
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

