import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.less']
})
export class RxjsComponent implements OnInit {
  oButton;
  constructor() {}
  ngOnInit(): void {

    // 操作符号 from filter do of 

    // // 发出 (1,2,3,4,5)
    // const source = from([1, 2, 3, 4, 5]);
    // // 过滤掉奇数
    // const example = source.pipe(filter(num => num % 2 === 0));
    // // 输出: "Even number: 2", "Even number: 4"
    // const subscribe = example.subscribe(val => console.log(`Even number: ${val}`));


    const sources = Observable.of(1, 2, 3, 4, 5);
    // 使⽤ do 透明地打印 source 中的值
    const examples = sources
    .do(val => console.log(`BEFORE MAP: ${val}`))
    .map(val => val + 10)
    .do(val => console.log(`AFTER MAP: ${val}`));
    // 'do' 并不转换值
    // 输出: 11...12...13...14...15
    const subscribes = examples.subscribe(val => console.log(val)
    );



/********************************************************************************************************************************/

    //throttleTime(1000),是如何控制一秒钟内最多点击一次，先来看使用普通的 JavaScript：
    this.oButton = document.querySelector('button');
    const button$ = Observable.fromEvent(this.oButton, 'click');
    button$.throttleTime(1000).scan(count => count + 1, 0)
      .subscribe(count => console.log(`Clicked ${count} times`));

    //scan 操作符的工作原理与数组的 reduce 类似。它需要一个暴露给回调函数当参数的初始值。
    //每次回调函数运行后的返回值会作为下次回调函数运行时的参数。

    const node = document.querySelector('input[type=text]');
    // 第二个参数 input 是事件名，对于input元素有一个 oninput 事件用于接受用户输入
    const input$ = Observable.fromEvent(node, 'input');
    input$.subscribe({
      next: (event: any) => console.log(`You just typed ${event.target.value}!`),
      error: (err) => console.log(`Oops... ${err}`),
      complete: () => console.log(`Complete!`)
    });

    //map mapto
    const clicks = Observable.fromEvent(document, 'click');
    const greetings = clicks.mapTo('Hi');
    greetings.map(x => x + ' sq').subscribe(x => console.log(x));

  }

  observable = Observable.create(function (observer) {
    observer.next(1);
    setTimeout(() => {
      observer.next(4);
      observer.complete();
    }, 1000);
  })

  // Function 是惰性的评估运算，调用时会同步地返回一个单一值。
  // Generator 是惰性的评估运算，调用时会同步地返回零到(有可能的)无限多个值。
  // Promise 是最终可能(或可能不)返回单个值的运算。
  // Observable 是惰性的评估运算，它可以从它被调用的时刻起同步或异步地返回零到(有可能的)无限多个值。
  // Observables 像是没有参数, 但可以泛化为多个值的函数。

  clickBtn = (e) => {
    console.log(e.target);
    this.observable.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    }).unsubscribe()
  }
}
