import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular-works',
  templateUrl: './angular-works.component.html',
  styleUrls: ['./angular-works.component.less']
})
export class AngularWorksComponent implements OnInit {

  options = [];

  constructor(
    private router: Router,
    private activeR: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.options = [
      'DragDropModule',
      'CustomModel'
    ]
  }

  goRelatedApi(eve) {
    this.router.navigate(['angular-works',eve]);
  }


}
