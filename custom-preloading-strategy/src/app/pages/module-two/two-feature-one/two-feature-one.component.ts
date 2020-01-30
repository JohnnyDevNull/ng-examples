import {Component} from '@angular/core';

@Component({
  selector: 'app-two-feature-one',
  template: `
    <app-tabs [items]="navItems" type="1"></app-tabs>
    <router-outlet></router-outlet>
  `
})
export class TwoFeatureOneComponent {
  public navItems = [
    {text: 'Comp-5', path: 'comp-5'},
    {text: 'Comp-6', path: 'comp-6'}
  ];
}
