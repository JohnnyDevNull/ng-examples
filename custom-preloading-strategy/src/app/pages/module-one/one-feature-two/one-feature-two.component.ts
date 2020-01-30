import {Component} from '@angular/core';

@Component({
  selector: 'app-one-feature-two',
  template: `
    <app-tabs [items]="navItems" type="1"></app-tabs>
    <router-outlet></router-outlet>
  `
})
export class OneFeatureTwoComponent {
  public navItems = [
    {text: 'Comp-3', path: 'comp-3'},
    {text: 'Comp-4', path: 'comp-4'}
  ];
}
