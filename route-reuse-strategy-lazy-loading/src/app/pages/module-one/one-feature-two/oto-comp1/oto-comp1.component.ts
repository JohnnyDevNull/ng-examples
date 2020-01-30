import {Component} from '@angular/core';

@Component({
  selector: 'app-oto-comp1',
  template: `
    <p>Module One > Feature 2 > Comp 3</p>
    <p><input [(ngModel)]="value"></p>
    <p>Value: {{value}}</p>
  `
})
export class OtoComp1Component {
  public value: any = null;
}
