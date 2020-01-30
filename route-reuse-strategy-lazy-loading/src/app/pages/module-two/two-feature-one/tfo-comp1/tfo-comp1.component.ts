import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tfo-comp1',
  template: `
    <p>Module Two > Feature 1 > Comp 5</p>
    <p><input [(ngModel)]="value"></p>
    <p>Value: {{value}}</p>
  `
})
export class TfoComp1Component {
  public value: any = null;
}
