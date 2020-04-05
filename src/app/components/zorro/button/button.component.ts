import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, OnChanges, SimpleChange } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck, combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit, OnChanges {

  @Input() item:String;
  @Input() data;
  @Output() con = new EventEmitter<any>();

  changeLog: string[] = [];

  @ViewChild('button', { static: true }) private domLabelChild: ElementRef;
  @ViewChild('myInput', { static: true }) private nzInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('this.item:',this.item);
    console.log('this.data:',this.data);
  }

  //ngOnChanges 方法貌似也只是在组件第一次加载的时候触发了；这里监听了所有 @input 输入属性
  ngOnChanges(changes:{[propkey:string]:SimpleChange}){//当使用string去索引时会得到一个 SimpleChange 类型的返回值
    let log: string[] = [];
    // debugger;
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
    console.log('this.changeLog:',this.changeLog);
  }

  ngAfterViewInit(): void {
    /**
     * DOM节点 ( 主要用来操作dom)
     * */ 
    console.log(this.domLabelChild.nativeElement);
    console.log(this.nzInput.nativeElement);//获取的是DOM 节点  <input _ngcontent-bso-c128="" type="text" placeholder="请输入....">


    // 使用viewchild 获取input输入内容.... 
    // pluck 选择属性来发出
    // fromEvent 将事件转换成 observable 序列（把他加入观察系列，可订阅）；
    fromEvent(this.nzInput.nativeElement, 'input')
    .pipe(debounceTime(300), distinctUntilChanged(), pluck('target', 'value'))
    .subscribe((value: string) => {
        console.log('value:',value);// input中输入的内容
        // this.onSearch.emit(value);
    });
  }

  // 通过viewchild 父组件可以直接调用 子组件的方法 ；
  methods(val){
    console.log('值为'+val)
  }
  // 改变子组件的值
  method2(){
    this.item = '父组件改变了我，王者剑圣归来......'
  }
  click () {
    this.con.emit(this.data);
  }

}
