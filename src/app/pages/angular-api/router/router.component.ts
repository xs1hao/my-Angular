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
    private activeR: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  changeRouter() {
    //跳转至子路由；
    this.router.navigate(['child'],{relativeTo: this.activeR, queryParams: { id: 'shiqiang' }});
  }

}
