import {Component, Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

interface Tab {
  text: string;
  path: string;
}

@Component({
  selector: 'app-tabs',
  template: `
    <ul class="nav mb-3" [ngClass]="{
      'nav-pills': +type === 0,
      'nav-tabs': +type === 1
    }">
      <li class="nav-item" *ngFor="let item of items">
        <a class="nav-link" [routerLink]="item.path" routerLinkActive="active">{{item.text}}</a>
      </li>
    </ul>
  `
})
export class TabsComponent {
  @Input() public items: Tab[] = [];
  @Input() public type: 0 | 1 = 0;
}

@NgModule({
  declarations: [TabsComponent],
  exports: [TabsComponent],
  imports: [CommonModule, RouterModule]
})
export class TabsModule {}
