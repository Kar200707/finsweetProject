import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {Category} from "../../../models/category";
import {RequestService} from "../../../services/request.service";
import {DialoginputValueService} from "../../../services/dialoginput-value.service";
import {MatDialog} from "@angular/material/dialog";
import {environment} from "../../../../environment/environment";
import {Authors} from "../../../models/authors";

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
    ReactiveFormsModule
  ],
  standalone: true,
})
export class RegisterComponent {
  dataCategory!: Category[];
  isRegistred:boolean = false;

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

  constructor (private reqServ: RequestService) {  }

  save ():void {
    if (this.form.valid) {
      const obj = {
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
        image: this.form.get('image')?.value,
        name: this.form.get('name')?.value,
        title: this.form.get('title')?.value,
        description: this.form.get('description')?.value,
        bio: this.form.get('bio')?.value,
        facebook: this.form.get('facebook')?.value,
        twitter: this.form.get('twitter')?.value,
        instagram: this.form.get('instagram')?.value,
        linkedin: this.form.get('linkedin')?.value,
        superAdmin: false
      }

      this.reqServ.addData<any>(environment.host.get + 'register', obj)
        .subscribe(():void =>{
          this.isRegistred = true;
          setTimeout(():void =>{
            this.isRegistred = false;
          }, 3000)
        })
    }
  }
}
