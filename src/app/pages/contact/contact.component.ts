import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.css',
    '../../styles/media.css'
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
  })
}
