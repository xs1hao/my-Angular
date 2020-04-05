import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store/action/counter.actions';
import { AppCounterModule } from '../store/selector/index';
import { getInitState, getIndexConter } from '../store/selector/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent implements OnInit {
  currentModalType:string = 'like';
  isShowPic:boolean = true;
  num:number;
  ngOnInit(): void {

    // this.listenNum();
  }

  constructor(
    private store$: Store<AppCounterModule>,
    ) {

    this.listenNum();

  }
 
listenNum(){
  this.store$.pipe(select(getInitState)).subscribe(data => {
    console.log('countssssss:',data);
    this.num = data;
  });
}


  increment() {
    console.log('this.num:',this.num);
    this.store$.dispatch(increment({count:this.num}));
  }
 
  decrement() {
    this.store$.dispatch(decrement({count:this.num}));
  }
 
  reset() {
    this.store$.pipe(select(getIndexConter)).subscribe(data => {
      console.log('data:',data);
    })
    this.store$.dispatch(reset({count:this.num}));
  }

  changeTemplate(type:string)  {
    this.currentModalType = type;
  }
  togglePic() {
    this.isShowPic = !this.isShowPic;
  }
}
