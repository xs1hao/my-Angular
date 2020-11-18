var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        // ...
        console.log('in ConsoleLogger');
    };
    ;
    return ConsoleLogger;
}());
// var jim = new Person("Jimss");
// var n = jim.name;
// console.log(n);
var loger = new ConsoleLogger();
// loger.log()
// console.log(loger.age); // error  age 不存在
console.log(loger.name); // undefined;
