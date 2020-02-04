import {Component} from '@angular/core';
import {sayHello} from '@my/library';

@Component({
  selector: 'app-hello',
  template: `<p>{{ text }}</p>`
})
export class HelloComponent {
  text = sayHello();
}
