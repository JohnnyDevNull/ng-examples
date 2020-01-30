import {Component} from '@angular/core';

@Component({
  selector: 'app-tfo-comp2',
  template: `
    <p>Module Two > Feature 1 > Comp 6</p>
    <p><input [(ngModel)]="value"></p>
    <p>Value: {{value}}</p>
  `
})
export class TfoComp2Component {
  public value: any = null;
}
