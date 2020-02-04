import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MyLibraryModule, WindowRefService} from '@my/library';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IconsModule} from './modules/icons/icons.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibraryModule,
    IconsModule
  ],
  bootstrap: [AppComponent],
  providers: [WindowRefService],
})
export class AppModule { }
