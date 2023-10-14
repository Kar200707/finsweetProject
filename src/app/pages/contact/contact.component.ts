import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {RequestService} from "../../services/request.service";
import {environment} from "../../environment/environment";

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
  form: FormGroup = new FormGroup({
      f_name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.email
      ]),

      message: new FormControl('', []),

      county: new FormControl('Coutry', [])
  })

  constructor(private reqServ: RequestService) {  }

  save ():void {
    this.reqServ.addData(
      environment.contactUs.get,
      this.form.value
    ).subscribe(():void=> {})

    this.form.reset()
  }
}
