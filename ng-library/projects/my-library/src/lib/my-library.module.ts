import {NgModule} from '@angular/core';
import {IconsModule} from './modules/icons/index';
import {NavbarModule} from './modules/navbar/index';

@NgModule({
  imports: [
    IconsModule,
    NavbarModule
  ],
  exports: [
    IconsModule,
    NavbarModule
  ]
})
export class MyLibraryModule { }
