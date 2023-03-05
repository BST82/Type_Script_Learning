var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identitytwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
console.log(identityThree(3));
console.log(identityThree("Bhagyashri"));
function identityFour(val) {
    return val;
}
// identityFour<Bootel>({})
function getSearchProducts(products) {
    var myIndex = 3;
    return products[myIndex];
}
var getMoreSearchProducts = function (products) {
    var ind = 4;
    return products[ind];
};
// function anotherFunction<T, U extends number>(valOne:T, valTwo:U):object{
//     return{
//    valOne,
//    valTwo
//     }
// }
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return Sellable;
}());
