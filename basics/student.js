"use strict";
exports.__esModule = true;
exports.LUCKY_NUMBER = exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.sayHello = function () {
        return "Hello from " + this.firstName + ", " + this.lastName + "!!";
    };
    return Student;
}());
exports.Student = Student;
exports.LUCKY_NUMBER = Math.round(Math.random() * 100);
