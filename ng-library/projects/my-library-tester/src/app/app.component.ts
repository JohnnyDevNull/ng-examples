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
    {text: 'Hello', icon: 'envelope'}
  ];
}
