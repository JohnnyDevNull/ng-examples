import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouteReuseStrategy} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {TabsModule} from './components/tabs/tabs.component';
import {AppReuseStrategy} from './services/app-reuse.strategy';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TabsModule
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: AppReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
