import {Component, Input, OnInit} from '@angular/core';
import {WindowRefService} from '../../services/window-ref.service';
import {NavbarItemsIface} from './navbar-items.iface';
import {Router} from '@angular/router';

@Component({
  selector: 'my-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  @Input()
  public items: NavbarItemsIface[] = [];

  public constructor(
    private readonly window: WindowRefService,
    private readonly router: Router
  ) { }

  public ngOnInit(): void { }

}
