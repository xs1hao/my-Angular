import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjectdiff',
  templateUrl: './subjectdiff.component.html',
  styleUrls: ['./subjectdiff.component.less']
})
export class SubjectdiffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test() {
        // Subject 既是 Observable 对象，又是 Observer 对象
        let s$ = new Subject();
        let s = s$.asObservable();


        // 大意是BehaviorSubject会发送离订阅最近的上一个值，没有上一个值的时候会发送默认值（如果有的话)
        let bs$ = new BehaviorSubject<number>(0);
        let bs = bs$.asObservable();


        // 概括的讲就是使用AsyncSubject无论发送多少个数据事件，观察者永远只能接受到最后一个数据(完成事件必须调用)。如果发送数据过程中出现错误，观察者仅仅接受到错误信息。
        let as$ = new AsyncSubject();
        let as = as$.asObservable();


        // ReplaySubject会缓存所有的发射数据，无论观察者何时订阅，ReplaySubject都会将所有内容发送给订阅者。
        let rs$ = new ReplaySubject();
        let rs = rs$.asObservable();


        let i = 0;
        let time = setInterval(() => {
            if (i > 2) {
                bs$.complete();
                s$.complete();
                as$.complete();
                rs$.complete();
                clearInterval(time);
            }
            i++;
            bs$.next(i);
            s$.next(i);
            as$.next(i);
            rs$.next(i);
            rs.subscribe(res => console.log('ReplaySubject', res));
            as.subscribe(res => console.log('AsyncSubject', res));
            s.subscribe(res => console.log('Subject', res));
            bs.subscribe(res => console.log('BehaviorSubject', res));
            console.log('------------------------------------------------------------');
        }, 2000);
  }

}
