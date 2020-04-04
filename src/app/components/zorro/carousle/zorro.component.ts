import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zorro',
  templateUrl: './zorro.component.html',
  styleUrls: ['./zorro.component.less']
})
export class ZorroComponent implements OnInit {
  url = 'assets/';
  array = [1, 2, 3, 4];
  imgStyle:Array<object> = []
  imgUrl:Array<string> = []
  constructor() { }

  ngOnInit(): void {
    this.getImgUrl();
  }

  private getImgUrl = () => {
    
    for(let i = 1; i < 5;i++){
      let url = this.url+ i +'.jpg';
      let styl = {
        'background':'url('+ url +')',
        'background-size': '600px 100%',
        'background-repeat':'no-repeat'
      }
      this.imgStyle.push(styl);
      this.imgUrl.push(url);
    }
  }

}
