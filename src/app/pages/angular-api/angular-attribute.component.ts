import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-angular-attribute',
  templateUrl: './angular-attribute.component.html',
  styleUrls: ['./angular-attribute.component.less']
})
export class AngularAttributeComponent implements OnInit {

  selectedValue = null;
  showImg = false;
  options = [];
  // 声明订阅对象
  routerChange: Subscription;
  constructor(
    private router: Router,
    private activeR: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.options = [
      'NgPlural',
      'NgComponentOutlet',
      'Router',
      'innerHtml',
      'elementRef',
      'function'
    ]
    // console.log('this.router:',this.router);
    this.routerChange = this.router.events
        .subscribe(event => {
          //do something
          if(event instanceof NavigationEnd) {
            console.log('EVENT:',event);
          }
      });
  }

  ngOnDestroy(): void {
    if (this.routerChange) {
      this.routerChange.unsubscribe();
    }
  }
  destrotRouter() {
    this.router.ngOnDestroy();
  }

  goRelatedApi(eve) {
    this.router.navigate(['angular-attr',eve]);
    if(eve == 'NgComponentOutlet'){
      this.router.navigate(['NgComponentOutlet'],{relativeTo: this.activeR, queryParams: { id: 1 }});
    }
  }

  toggle() {
    this.showImg = !this.showImg;
  }

}
