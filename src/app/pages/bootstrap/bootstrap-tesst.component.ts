import { Component, OnInit, ElementRef, ViewChild, TemplateRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { Data, Datas } from './datatype';
import { ButtonComponent } from 'src/app/shared/components/zorro/button/button.component';

@Component({
  selector: 'app-bootstrap-tesst',
  templateUrl: './bootstrap-tesst.component.html',
  styleUrls: ['./bootstrap-tesst.component.less']
})
export class BootstrapTesstComponent implements OnInit, AfterViewInit {
  objdata:Data;//自己定义了一个类；
  str: string;
  d = [new Datas('sss',2)];
  show:boolean;
  parent:string;
  disabledBtnView = false;

  @ViewChild('btn', { static: true }) private domLabelChild: ButtonComponent;
  @ViewChild('dot', { static: true }) btnRef: ElementRef<any>;
  @ViewChild('tpl', {read: TemplateRef}) tpl: TemplateRef<any>;
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;

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

  ngAfterViewInit() {
  }

  confn(data) {
    //通过@ViewChild调用子组件的方法 method2();
    this.domLabelChild.method2();
    console.log('子组件给我发送了一个data:',data);
  }

  // 这里通过@viewchild 直接在父组件中出发了子组件的方法；
  callChildComponent() {
    this.domLabelChild.methodInChildComponent();
    //这个方法在 init里面不能执行；
    this.vc.createEmbeddedView(this.tpl);
  }

  disabledBtn() {
    // 改变了按钮的点击状态
    this.disabledBtnView = true;
    this.btnRef.nativeElement.disabled = true;
  }

  toggle() {
    this.show = !this.show;
  }
}
