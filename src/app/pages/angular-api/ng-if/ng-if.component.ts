import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.less']
})
export class NgIfComponent implements OnInit {

  thenBlock: TemplateRef<any> = null;
  show: boolean = true;
  toggleBtn: boolean = true;

  @ViewChild('primaryBlock')
  primaryBlock: TemplateRef<any> = null;
  @ViewChild('secondaryBlock')
  secondaryBlock: TemplateRef<any> = null;

  switchPrimary() {
    this.thenBlock = this.thenBlock === this.primaryBlock ?
      this.secondaryBlock : this.primaryBlock;
  }

  toggle(){
    this.toggleBtn = !this.toggleBtn;
  }

  ngOnInit() {
      this.thenBlock = this.primaryBlock;
  }

}
