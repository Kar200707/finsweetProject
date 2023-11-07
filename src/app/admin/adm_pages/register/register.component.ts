import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {Category} from "../../../models/category";
import {RequestService} from "../../../services/request.service";
import {environment} from "../../../../environment/environment";
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {log} from "@nguniversal/builders/src/ssr-dev-server";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  standalone: true,
})
export class RegisterComponent {
  dataCategory!: Category[];

  form: FormGroup = new FormGroup({
    name: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(70),
      ]
    ),
    image: new FormControl(
      '',
      [
        Validators.required,
      ]
    ),
    description: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(15),
      ]
    ),
    title: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
      ]
    ),
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.email,
      ]
    ),
    password: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
      ]
    ),
    bio: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
      ]
    ),
    superAdmin: new FormControl(
      'false',
      [
        Validators.required,
      ]
    ),
    facebook: new FormControl(
      '',
      [
        Validators.required,
      ]
    ),
    twitter: new FormControl(
      '',
      [
        Validators.required,
      ]
    ),
    instagram: new FormControl(
      '',
      [
        Validators.required,
      ]
    ),
    linkedin: new FormControl(
      '',
      [
        Validators.required,
      ]
    ),
  });

  constructor (private reqServ: RequestService, private matSnackBar: MatSnackBar) {  }

  save ():void {
    if (this.form.valid) {
      this.reqServ.addData<any>(environment.host.get + 'register', this.form.value)
        .subscribe(():void =>{
            this.matSnackBar.open('user registered', 'close', {
              duration: 3000
            })
        })
      this.form.reset();
    }
  }
}
