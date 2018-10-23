import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
  }

  onLoginClick() {
    this.auth.signIn().then( () => {
      this.router.navigate(['/home']);
    });
  }

  onLogoutClick() {
    this.auth.signOut().then( () => {
      this.router.navigate(['/login']);
    });
  }
}
