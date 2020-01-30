import {Component} from '@angular/core';

@Component({
  selector: 'app-tft-comp1',
  template: `
    <p>Module Two > Feature 2 > Comp 7</p>
    <p><input [(ngModel)]="value"></p>
    <p>Value: {{value}}</p>
  `
})
export class TftComp1Component {
  public value: any = null;
}
