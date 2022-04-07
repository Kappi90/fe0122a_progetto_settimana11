import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  template: `
    <div class="container-fluid d-flex text-white text-center">
      <div class="profile fs-3 mt-2 text-center" *ngIf="user$ | async as user">
        <p>
          Nome utente: <span>{{ user.user.name }}</span>
        </p>
        <p>
          Email: <span>{{ user.user.email }}</span>
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .container-fluid {
        position: relative;
        border: 2px solid red;
        border-radius:10px;
        left: 5vw;
        margin-top: 5%;
        justify-content: center;
        width:30%;
        background-color: gray;
      }
      .profile {
        padding:15px;
        justify-content: center;
      }
      span{
        color:orange;
      }
    `,
  ],
})
export class ProfilePage implements OnInit {
  user$ = this.auth.user$;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
}
