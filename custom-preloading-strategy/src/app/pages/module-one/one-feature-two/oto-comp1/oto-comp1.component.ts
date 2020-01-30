import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-oto-comp1',
  template: `
    <p>Module One > Feature 2 > Comp 3</p>
    <p><input [(ngModel)]="value"></p>
    <p>Value: {{value}}</p>
  `
})
export class OtoComp1Component implements OnInit, OnDestroy {
  public value: any = null;

  public ngOnInit(): void {
    console.log('OtoComp1Component ngOnInit');
  }

  public ngOnDestroy(): void {
    console.log('OfoComp1Component ngOnDestroy');
  }
}
