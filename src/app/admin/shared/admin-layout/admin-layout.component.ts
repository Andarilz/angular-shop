import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(event) {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/admin', 'login']);
  }
}
