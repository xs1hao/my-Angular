import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/shared/core/utlis/constant';

@Component({
  selector: 'app-inner-html',
  templateUrl: './inner-html.component.html',
  styleUrls: ['./inner-html.component.less']
})
export class InnerHtmlComponent implements OnInit {

  name = 'shiqiang';
  content = '';
  templateData: any;

  constructor(
    private constant: Constant
  ) { }

  // 动态获取模板
  ngOnInit(): void {
    this.content = this.formatContent(this.name);
    const data = {title: '田家园一个新的',name: 'shiqiang110',category:'问题',status:'未完成'};
    this.templateData = this.constant.getRelateTemplate('issue',data)
  }

  ngAfterViewInit() {
    this.setEvent();
  }

  formatContent(name) {
    const content = 
            `<div>
              <span class="text-default">${name}</span>
              <p style="font-size:10px;color:red">取消</p>
            </div>
            <button id="sqButton">确定</button>`
    return content;
  }

  // 
  setEvent() {
    const button = document.getElementById('sqButton');
    if(button) {
      button.addEventListener('click',() =>{
        console.log('innerHTML中的点击事件....');
      })
    }
  }

}
