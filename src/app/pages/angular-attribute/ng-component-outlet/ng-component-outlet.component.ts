import { Component, OnInit } from '@angular/core';
import { TestComponent } from 'src/app/shared/components/test/test.component';

@Component({selector: 'hello-world', template: 'Hello World!---当前文件内部的组件'})
export class HelloWorld {}

@Component({
  selector: 'inner-template', 
  templateUrl: './inner-template.html'

})
export class innerTemplate {}

@Component({
  selector: 'app-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: ['./ng-component-outlet.component.less']
})

export class NgComponentOutletComponent implements OnInit {

  HelloWorld = HelloWorld;
  innerTemplate = innerTemplate;
  TestComponent = TestComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
