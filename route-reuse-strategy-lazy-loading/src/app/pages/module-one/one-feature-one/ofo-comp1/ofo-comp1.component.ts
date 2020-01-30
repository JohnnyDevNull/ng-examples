import {Component} from '@angular/core';

@Component({
  selector: 'app-ofo-comp1',
  template: `
    <p>Module One > Feature 1 > Comp 1</p>
    <p><input [(ngModel)]="value"></p>
    <p>Value: {{value}}</p>
  `
})
export class OfoComp1Component {
  public value: any = null;
}
