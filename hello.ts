class Person {
  constructor(public name: string) { }
}
interface Loggable {
  log(): void;
}
class ConsoleLogger implements Loggable {
  log() {
      // ...
      console.log('in ConsoleLogger');

  };
  name: string;
}
// var jim = new Person("Jimss");
// var n = jim.name;
// console.log(n);
var loger = new ConsoleLogger();
// loger.log()
// console.log(loger.age); // error  age 不存在
console.log(loger.name); // undefined;


