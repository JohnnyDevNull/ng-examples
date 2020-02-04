import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MyLibraryModule, WindowRefService} from '@my/library';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IconsModule} from './modules/icons/icons.module';
import { HelloComponent } from './pages/hello/hello.component';
import { HomeComponent } from './pages/home/home.component';
import { NoopComponent } from './pages/noop/noop.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, HomeComponent, NoopComponent],
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
