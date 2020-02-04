import {Component} from '@angular/core';
import {sayHello} from '@my/library';

@Component({
  selector: 'app-noop',
  template: `<p>{{ text }}</p>`
})
export class NoopComponent {
  public text = sayHello('Noop');
}
