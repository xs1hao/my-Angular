import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  dates;
  constructor() {
  }

  ngOnInit(): void {

    this.dates = new Date();

  }

  getData() {
     // 利用fetch 请求 成功获取了网易云音乐的轮播图；
     fetch('./api/banner?type=1').then(
      response => {
        console.log('联系服务器成功了');
        return response.json()
      },
      error => {
        console.log('失败了', error);
      }
    ).then(
      response => { console.log('获取数据成功了', response); },
      error => { console.log('获取数据失败了', error); }
    )
  }

}
