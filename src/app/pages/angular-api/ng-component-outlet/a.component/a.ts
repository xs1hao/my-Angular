import { Component } from "@angular/core";
import { Greeter } from '..';

@Component({
  templateUrl: './a.html'
})
export class Acomponent {
  dataFromIndex: Array<string>;
  constructor(public greeter: Greeter){
  }
  ngOnInit():void {
    console.log(this.greeter.getName('德玛西亚'));
    this.dataFromIndex = this.greeter.data;

    console.log('this.dataFromIndex:',this.dataFromIndex);

  }
}
