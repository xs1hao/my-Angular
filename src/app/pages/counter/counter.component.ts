import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from '../../store/action/counter.actions';
import { CounterSelectors, getInitState, getIndexConter } from '../../store/selector/counter.selector';
import { Observable } from 'rxjs';
import { CounterState } from '../../store/reducer/counter.reducer';
import { CommonUtils } from '../../shared/core/utlis/common.utils';
import { CommonType } from '../../shared/core/utlis/entityCache';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent implements OnInit {
  currentModalType: string = 'like';
  isShowPic: boolean = true;
  num: number;
  showLifecyclePic: boolean = false;

  count$: Observable<CounterState>;
  counterIndex$: Observable<any>;

  cache = CommonType.entityCache;

  constructor(
    private commonutils: CommonUtils,
    // 最开始的方式，这个也可以
    private store$: Store<object>,
    // 2020年4月7日00:20:08 现在是用这个方法获取值
    private counterSelectors: CounterSelectors
  ) {

    //现在构造方法中获取，然后在init方法中取值；
    this.count$ = this.counterSelectors.counter$;
    this.counterIndex$ = this.counterSelectors.counterIndex$;
    // 用另一种方式获取了，下面的方法不做调用；
    this.listenNum();

  }

  ngOnInit(): void {

    console.log('commonType.entityCache:',CommonType.entityCache);

    this.count$.subscribe(res => {
      // console.log('res:',res);
      this.num = res[this.cache].counters.count;
    })

    this.counterIndex$.subscribe(res => {
      //这里直接返回了拼接之后的 string
      // console.log('counterIndex$ 拼接方法返回的结果:', res);
    })
  }


  toggel() {
    // 这里模拟了一个简单的外部公共方法
    this.showLifecyclePic = this.commonutils.togglePic(this.showLifecyclePic);
  }


  /**
   * 做个对比，不删除
   */

  // 下面的方式也可以获取到数字 count 这里返回的 data 数据格式和上面onInit()方法中的的一样；
  listenNum() {
    this.store$.pipe(select(getInitState)).subscribe(data => {
  // 现在这里的 data 数据格式已经发生了改变，他包含了所有在store中的 信息；
      console.log('countssssss:', data);
  // 这样 也可以拿到 num
      // this.num = data[this.cache].counters.count;;
    });
  }


  increment() {
    console.log('this.num:', this.num);
    this.store$.dispatch(increment({ count: this.num }));
  }

  decrement() {
    this.store$.dispatch(decrement({ count: this.num }));
  }

  reset() {
    this.store$.pipe(select(getIndexConter)).subscribe(data => {
      // console.log('data:', data);
    })
    this.store$.dispatch(reset({ count: this.num }));
  }

  changeTemplate(type: string) {
    this.currentModalType = type;
  }
  togglePic() {
    // this.isShowPic = !this.isShowPic;
    // 用下面的公共方法也是可以的；
    this.isShowPic = this.commonutils.togglePic(this.isShowPic);
  }
}
