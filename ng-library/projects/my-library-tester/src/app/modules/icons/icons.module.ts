import {NgModule} from '@angular/core';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

@NgModule({ imports: [FontAwesomeModule] })
export class IconsModule {
  constructor(private library: FaIconLibrary) {
    this.registerIcons();
  }
  private registerIcons() {
    this.library.addIcons(faEnvelope);
  }
}
