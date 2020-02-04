import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {IconsModule} from '../icons/index';
import {NavbarComponent} from './navbar.component';

@NgModule({
  declarations: [ NavbarComponent ],
  exports: [ NavbarComponent ],
  imports: [ CommonModule, RouterModule, IconsModule ]
})
export class NavbarModule { }
