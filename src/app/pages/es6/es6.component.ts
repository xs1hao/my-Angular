import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  styleUrls: ['./es6.component.less']
})
export class Es6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // 利用闭包事件缓存 es6 版本
  configCache = function () {
    let _cache = new Map(); //“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
    return {
      getCache(k) {
        return _cache[k];
      },
      setCache(k, v) {
        _cache[k] = v;
        return this;//返回当前对象的引用,用法如:configCache.removeCache(k).setCache(k, v)
      },
      removeCache(k) {
        delete _cache[k];
        return this;
      }
    }
  }();//立即执行


}
