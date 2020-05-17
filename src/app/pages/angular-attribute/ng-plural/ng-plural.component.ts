import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-plural',
  templateUrl: './ng-plural.component.html',
  styleUrls: ['./ng-plural.component.less']
})
export class NgPluralComponent implements OnInit {

  category = '';
  options = [];
  constructor() { }

  ngOnInit(): void {
    this.options = [
      'issue',
      'req',
      'workitem',
      'qita'
    ]
  }

  goRelatedApi(eve) {
    this.category = eve;
  }


}
