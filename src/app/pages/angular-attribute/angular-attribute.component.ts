import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular-attribute',
  templateUrl: './angular-attribute.component.html',
  styleUrls: ['./angular-attribute.component.less']
})
export class AngularAttributeComponent implements OnInit {

  selectedValue = null;
  options = [];
  constructor(
    private router: Router,
    private activeR: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.options = [
      'NgPlural',
      'NgComponentOutlet',
      'Router'
    ]
  }

  goRelatedApi(eve) {
    this.router.navigate(['angular-attr',eve]);
    if(eve == 'NgComponentOutlet'){
      this.router.navigate(['NgComponentOutlet'],{relativeTo: this.activeR, queryParams: { id: 1 }});
    }
  }


}
