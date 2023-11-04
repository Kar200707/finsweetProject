import { Component } from '@angular/core';
import {Category} from "../../../../models/category";
import {Posts} from "../../../../models/posts";
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
  ]
})
export class DialogCategoryComponent {
  dataCategory!: Category[];
  valueCategory!: Category;

  form!: FormGroup;

  constructor (
    private reqServ: RequestService,
    private valueDetails: DialoginputValueService,
    private dialog: MatDialog
  ) {  }

  ngOnInit():void {
    this.reqServ.getData<Category[]>(environment.category.get)
      .subscribe((data:Category[]):void=>{
        this.dataCategory = data;
      })

    this.reqServ.getData<Category>(
      this.valueDetails.isCalledCategory == 'categoryEdit' ?  environment.category.get + '/' + this.valueDetails.idCatgory
        : environment.category.get
    )
      .subscribe((data: Category):void=>{
        this.valueCategory = data;

        this.form = new FormGroup({
          name: new FormControl(
            (
              this.valueDetails.isCalledCategory == 'categoryEdit'
                ? data.title.slice(0, 60)
                : ''
            ),
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(70),
            ]
          ),
          icon: new FormControl(
            (
              this.valueDetails.isCalledCategory == 'categoryEdit'
                ? data.image
                : ''
            ),
            [
              Validators.required,
            ]
          ),
          description: new FormControl(
            (
              this.valueDetails.isCalledCategory == 'categoryEdit'
                ? data.description
                : ''
            ),
            [
              Validators.required,
              Validators.minLength(15),
            ]
          ),
          shortDescription: new FormControl(
            (
              this.valueDetails.isCalledCategory == 'categoryEdit'
                ? data.shortDescription
                : ''
            ),
            [
              Validators.required,
              Validators.minLength(5),
            ]
          ),
        })
      })
  }

  save ():void {
    if (this.form.valid) {
      if (this.valueDetails.isCalledCategory == 'categoryEdit') {

        const obj = {
          image: this.form.get('icon')?.value,
          title: this.form.get('name')?.value,
          shortDescription: this.form.get('shortDescription')?.value,
          description: this.form.get('description')?.value
        }

        this.reqServ.editData(environment.category.get + '/' + this.valueCategory.id, obj)
          .subscribe(():void => {
            this.dialog.closeAll();
          })

      } else {
        const obj = {
          image: this.form.get('icon')?.value,
          title: this.form.get('name')?.value,
          shortDescription: this.form.get('shortDescription')?.value,
          description: this.form.get('description')?.value
        }

        this.reqServ.addData(environment.category.get, obj)
          .subscribe(():void => {
            this.dialog.closeAll();
          })
      }
    }
  }
}
