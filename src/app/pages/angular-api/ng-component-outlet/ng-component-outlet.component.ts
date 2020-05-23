import { Component, OnInit, Injectable, Injector } from '@angular/core';
import { TestComponent } from 'src/app/shared/components/test/test.component';
import { Acomponent } from './a.component/a';
import { Bcomponent } from './b.component/b';
import { Greeter } from '.';

@Component({selector: 'hello-world', template: 'Hello World!---当前文件内部的组件'})
export class HelloWorld {}

@Component({
  selector: 'inner-template',
  templateUrl: './inner-template.html'
})
export class innerTemplate {
  dot: any;
  ngOnInit():void {
    this.dot = document.getElementById('innderHtml');
  }
  addClass() {
    this.dot.classList.add("inneritem");
    setTimeout(() => {
      this.dot.classList.remove("inneritem");
    },1000);
  }
}

@Component({
  selector: 'app-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: ['./ng-component-outlet.component.less']
})

export class NgComponentOutletComponent implements OnInit {

  HelloWorld = HelloWorld;
  innerTemplate = innerTemplate;
  TestComponent = TestComponent;

  myInjector: Injector;

  template = [];

  constructor(injector: Injector) {
    this.myInjector =
        Injector.create({providers: [{provide: Greeter}], parent: injector});
   }

  ngOnInit(): void {
    this.template.push(Acomponent);
    this.template.push(Bcomponent);
  }

}
