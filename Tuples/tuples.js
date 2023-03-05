//specialised array 
// const User:(string|number)[]=['mon','sun','tue',1,0,2];
// tuples are same as array with some restrictions 
var User;
User = ["munmun", 111, true]; // order is same as data type (maintained order)
var newUser = [131, "abz@gmail.com"];
var first = ["cake Shop", 33, true, false, true, true, false];
for (var k in first) {
    console.log(first[k]);
}
function doSomething(pair) {
    var a = pair[0];
    var b = pair[1];
    console.log(a + " " + b);
}
doSomething(["bst_Tam", 13]);
