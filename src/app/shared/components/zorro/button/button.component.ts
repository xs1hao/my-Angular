import { 
  Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, 
  OnChanges, SimpleChange, SimpleChanges, DoCheck 
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit, OnChanges, DoCheck {

  @Input() item: string;
  @Input() data:{name:string};
  @Output() con = new EventEmitter<any>();

  changeLog: string[] = [];
  oldHeroName:string = '';

  @ViewChild('button', { static: true }) private domLabelChild: ElementRef;
  @ViewChild('myInput', { static: true }) private nzInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('this.item:',this.item);
    console.log('this.data:',this.data);
  }

  //ngOnChanges 方法貌似也只是在组件第一次加载的时候触发了；这里监听了所有 @input 输入属性;
  //当使用string去索引时会得到一个 SimpleChange 类型的返回值;
  // 修改姓名属性 {name:sting}，控制台中没有新的消息被打印，这是因为用户只是改变了可变对象data的属性，data对象自身的引用是没有改变的，所以ngOnChanges没有被调用，但是在子组件中的值仍然改变，这是由于angular的变更检测机制捕获了组件中每一个对象的属性变化

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      // debugger;
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog = [];
      this.changeLog.push(`onChanges: From "${prev}" to "${cur}"`);
      console.log('this.changeLog:',this.changeLog);
    }
  }

  ngDoCheck() {
    if (this.data.name !== this.oldHeroName) {
      this.changeLog = [];
      this.changeLog.push(`DoCheck: From "${this.data.name}" to "${this.oldHeroName}"`);
      this.oldHeroName = this.data.name;
      console.log('changeLog in Docheck:',this.changeLog);
    }
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

  methodInChildComponent() {
    alert('Hello~！父组件；你通过@Viewchild调用了子组件的方法。')
  }

}
