import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-ofo-comp2',
  template: `
    <p>Module One > Feature 1 > Comp 2</p>
    <p><input [(ngModel)]="value"></p>
    <p>Value: {{value}}</p>
  `
})
export class OfoComp2Component implements OnInit, OnDestroy {
  public value: any = null;

  public ngOnInit(): void {
    console.log('OfoComp2Component ngOnInit');
  }

  public ngOnDestroy(): void {
    console.log('OfoComp2Component ngOnDestroy');
  }
}
