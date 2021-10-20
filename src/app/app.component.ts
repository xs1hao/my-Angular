import { Component } from '@angular/core';

declare const VERSION: string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Version: ' + VERSION;
  current_time: string = ''

  constructor() {

    this.getTime(); 
    console.log(this.title);
  }
  id = 19047;
  private getTime = () => {
    var date = new Date();
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();
    this.current_time = Y + M + D + h + m + s;
  }
}
