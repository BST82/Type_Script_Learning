"use strict";
// with function it is compulsory to declare data type
exports.__esModule = true;
function addTwo(num) {
    // return "Hello "+(num+2) 
    /*
     return "hello" will not give error but is not good practice     */
    return num + 2;
}
console.log(addTwo(2));
//strings function with single parameter 
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("mun"));
// multiparameter function 
function signUp(name, email, isPaid) {
    return { name: name, email: email, isPaid: isPaid };
}
console.log(signUp("bshri", "bshri@gmail.com", true));
// arrow function 
var loginUser = function (myname, myemail, paid) {
    // paid=false is default value
    if (paid === void 0) { paid = false; }
    return { myname: myname, myemail: myemail, paid: paid };
};
console.log(loginUser("b", "bst@gmail.com"));
// passing function in a variable 
var user = function (age, id, flag) {
    if (flag === void 0) {
        flag = false;
    }
};
// function with it's return type 
function substraction(value) {
    return value + 3;
}
console.log(substraction(6));
// return type with aerrow function 
var getHello = function (s) {
    return "its string return type " + s;
};
console.log(getHello("abc"));
// return type void and never
function erroraccure(msg) {
    // it will return nothing 
    console.log("return nothing because return type is void ");
}
erroraccure("not");
//  with return type never (it will never return anything) 
function correct_way_to_use(anymsg) {
    // never is used where function throws an exception or terminates execution of program
    throw new Error(anymsg);
}
// list or array 
var anyname = ["thor", "spiderman", "ironman"];
anyname.map(function (anyname) {
    return "any name can take ".concat(anyname);
});
