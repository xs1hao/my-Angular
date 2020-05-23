import { Component, SimpleChanges } from '@angular/core';
import { Greeter } from '..';

@Component({
  templateUrl: './b.html'
})
export class Bcomponent {
  dataInBcomponent: Array<string>;
  dataRes: string;
  constructor(private greeter: Greeter) {}

  ngOnInit(): void {
    this.dataInBcomponent = this.greeter.data.map(item => {
      return `${item}-在B组件中`
    })
  }


  conDataInBcompoent(item) {
    const res = `通过注入器的方法中加工以后${item}`
    // 调用注入器里面的方法
    this.dataRes = this.greeter.getName(res);
  }

}
