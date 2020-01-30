import {Component} from '@angular/core';

@Component({
  selector: 'app-one-feature-one',
  template: `
    <app-tabs [items]="navItems" type="1"></app-tabs>
    <router-outlet></router-outlet>`
})
export class OneFeatureOneComponent {
  public navItems = [
    {text: 'Comp-1', path: 'comp-1'},
    {text: 'Comp-2', path: 'comp-2'}
  ];
}
