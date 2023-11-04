import {Component, OnInit} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from '@angular/material/select';
import {MatOption} from "@angular/material/core";
import {NgFor, NgIf} from "@angular/common";
import {RequestService} from "../../../../services/request.service";
import {Category} from "../../../../models/category";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {Posts} from "../../../../models/posts";
import {environment} from "../../../../../environment/environment";
import {DialoginputValueService} from "../../../../services/dialoginput-value.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog-posts',
  templateUrl: './dialog-posts.component.html',
  styleUrls: ['./dialog-posts.component.css'],
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
export class DialogPostsComponent implements OnInit{
  dataCategory!: Category[];
  valuePost!: Posts;

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

    this.reqServ.getData<Posts>(
      this.valueDetails.isCalled == 'postEdit' ?  environment.posts.get + '/' + this.valueDetails.dialogPostsValue
        : environment.posts.get
    )
      .subscribe((data: Posts):void=>{
        this.valuePost = data;

        this.form = new FormGroup({
          title: new FormControl(
            (
            this.valueDetails.isCalled == 'postEdit'
              ? data.title.slice(0, 60) + '...'
              : ''
            ),
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(70),
            ]
          ),
          category:  new FormControl(
            (
              this.valueDetails.isCalled == 'postEdit'
                ? data.category
                : ''
            ),
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(53),
            ]
          ),
          image: new FormControl(
            (
              this.valueDetails.isCalled == 'postEdit'
                ? data.image
                : ''
            ),
            [
              Validators.required,
            ]
          ),
          description: new FormControl(
            (
              this.valueDetails.isCalled == 'postEdit'
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
              this.valueDetails.isCalled == 'postEdit'
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
      if (this.valueDetails.isCalled == 'postEdit') {
        let date: Date = new Date();
        let userData = JSON.parse(localStorage.getItem('userData') ?? 'null').user;

        let months: string[] = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]

        this.reqServ.getData<Category[]>(environment.category.get + '?title=' +
          this.form.get('category')?.value.slice(0, 1).toUpperCase()
          + this.form.get('category')?.value.slice(1).toLowerCase()
        )
          .subscribe((category: Category[]):void => {
            const obj = {
              user_id: userData.id,
              category: this.form.get('category')?.value,
              category_icon: category[0].image,
              created_date: months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(),
              title: this.form.get('title')?.value,
              image: this.form.get('image')?.value,
              shortDescription: this.form.get('shortDescription')?.value,
              description: this.form.get('description')?.value
            }

            this.reqServ.editData(environment.posts.get + '/' + this.valueDetails.dialogPostsValue, obj)
              .subscribe((posts):void=>{
                this.dialog.closeAll()
              })
          })
      } else {
        let date: Date = new Date();
        let userData = JSON.parse(localStorage.getItem('userData') ?? 'null').user;

        let months: string[] = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]

        this.reqServ.getData<Category[]>(environment.category.get + '?title=' +
          this.form.get('category')?.value.slice(0, 1).toUpperCase()
          + this.form.get('category')?.value.slice(1).toLowerCase()
        )
          .subscribe((category: Category[]):void => {
            const obj = {
              user_id: userData.id,
              category: this.form.get('category')?.value,
              category_icon: category[0].image,
              created_date: months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(),
              title: this.form.get('title')?.value,
              image: this.form.get('image')?.value,
              shortDescription: this.form.get('shortDescription')?.value,
              description: this.form.get('description')?.value
            }

            this.reqServ.addData(environment.posts.get, obj)
              .subscribe((posts):void=>{
                this.dialog.closeAll();
              })
          })
      }
    }
  }
}
