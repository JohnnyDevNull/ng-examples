import { Component } from '@angular/core';
import { PagesService } from './services/pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public constructor(private service: PagesService) {}
  public onValueChanged(v) {
    this.service.setData(v);
  }
}
