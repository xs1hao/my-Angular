import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs/Rx';
import * as _ from 'lodash';
import { RxjsService } from './rxjs.service';
import { User } from './rxjs.interface';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.less'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RxjsComponent implements OnInit {
  oButton;
  dates: Date;
  users:Array<User> = [];
  users$ = new BehaviorSubject(null);
  currentUser:User;
  constructor(
    private service: RxjsService,
    private ref:  ChangeDetectorRef
  ) { }
  ngOnInit(): void {

    this.service.requestUsers().subscribe(data => {
      this.users = data;
      this.ref.detectChanges();
    })

    this.users$.subscribe(res => {
      this.currentUser = res;
    })


  }

  getUser():User{
    console.log('this.currentUser:',this.currentUser);
    return this.currentUser;
  }

  // Function 是惰性的评估运算，调用时会同步地返回一个单一值。
  // Generator 是惰性的评估运算，调用时会同步地返回零到(有可能的)无限多个值。
  // Promise 是最终可能(或可能不)返回单个值的运算。
  // Observable 是惰性的评估运算，它可以从它被调用的时刻起同步或异步地返回零到(有可能的)无限多个值。
  // Observables 像是没有参数, 但可以泛化为多个值的函数。

}
