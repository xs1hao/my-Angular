export declare interface LabelledValue {
  label: string;
  size: number | string | Array<string>
}

interface Person {
  readonly age:number
}

interface Animal {
  sex: string;
  add?: string
}

// 使用ectends关键字 实现了继承多个接口；
export interface Student extends Person, Animal {
  name: string
}

export interface SquareConfig {
  color?: string;
  width?: number;
}


// 可索引的类型
interface StringArray {
  [index: number]: string;
}

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];
