import { Component, OnInit, Compiler } from '@angular/core';
import { getLocaleCurrencyName, getLocalePluralCase, getLocaleTimeFormat } from '@angular/common';
import { AngularAttributeModule } from '../angular-attribute.module';
import { RxjsModule } from '../../rxjs/rxjs.module';
import { NgZone} from '@angular/core';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.less']
})
export class FunctionComponent implements OnInit {

  loclaCurrencyName = '';
  progress: number = 0;
  label: string;

  constructor(
    private compire: Compiler,
    private _ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.loclaCurrencyName = getLocaleCurrencyName('zh');

  }

  // Loop inside the Angular zone
  // so the UI DOES refresh after each setTimeout cycle
  processWithinAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(() => console.log('Inside Done!'));
  }

  // Loop outside of the Angular zone
  // so the UI DOES NOT refresh after each setTimeout cycle
  processOutsideOfAngularZone() {
    this.label = 'outside';
    this.progress = 0;
    this._ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        // reenter the Angular zone and display done
        this._ngZone.run(() => { console.log('Outside Done!'); });
      });
    });
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    } else {
      doneCallback();
    }
  }

}
