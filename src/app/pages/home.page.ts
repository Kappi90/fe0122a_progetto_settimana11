import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container-fluid d-flex text-white text-center">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title fw-bold">Flixnet</h1>
          <p class="card-text fs-4">Accedi o registrati, è gratis 😎</p>
          <a
            class="btn btn-success mt-3 w-15"
            [routerLink]="['/login']"
            routerLinkActive="active"
            >Accedi</a
          >
          <a
            class="btn btn-success mt-3 w-15"
            [routerLink]="['/registration']"
            routerLinkActive="active"
            >Registrati</a
          >
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container-fluid {
        position: relative;
        left: 5vw;
        margin-top: 10%;
        justify-content: center;
      }
      .card-title{
        color:white;
        text-shadow: 2px 2px red;
      }
      .card {
        position: relative;
        width: 40%;
        top: 100px;
        left: 3vw;
        background-color: gray;
        border: 2px solid red;
      }
      .btn {
        margin-right: 25px;
      }
      h1 {
        color: blue;
      }
    `,
  ],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
