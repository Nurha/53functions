TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    // is the result as we expected?
    assert.equals("hello world", result, "testing hello function");
});

TestMyCode.run("testing hello_uppercase function", function(assert){
    var result = hello_uppercase("nurha");
    // is the result as we expected?
    assert.equals("Hello, NURHA!", result, "testing hello_uppercase function");
});

TestMyCode.run("testing hello_joe function", function(assert){
    var result = hello_joe();
     //is the result as we expected?
     assert.equals("Hello!", result, "testing hello_joe function");

     var result = hello_joe("nurha");
     //is the result as we expected?
     assert.equals("Hello nurha!", result, "testing hello_joe function");
});

TestMyCode.run("testing number_list function", function(assert){
    var result = number_list(10);
    // is the result as we expected?
    assert.equals([1,2,3,4,5,6,7,8,9,10].toString(), result.toString(), "testing number_list function");
});

TestMyCode.run("testing sum_numbers function", function(assert){
    var result = sum_numbers(5);
    // is the result as we expected?
    assert.equals(15, result, "testing sum_number function");
});

