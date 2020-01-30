import {Component} from '@angular/core';
import {AppReuseStrategy} from '../../services/app-reuse.strategy';

@Component({
  selector: 'app-main',
  template: `
    <div class="container my-5">
      <div class="d-flex flex-row">
        <app-tabs [items]="navItems" class="d-block flex-grow-1"></app-tabs>
        <button class="btn btn-primary mb-3" (click)="onClearHandlers()">Clear</button>
      </div>
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

  constructor(private readonly appReuse: AppReuseStrategy) {}

  public onClearHandlers() {
    this.appReuse.destroy();
  }
}
