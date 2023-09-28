import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('',
      [
        Validators.required,
        Validators.email,
        Validators.minLength(10),
        Validators.maxLength(30)
      ])
  })
}
