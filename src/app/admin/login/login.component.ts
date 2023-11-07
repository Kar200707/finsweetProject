import {Component} from '@angular/core';
import {RequestService} from "../../services/request.service";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";
import {environment} from "../../../environment/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    NgIf,
    MatIconModule,
    MatButtonModule
  ],
  standalone: true
})
export class LoginComponent {
  isFalseLogin:boolean = false;
  hide:boolean = true;

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  })

  constructor(private reqServ: RequestService, private router: Router) {  }

  save():void {
    if (this.form.valid) {
      this.reqServ.addData<any>(environment.host.get + 'login', this.form.value)
          .subscribe((data):void=>{
            localStorage.setItem('token', data.accessToken)
            localStorage.setItem('userData', JSON.stringify(data))
            this.router.navigate(['/admin'])
          },(error):void =>{
            if (error.status === 400) {
              this.isFalseLogin = true;
            }
          })
    }
  }
}
