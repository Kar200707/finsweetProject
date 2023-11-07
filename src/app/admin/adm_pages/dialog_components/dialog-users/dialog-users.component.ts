import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgForOf, NgIf} from "@angular/common";
import {Category} from "../../../../models/category";
import {RequestService} from "../../../../services/request.service";
import {environment} from "../../../../../environment/environment";
import {DialoginputValueService} from "../../../../services/dialoginput-value.service";
import {Authors} from "../../../../models/authors";
import {MatDialog} from "@angular/material/dialog";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-users',
  templateUrl: './dialog-users.component.html',
  styleUrls: ['./dialog-users.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    NgForOf,
    MatSnackBarModule
  ]
})
export class DialogUsersComponent implements OnInit {
  dataCategory!: Category[];
  dataAuthors!: Authors;

  form!: FormGroup;

  constructor (
    private reqServ: RequestService,
    private dialogDetails: DialoginputValueService,
    private dialog: MatDialog,
    private matSnackBar: MatSnackBar
  ) {  }

  ngOnInit():void {
    this.reqServ.getData<Authors>(environment.author.get + '/' + this.dialogDetails.idUser)
      .subscribe((data: Authors):void=>{
        this.dataAuthors = data;

        this.form = new FormGroup({
          name: new FormControl(
            this.dataAuthors.name,
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(70),
            ]
          ),
          image: new FormControl(
            this.dataAuthors.image,
            [
              Validators.required,
            ]
          ),
          description: new FormControl(
            this.dataAuthors.description,
            [
              Validators.required,
              Validators.minLength(15),
            ]
          ),
          title: new FormControl(
            this.dataAuthors.title,
            [
              Validators.required,
              Validators.minLength(3),
            ]
          ),
          email: new FormControl(
            this.dataAuthors.email,
            [
              Validators.required,
              Validators.minLength(3),
              Validators.email,
            ]
          ),
          bio: new FormControl(
            this.dataAuthors.bio,
            [
              Validators.required,
              Validators.minLength(3),
            ]
          ),
          facebook: new FormControl(
            this.dataAuthors.facebook,
            [
              Validators.required,
            ]
          ),
          twitter: new FormControl(
            this.dataAuthors.twitter,
            [
              Validators.required,
            ]
          ),
          instagram: new FormControl(
            this.dataAuthors.instagram,
            [
              Validators.required,
            ]
          ),
          linkedin: new FormControl(
            this.dataAuthors.linkedin,
            [
              Validators.required,
            ]
          ),
          superAdmin: new FormControl(
            'false',
            [
              Validators.required,
            ]
          ),
          password: new FormControl(
            '',
            [
              Validators.required,
              Validators.minLength(4)
            ]
          ),
        });
      })
  }

  save ():void {
    if (this.form.valid) {
      this.reqServ.editData(environment.author.get + '/' + this.dialogDetails.idUser, this.form.value)
        .subscribe(():void => {
          this.dialog.closeAll();

          this.matSnackBar.open('user edited', 'close', {
            duration: 3000
          })
        })
    }
  }
}
