import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  @Input() item:String;
  @Input() data;
  @Output() con = new EventEmitter<any>();

  @ViewChild('button', { static: true }) private domLabelChild: ElementRef;
  @ViewChild('myInput', { static: true }) private nzInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('this.item:',this.item);
    console.log('this.data:',this.data);
  }

  ngAfterViewInit(): void {
    /**
     * DOM节点 ( 主要用来操作dom)
     * */ 
    console.log(this.domLabelChild.nativeElement);
    console.log(this.nzInput.nativeElement);//获取的是DOM 节点  <input _ngcontent-bso-c128="" type="text" placeholder="请输入....">


    // 使用viewchild 获取input输入内容.... 
    // pluck 选择属性来发出
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
