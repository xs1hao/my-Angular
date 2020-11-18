import { Component, OnInit } from '@angular/core';
import { LabelledValue, SquareConfig, Student } from './typescript.interface';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.less']
})
export class TypescriptComponent implements OnInit {

  // 数据类型
  nums: Array<number> = [1,2,3];
  strs: Array<string> = ['aa','bb','cc',];

  o: any = {
    name: 'shiqiang',
    age: 23
  }
  constructor() { }

  ngOnInit(): void {

    // 类型断言；
    // this.typeScruiptTest();

    // 属性重新命名
    // this.objReNmae();

    // typescript 接口 interface；
    // eg1：
    let obj: any = {
      label: "Size 10 Object string",
      size: [1]
    };
    // this.printLabel(obj);

    // eg2:
    let xiaohong: Student = {
      sex: 'girl',
      name: 'xiaohong',
      age: 23
    }
    // this.printSudent(xiaohong);

    // eg3:
    let mySquare = this.createSquare({color: "black"});
    // console.log(mySquare);

    /**
     * 只读属性:
     * 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。
     * 做为变量使用的话用const，若做为属性则使用readonly。
     *
     */
    let ro: ReadonlyArray<number> = [1,2,3];
    // ro[0] = 2;  // error;

    console.log(this.identity(2));




  }

  // 类型断言；
  typeScruiptTest() {
    let someValue: any = "string";
    let strLength: number = (someValue as string).length;
    console.log(strLength); // 6

    let strLen = (<string>someValue).length;
    console.log(strLen); // 6

    let arr: Array<number> = [1,2,3];
    let arrLen = (<Array<number>>arr).length;
    console.log(arrLen); // 3
  }


  // 属性重新命名
  objReNmae() {
    let {name: name1, age: age1} = this.o;
    console.log(name1);
    console.log(age1);
  }


  /**
   * 接口--interface
   * TypeScript的核心原则之一是对值所具有的结构进行类型检查。
   * 它有时被称做“鸭式辨型法”或“结构性子类型化”。
   * 作用: 为这些类型命名和为你的代码或第三方代码定义契约。
   *
   */
  printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label + " " +labelledObj.size);
  }

  // 参数和返回值都加上了类型；
  printSudent(student: Student): Array<string> {
    console.log(student.name);
    return [student.name];
  }

  createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
      // Error: Property 'clor' does not exist on type 'SquareConfig'
      // newSquare.color = config.clor;
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }


  // 泛型 类型变量 T
  identity<T>(arg: T): T {
    return arg;
  }

}
