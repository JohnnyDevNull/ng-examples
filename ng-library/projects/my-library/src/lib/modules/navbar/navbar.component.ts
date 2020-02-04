import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Input()
  public brand: string;

  @Output()
  public itemClick = new EventEmitter<NavbarItemsIface>();

  public constructor(
    private readonly window: WindowRefService,
    private readonly router: Router
  ) { }

  public ngOnInit(): void { }

  public onItemClick(i) {
    this.itemClick.emit(this.items.slice(i)[0]);
  }
}
