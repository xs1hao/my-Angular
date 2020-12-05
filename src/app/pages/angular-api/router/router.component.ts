import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.less']
})
export class RouterComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.changeRouter();
  }

  // 跳转至子组件
  changeRouter() {
    //跳转至子路由；
    // 在参数中使用了 ‘/’ 会回到根路由，在当前项目里，会跳到 这个模块 ‘CounterModule’ 对应的路由；

    // this.router.navigate(['/counter'],{relativeTo: this.activeR, queryParams: { id: 'shiqiang' }});

    // 跳转到了当前路由下的子子路由 child 或者 brother

    this.router.navigate(['child/23'],{relativeTo: this.activeRoute, queryParams: { id: 'shiqiang' }});

    // this.router.navigate(['brother'],{relativeTo: this.activeR, queryParams: { id: 'shiqiang' }});
  }

}
