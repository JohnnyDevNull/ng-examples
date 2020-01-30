import {Component} from '@angular/core';

@Component({
  selector: 'app-tft-comp2',
  template: `
    <p>Module Two > Feature 2 > Comp 8</p>
    <p><input [(ngModel)]="value"></p>
    <p>Value: {{value}}</p>
  `
})
export class TftComp2Component {
  public value: any = null;
}
