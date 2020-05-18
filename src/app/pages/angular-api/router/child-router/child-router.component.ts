import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-child-router',
  templateUrl: './child-router.component.html',
  styleUrls: ['./child-router.component.less']
})
export class ChildRouterComponent implements OnInit {

  routePatams = '';
  constructor(
    private router: Router,
    private activeR: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.routePatams = this.activeR.snapshot.queryParams.id;
    console.log('this.routePatams:',this.routePatams);
  }

  changeRouter() {
    const url = this.location.path();

    // 返回上一级，实现方式一
    this.location.back(); // 在所属平台（如浏览器）的历史堆栈中后退一步。

    // 返回上一级，实现方式二
    // this.router.navigate(['../'],{relativeTo: this.activeR, queryParams: { id: 'demaxiya' }});

  }

}
