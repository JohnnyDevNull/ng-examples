import {Component} from '@angular/core';

@Component({
  selector: 'app-two-feature-two',
  template: `
    <app-tabs [items]="navItems" type="1"></app-tabs>
    <router-outlet></router-outlet>
  `
})
export class TwoFeatureTwoComponent {
  public navItems = [
    {text: 'Comp-7', path: 'comp-7'},
    {text: 'Comp-8', path: 'comp-8'}
  ];
}
