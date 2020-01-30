import {Component} from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container my-5">
      <app-tabs [items]="navItems"></app-tabs>
      <router-outlet></router-outlet>
    </div>
  `
})
export class MainComponent {
  public readonly navItems = [
    {text: 'Feature-1', path: '/module-1/feature-1'},
    {text: 'Feature-2', path: '/module-1/feature-2'},
    {text: 'Feature-3', path: '/module-2/feature-3'},
    {text: 'Feature-4', path: '/module-2/feature-4'}
  ];
}
