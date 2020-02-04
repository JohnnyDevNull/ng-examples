import {Component} from '@angular/core';
import {NavbarItemsIface} from '@my/library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navItems: NavbarItemsIface[] = [
    {text: 'Home', path: '/', icon: 'home'},
    {text: 'Hello', path: '/hello', icon: 'envelope'},
    {text: 'Noop', path: '/noop', icon: 'plus'}
  ];

  public onNavbarItemClick(item) {
    console.warn(item);
  }
}
