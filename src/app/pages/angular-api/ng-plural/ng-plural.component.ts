import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/shared/core/utlis/constant';



@Component({
  selector: 'app-ng-plural',
  templateUrl: './ng-plural.component.html',
  styleUrls: ['./ng-plural.component.less']
})
export class NgPluralComponent implements OnInit {

  category = '';
  options = [];
  mockData = [];
  theadConfig = [];

  constructor(
    private constant: Constant
  ) { }

  ngOnInit(): void {
    this.options = [
      'issue',
      'req',
      'workitem',
      'qita'
    ]
    this.mockData = this.constant.getMockDataWithVision();
    this.theadConfig = this.constant.getTheadConfigData();
  }

  goRelatedApi(eve) {
    this.category = eve;
  }

  toggleClass() {
    const dot = document.querySelector('#text');
    dot.classList.add('myClass');
    setTimeout(()=>{
      dot.classList.remove('myClass')
    },1000)
  }

}
