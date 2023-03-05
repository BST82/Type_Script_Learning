var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(myname) {
        this.name = myname;
    }
    Person.prototype.display = function () {
        return 'Hello....';
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(myname, Id) {
        var _this = _super.call(this, myname) || this;
        _this.stuId = Id;
        return _this;
    }
    Student.prototype.find = function (name) {
        return "Your name is ".concat(name);
    };
    return Student;
}(Person));
var myData = new Student("Bhagyashri", 12345678);
console.log(myData);
console.log(myData.name);
console.log(myData.find('Rupa'));
console.log(myData.display());
