import {Component} from '@angular/core';

@Component({
  selector: 'app-oto-comp2',
  template: `
    <p>Module One > Feature 2 > Comp 4</p>
    <p><input [(ngModel)]="value"></p>
    <p>Value: {{value}}</p>
  `
})
export class OtoComp2Component {
  public value: any = null;
}
