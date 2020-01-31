import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CompOneComponent } from './components/comp-one.component';
import { CompTwoComponent } from './components/comp-two.component';
import { ClockComponent } from './components/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent,
    CompTwoComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
