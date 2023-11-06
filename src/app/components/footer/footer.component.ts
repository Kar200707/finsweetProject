import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {RequestService} from "../../services/request.service";
import {environment} from "../../../environment/environment";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    NgIf
  ]
})
export class FooterComponent {
  isSendSuccessfully:boolean = false;

  form: FormGroup = new FormGroup({
    email: new FormControl('',
      [
        Validators.required,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ])
  })

  constructor(private reqServ: RequestService) {  }

  timeOutSendSuccessfully ():void {
    this.isSendSuccessfully = true;

    setTimeout(():void =>{
      this.isSendSuccessfully = false;
    }, 3000)
  }

  save ():void {
    this.reqServ.addData(
      environment.subscribe.get,
      this.form.value
    ).subscribe(():void=> {
      this.timeOutSendSuccessfully();
    })

    this.form.reset()
  }
}
