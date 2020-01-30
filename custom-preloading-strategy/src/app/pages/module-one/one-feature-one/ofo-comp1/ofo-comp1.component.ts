import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-ofo-comp1',
  template: `
    <p>Module One > Feature 1 > Comp 1</p>
    <p><input [(ngModel)]="value"></p>
    <p>Value: {{value}}</p>
  `
})
export class OfoComp1Component implements OnInit, OnDestroy {
  public value: any = null;

  public ngOnInit(): void {
    console.log('OfoComp1Component ngOnInit');
  }

  public ngOnDestroy(): void {
    console.log('OfoComp1Component ngOnDestroy');
  }
}
