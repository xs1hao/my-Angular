import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Data, Datas } from './datatype';
import { ButtonComponent } from 'src/app/shared/components/zorro/button/button.component';

@Component({
  selector: 'app-bootstrap-tesst',
  templateUrl: './bootstrap-tesst.component.html',
  styleUrls: ['./bootstrap-tesst.component.less']
})
export class BootstrapTesstComponent implements OnInit {
  objdata:Data;//自己定义了一个类；
  str: string;
  d = [new Datas('sss',2)];
  show:boolean;
  parent:string;

  @ViewChild('btn', { static: true }) private domLabelChild: ButtonComponent;

  constructor() { 
    this.show = false;
    this.parent = 'Hello world~!'
  }

  ngOnInit(): void {
    this.str = "德玛西亚啦啦啦";
    this.objdata = { name:'sq',id:125 }

    this.domLabelChild.methods('使用@viewchild测试第一个值，在父组件中，调用子组件的方法');
    console.log('this.d:',this.d[0]);
  }
 
  confn(data) {
    //调用子组件的方法 method2();
    this.domLabelChild.method2();
    
    console.log('子组件给我发送了一个data:',data);
  }

  toggle() {
    this.show = !this.show;
  }
}
