"use strict";
// objects in TS
exports.__esModule = true;
// old method of making objects :- 
var User = {
    name: "Bst",
    id: 21,
    isActivs: true
};
/*-------------------------------------------- */
// creating object inside function
function createUser(_a /* here object pass as parameter*/) {
    var string = _a.name, boolean = _a.isPaid;
}
//  createUser({name:"munmun",isPaid:true, email:"bst@gamil.com"})    // it will given error you can't pass extra parameter which not defind in function 
// but you can use it :-
var takeuser = { name: "ram", id: 33, email: "ram@gmail.com" };
// not given error 
// createUser(takeuser)
/*------------------------------------------ */
function createcourse( /* function parameter*/) {
    /*function definition*/
    return { name: "React Js", price: 100 };
}
console.log(createcourse());
