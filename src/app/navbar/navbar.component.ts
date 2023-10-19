import { Component } from '@angular/core';
import { ADMIN_NAV_ITEMS, CLIENT_NAV_ITEMS,  } from './navbar.config';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentUserRole: 'ADMIN' | 'CLIENT' = 'CLIENT'; // default value can be 'ADMIN' or 'CLIENT'

  get navItems() {
    return this.currentUserRole === 'ADMIN' ? ADMIN_NAV_ITEMS : CLIENT_NAV_ITEMS;
  }

}
