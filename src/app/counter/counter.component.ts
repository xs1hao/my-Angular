import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store/action/counter.actions';
import { AppCounterModule } from '../store/selector/index';
import { getInitState, getIndexConter } from '../store/selector/counter.selector';
import { CommonUtils } from '../core/utlis/common.utils';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent implements OnInit {
  currentModalType: string = 'like';
  isShowPic: boolean = true;
  num: number;
  showLifecyclePic:boolean = false;
  ngOnInit(): void {

    // this.listenNum();
  }

  constructor(
    private commonutils: CommonUtils,
    private store$: Store<AppCounterModule>,
  ) {

    this.listenNum();

  }

  toggel() {
    // 这里模拟了一个简单的外部公共方法
    this.showLifecyclePic = this.commonutils.togglePic(this.showLifecyclePic);
  }

  listenNum() {
    this.store$.pipe(select(getInitState)).subscribe(data => {
      console.log('countssssss:', data);
      this.num = data;
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
      console.log('data:', data);
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
