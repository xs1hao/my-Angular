import { Component, OnInit, ElementRef, ViewChild, TemplateRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { Data, Datas } from './datatype';
import { ButtonComponent } from 'src/app/shared/components/zorro/button/button.component';
import { cloneDeep } from 'lodash';

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
  dataToChild = [];
  childData:any;

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
    this.dataToChild = [
      {id: 1, name: '小红', age: 18, children: [
        { id: 5, name: '小红他妈', age: 45, children: []}
      ]},
      {id: 2, name: '小名', age: 14, children: []},
      {id: 3, name: '小量', age: 11, children: []},
      {id: 4, name: '小天', age: 17, children: []},
    ]
    this.childData = {
      data: this.dataToChild,
      loading: false
    }
  }


  // 改变dataToChild
  changeDataToChild(){

    /***
     * 使用数组测试
     */

    // const obj = {id: 10, name: '小天他爸爸', age: 42, children: []}
    // this.dataToChild.push(obj); // push 不会触发；
    // this.dataToChild = cloneDeep(this.dataToChild);// 这样就会触发

    // this.dataToChild.pop();// pop() 不会触发

    // this.dataToChild[0].name = '王二小'; // 改变其中一个的name 不会触发;
    // this.dataToChild = cloneDeep(this.dataToChild);// 这样就会触发

    // this.dataToChild = []; // 会触发

    this.dataToChild[0].children = [
      {id: 32, name: '小名的各个', age: 14, children: []},
      {id: 31, name: '小打啊量', age: 11, children: []},
    ]; // 不会触发
    this.dataToChild = cloneDeep(this.dataToChild);// 这样就会触发
    console.log('this.dataToChild:',this.dataToChild);


  /***
   * 使用对象测试
   */

    // this.childData.loading = true;
    // this.childData = cloneDeep(this.childData); // 可以触发
    // console.log('this.dataToChild:',this.childData);

    /***
     * 总结：
     * 时机：当被绑定的输入属性的值发生变化时调用，不过首次调用是会发生在ngOnInit()之前的。当然必须是父组件使子组件输入属性值变化时才会调用，子组件自己改变输入属性的值不会调用。ngOnChanges()方法获取了一个对象，它可以同时观测多个绑定的属性值，它把每个发生变化的属性名都映射到了一个SimpleChange对象， 该对象中有属性的当前值和前一个值。触发条件：@input属性(输入属性)发生变化时，会调用。非此属性，不会调用。当输入属性为对象时，当对象的属性值发生变化时，不会调用，当对象的引用变化时会触发。
     * 原文链接：https://blog.csdn.net/weixin_38883338/java/article/details/102762132
     */
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
