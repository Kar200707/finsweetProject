import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../../services/request.service";
import {environment} from "../../../environment/environment";
import {MatCardModule} from "@angular/material/card";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {PrivacyPolicy} from "../../../models/privacy-policy";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-privacy-policy-adm',
  templateUrl: './privacy-policy-adm.component.html',
  styleUrls: ['./privacy-policy-adm.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgIf,
    MatButtonModule
  ]
})
export class PrivacyPolicyAdmComponent implements OnInit{
  dataPrivacyPolicy!: any;

  form!: FormGroup;

  constructor(private reqServ: RequestService) {  }

  ngOnInit():void {
    this.reqServ.getData<PrivacyPolicy>(environment.privacyPolicy.get)
      .subscribe((data: PrivacyPolicy):void =>{
        this.dataPrivacyPolicy = data;

        this.form  = new FormGroup({
          title1: new FormControl(data.texts[0].title, [Validators.required]),
          title2: new FormControl(data.texts[1].title, [Validators.required]),
          text1: new FormControl(data.texts[0].text, [Validators.required]),
          text2: new FormControl(data.texts[1].text1, [Validators.required]),
          text3: new FormControl(data.texts[1].text2, [Validators.required]),
        })
      })
  }

  save():void {
    let date: Date = new Date();

    let months: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]

    const obj = {
      last_update: date.getDate() + ' ' + months[date.getMonth()] + ', ' + date.getFullYear(),
      texts: [
        {
          title: this.form.get('title1')?.value,
          text: this.form.get('text1')?.value
        },
        {
          title: this.form.get('title2')?.value,
          text1: this.form.get('text2')?.value,
          text2: this.form.get('text3')?.value
        }
      ]
    }

    console.log(this.form.value)
    this.reqServ.editData(environment.privacyPolicy.get, obj)
      .subscribe(()=>{})
  }
}
