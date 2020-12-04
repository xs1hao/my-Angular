import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { DataService } from '../../basic/service/data.service';

@Component({
  selector: 'app-refresh-view',
  templateUrl: './refresh-view.component.html',
  styleUrls: ['./refresh-view.component.less'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class RefreshViewComponent implements OnInit {

  dataList:Array<any> = [];
  test = '德玛西亚';
  constructor(
    private dataService: DataService,
    private ref: ChangeDetectorRef,
    private zone: NgZone
  ) { }

  ngOnInit(): void {
    this.getData();
    // this.testDefault();
  }

   // 使用了rxjs的方式，通过服务获取数据；
   getData () :void {
    // this.dataService.getData()
    this.dataService.httpGetHeroes()// 使用虚拟服务器获取数据
    .subscribe(res => {
      console.log('res:',res);


      /**
      *
      * 其中：
      * markForCheck()：使用于子组件，将该子组件到根组件之间的路径标记起来，通知angular检测器下次变化检测时一定检查此路径上的组件;
      * detach()：将组件的检测器从检测器数中脱离，不再受检测机制的控制，除非重新attach上;
      * reattach()：把脱离的检测器重新链接到检测器树上;
      * detectChanges():手动发起该组件到各个子组件的变更检测;
      *
      */

      this.dataList = res;
      // this.ref.markForCheck();	// 他是在ChangeDetectionStrategy.OnPush 条件下使用的；就是在拿到数据后，执行这两行代码，这是关键
      // this.ref.detectChanges();

      // 另一种强制刷新的方式
      // this.zone.run(() => {
        // 要更新视图的代码
        // this.dataList = res;
        // const arr = new Array();
        // this.dataList = arr.concat(res);
      //  })
    });
  }
  /**
   * 数组操作方法相关测试：
   * https://blog.csdn.net/qq_30715329/article/details/79817685
   * js深浅拷贝；
   * https://www.jianshu.com/p/d9a35a29c58c
   *
   */

  testArrConcat() {
    let a = [1,2,3];
    let b = a;
    /************** 测试1 */
    // a = a.concat([5]);
    // console.log(b); // [1,2,3]
    // console.log(a); // [1,2,3,5]

    /******************* 测试2 */
    a = a.concat([]);
    // 检测两个是否指向一个内存地址；
    console.log(a === b); // false 这里的 a和b 值相同，但是现在已经指向了两个不一样的内存地址

    // a = a;
    // console.log(a === b); // true

    console.log(b); // [1,2,3]; length=3
    console.log(a); // [1,2,3]; length=3

  }

  testArrSplice() {
    let a = [1,2,3];
    let b = a;
    a.splice(0,1,5);
    console.log(b); // [5,2,3]
  }

  testArrPush() {
    let a = [1,2,3];
    let b = a;
    a.push(0,1,5);
    console.log(b); // [1, 2, 3, 0, 1, 5]
  }

  testDefault() {
    let a = 1;
    let b = a;
    a = 2;
    console.log(b); // 1
  }

}
