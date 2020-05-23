import { Injectable } from '@angular/core';

// 抽离一个公共的方法
@Injectable()
export class Greeter {
  suffix = '!';
  data = [
    'req','issue','workitem'
  ];
  getName(data) {
    return `我在注入器中${data}`
  }
}
