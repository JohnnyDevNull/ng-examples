import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {faHome, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IconsModule {

  public constructor(
    protected readonly library: FaIconLibrary
  ) {
    this.registerIcons();
  }

  protected registerIcons() {
    this.library.addIcons(faHome, faPlus, faMinus);
  }

}
