import { Component } from '@angular/core';
import {Category} from "../../../../models/category";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RequestService} from "../../../../services/request.service";
import {DialoginputValueService} from "../../../../services/dialoginput-value.service";
import {MatDialog} from "@angular/material/dialog";
import {environment} from "../../../../../environment/environment";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {NgFor, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-category',
  templateUrl: './dialog-category.component.html',
  styleUrls: ['./dialog-category.component.css'],
  standalone: true,
  imports: [
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    NgFor,
    MatButtonModule,
    NgIf,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class DialogCategoryComponent {
  valueCategory!: Category;

  form: FormGroup = new FormGroup({
    title: new FormControl(
      (''),
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(70),
      ]
    ),
    image: new FormControl(
      (''),
      [
        Validators.required,
      ]
    ),
    description: new FormControl(
      (''),
      [
        Validators.required,
        Validators.minLength(15),
      ]
    ),
    shortDescription: new FormControl(
      (''),
      [
        Validators.required,
        Validators.minLength(5),
      ]
    ),
  });

  constructor (
    private reqServ: RequestService,
    private valueDetails: DialoginputValueService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {  }

  ngOnInit():void {
    if (this.valueDetails.isCalledCategory == 'categoryEdit') {
      this.reqServ.getData<Category>(environment.category.get + '/' + this.valueDetails.idCatgory)
        .subscribe((data: Category):void=>{
          this.valueCategory = data;

          if (this.valueDetails.isCalledCategory == 'categoryEdit') {
            this.form.get('title')?.setValue(data.title);
            this.form.get('image')?.setValue(data.image);
            this.form.get('description')?.setValue(data.description);
            this.form.get('shortDescription')?.setValue(data.shortDescription);
          }
        })
    }
  }

  save ():void {
    if (this.form.valid) {
      if (this.valueDetails.isCalledCategory == 'categoryEdit') {
        this.reqServ.editData(environment.category.get + '/' + this.valueCategory.id, this.form.value)
          .subscribe(():void => {
            this.dialog.closeAll();

            this.snackBar.open('category edited', 'close', {
              duration: 3000,
              panelClass: ['success-snackbar']
            })
          })
      } else {
        this.reqServ.addData(environment.category.get, this.form.value)
          .subscribe(():void => {
            this.dialog.closeAll();

            this.snackBar.open('category created', 'close', {
              duration: 3000
            })
          })
      }
    }
  }
}
