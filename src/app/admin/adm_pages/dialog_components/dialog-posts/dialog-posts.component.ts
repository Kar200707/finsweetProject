import {Component, OnInit} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from '@angular/material/select';
import {NgFor, NgIf} from "@angular/common";
import {RequestService} from "../../../../services/request.service";
import {Category} from "../../../../models/category";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {Posts} from "../../../../models/posts";
import {environment} from "../../../../../environment/environment";
import {DialoginputValueService} from "../../../../services/dialoginput-value.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Authors} from "../../../../models/authors";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

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
    MatSnackBarModule
  ]
})
export class DialogPostsComponent implements OnInit{
  dataCategory!: Category[];
  dataAuthor!: Authors[];
  valuePost!: Posts;
  userData: Authors = JSON.parse(localStorage.getItem('userData') ?? 'null').user;

  form: FormGroup = new FormGroup({
    title: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(70),
      ]
    ),
    category:  new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(53),
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
    shortDescription: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(5),
      ]
    ),
    userId: new FormControl(
      this.userData.superAdmin == 'false' ? this.userData.id : '',
      [
        Validators.required,
        Validators.minLength(5),
      ]
    ),
  });

  constructor (
    private reqServ: RequestService,
    public valueDetails: DialoginputValueService,
    private dialog: MatDialog,
    private matSnackBar: MatSnackBar
  ) {  }

  ngOnInit():void {
    this.reqServ.getData<Authors[]>(environment.author.get)
      .subscribe((data: Authors[]):void=>{
        this.dataAuthor = data;
      })

    this.reqServ.getData<Category[]>(environment.category.get)
      .subscribe((data:Category[]):void=>{
        this.dataCategory = data;
      })

    if (this.valueDetails.isCalled == 'postEdit') {
      this.reqServ.getData<Posts>(environment.posts.get + '/' + this.valueDetails.dialogPostsValue)
        .subscribe((data: Posts):void=>{
          this.valuePost = data;

          if (this.valueDetails.isCalled == 'postEdit') {
            this.form.get('title')?.setValue(data.title);
            this.form.get('category')?.setValue(data.category);
            this.form.get('userId')?.setValue(data.user_id);
            this.form.get('image')?.setValue(data.image);
            this.form.get('description')?.setValue(data.description);
            this.form.get('shortDescription')?.setValue(data.shortDescription);
          }
        })
    }
  }

  save ():void {
    if (this.form.valid) {
      if (this.valueDetails.isCalled == 'postEdit') {
        let date: Date = new Date();

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
              user_id: this.form.get('userId')?.value,
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
                this.dialog.closeAll();

                this.matSnackBar.open('post edited', 'close', {
                  duration: 3000
                })
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
              user_id: this.form.get('userId')?.value,
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

                this.matSnackBar.open('post created', 'close', {
                  duration: 3000
                })
              })
          })
      }
    }
  }
}
