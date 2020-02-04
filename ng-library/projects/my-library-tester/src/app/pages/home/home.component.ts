import {Component} from '@angular/core';
import {sayHello} from '@my/library';

@Component({
  selector: 'app-home',
  template: `<p>{{ text }}</p>`
})
export class HomeComponent {
  public text = sayHello('Home');
}
