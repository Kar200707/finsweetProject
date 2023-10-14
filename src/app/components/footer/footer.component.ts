import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {RequestService} from "../../services/request.service";
import {environment} from "../../environment/environment";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule
  ]
})
export class FooterComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
        Validators.minLength(2),
        Validators.maxLength(30)
      ])
  })

  constructor(private reqServ: RequestService) {  }

  save ():void {
    this.reqServ.addData(
      environment.contactUs.get,
      this.form.value
    ).subscribe(():void=> {})

    this.form.disable()

    this.form.reset()
  }
}
