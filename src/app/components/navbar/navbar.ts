import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}
  logout() { this.authService.logout(); }
  get isLoggedIn() { return this.authService.isLoggedIn(); }
}
