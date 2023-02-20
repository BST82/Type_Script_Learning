// readonly (keyword)
// ? (optionl ) 
var myuser = {
    _id: "123",
    name: "b",
    email: "b@.com",
    isActive: false
};
myuser.email = "c@.com";
var store_A = { a: 10 };
var store_B = { b: 25 };
//store_B.b=33; // it will show error because it is readonly
