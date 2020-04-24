import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-toggle',
  templateUrl: './code-toggle.component.html',
  styleUrls: ['./code-toggle.component.less']
})
export class CodeToggleComponent implements OnInit {

  // 组个组件主要用于展示图片（模拟代码代码片段展示）对外暴露一个展示的按钮或者其他标识；
  // 传入值 ，应该这里就定为 一个id （图片编号）

  @Input() imgId;

  defaultImgUrl: string = 'assets/imgs/code/';
  url: string;
  show:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.url = `${this.defaultImgUrl}${this.imgId}.jpg`;
  }

  toggleCodeImg() {
    this.show = !this.show;
  }

}
