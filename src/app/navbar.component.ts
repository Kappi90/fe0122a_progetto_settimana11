import { Component, OnInit } from '@angular/core';
import { AuthData, AuthService } from './auth/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="container-fluid d-flex">
      <div class="d-flex flex-column flex-shrink-0 p-3 text-white bar" style="width:250px;">
        <div class="d-flex align-items-center my-3 ms-2 fs-2 text-white text-decoration-none">
          <span class="brand">Flixnet</span>
        </div>
        <hr />
        <ul class="nav nav-pills flex-column mt-4">
          <li *ngIf="!user" class="nav-item">
            <a class="nav-link active" aria-current="page" [routerLink]="['/']" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
              <i class="bi bi-house mx-2"></i>Home</a>
          </li>
          <li *ngIf="!user" class="nav-item">
            <a class="nav-link" [routerLink]="['/login']" routerLinkActive="active">
              <i class="bi bi-key mx-2"></i>Login</a>
          </li>
          <li *ngIf="!user" class="nav-item">
            <a class="nav-link reg" [routerLink]="['/registration']" routerLinkActive="active">
              <i class="bi bi-person-plus mx-2"></i> Registrati</a>
          </li>
          <li *ngIf="user" class="nav-item">
            <a class="nav-link" aria-current="page" [routerLink]="['/movies']" routerLinkActive="active">
              <i class="bi bi-film mx-2"></i>Film</a>
          </li>
          <li *ngIf="user" class="nav-item">
            <a class="nav-link" aria-current="page" [routerLink]="['/profile']" routerLinkActive="active">
              <i class="bi bi-person-square mx-2"></i>Profile</a>
          </li>
        </ul>
        <hr />
        <div class="log">
          <h6 class="fs-4 ms-3 my-2 mb-4" *ngIf="user">
            Benvenuto,<br /><span class="span">{{ user.user.name }}</span>
          </h6>
          <div class="d-flex justify-content-end">
            <button *ngIf="user" (click)="logout()" class="btn btn-danger fs-4">Logout <i class="bi bi-box-arrow-left"></i></button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      * {
        margin: 0;
        padding: 0;
      }
      .reg{
        margin-bottom:20px;
      }
      .btn{
        padding:5px;
      }
      .container-fluid {
        display: flex;
        flex-wrap: nowrap;
        position: absolute;
        height: 100vh;
        max-height: 100vh;
        overflow-x: auto;
        overflow-y: hidden;
        margin-left: 0;
      }
      .bar{
        position: fixed;
        top:0px;
        left: 0px;
        height: 100vh;
        z-index: 60;
        background-color:gray;
      }
      li {
        padding: 3px;
      }
      a {
        cursor: pointer;
        padding: 8px;
        font-size: 20px;
        color: white;
      }
      .log {
        display: flex;
        flex-direction: column;
        margin: 10% 0;
      }
      .brand{
        text-shadow: 2px 2px red;
      }
      .span{
        color: orange;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  user!: AuthData | null;
  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((user) => {
      this.user = user;
    });
  }
  logout() {
    this.authSrv.logout();
  }
}

