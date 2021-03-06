import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  template: `
    <div class="container-fluid register">
      <form #form="ngForm" (ngSubmit)="onsubmit(form)">
        <div class="form-group">
          <label for="name" class="text-white fs-4">Nome</label>
          <input name="name" required ngModel class="form-control" id="name" type="text"/>
        </div>
        <div class="form-group">
          <label for="surname" class="text-white fs-4">Cognome</label>
          <input name="surname" required ngModel class="form-control" id="surname" type="text"/>
        </div>
        <div class="form-group">
          <label for="email" class="text-white fs-4">Email</label>
          <input name="email" class="form-control" required ngModel id="email" type="email"/>
        </div>
        <div class="form-group">
          <label for="pass" class="text-white fs-4">Password</label>
          <input name="password" class="form-control" required ngModel id="pass" type="password"/>
        </div>
        <div class="d-flex align-items-center">
          <button type="submit" [disabled]="form.invalid" class="btn btn-success mt-4 fs-5">Registrati
            <span *ngIf="isLoading" class="spinner-border spinner-border-sm" role="status"></span>
          </button>
          <div class="mt-3">
            <span class="text-white fs-5 mx-3">O se sei già registrato <a [routerLink]="['/login']" routerLinkActive="active" class="log">Login</a></span>
          </div>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
      .register {
        position: relative;
        top: 15vh;
        left: 5vw;
        width: 30%;
        border: 2px solid red;
        padding: 40px;
        background-color: gray;
        border-radius: 10px;
        box-shadow: 2px 2px 25px 0px rgba(255,255,255,0.51);
      }
      input {
        font-size: 20px;
      }
      .log {
        color: blue;
      }
    `,
  ],
})
export class RegistrationPage implements OnInit {
  isLoading = false;
  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}
  async onsubmit(form: NgForm) {
    this.isLoading = true;
    console.log(form.value);
    try {
      await this.authSrv.registration(form.value).toPromise();
      this.router.navigate(['/login']);
      this.isLoading = false;
    } catch (error) {
      console.error(error);
      alert(error);
      form.reset();
      this.isLoading = false;
    }
  }
}
