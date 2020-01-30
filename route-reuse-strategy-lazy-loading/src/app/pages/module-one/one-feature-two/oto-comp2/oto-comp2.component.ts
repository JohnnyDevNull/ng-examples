import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-oto-comp2',
  template: `
    <p>Module One > Feature 2 > Comp 4</p>
    <p><input [(ngModel)]="value"></p>
    <p>Value: {{value}}</p>
  `
})
export class OtoComp2Component implements OnInit, OnDestroy {
  public value: any = null;

  public ngOnInit(): void {
    console.log('OtoComp2Component ngOnInit');
  }

  public ngOnDestroy(): void {
    console.log('OtoComp2Component ngOnDestroy');
  }
}
