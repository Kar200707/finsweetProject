import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RequestService} from "../../services/request.service";
import {environment} from "../../../environment/environment";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
  ]
})
export class ContactComponent {
  isSentSuccessfully: boolean = true;
  isSentSuccessfullyTimeOut: boolean = false;

  form: FormGroup = new FormGroup({
      f_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),

      message: new FormControl('', []),

      county: new FormControl('Coutry', [])
  })

  constructor(private reqServ: RequestService) {  }

  timeOutSentSuccessfully():void {
    this.isSentSuccessfullyTimeOut = true;

    setTimeout(()=>{
      this.isSentSuccessfullyTimeOut = false;
      setTimeout(()=>{
        this.isSentSuccessfully = false;
      }, 300)
    }, 3000)
  }

  save ():void {
    this.reqServ.addData(
      environment.contactUs.get,
      this.form.value
    ).subscribe(():void=> {
      this.timeOutSentSuccessfully();
    })

    this.form.reset()
  }
}
