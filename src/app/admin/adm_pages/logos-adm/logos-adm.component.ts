import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../../services/request.service";
import {environment} from "../../../environment/environment";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-logos-adm',
  templateUrl: './logos-adm.component.html',
  styleUrls: ['./logos-adm.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    NgForOf,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ]
})
export class LogosAdmComponent implements OnInit {
  dataLogos!: string[];

  form!: FormGroup;

  constructor(private reqServ: RequestService) {  }

  ngOnInit():void {
    this.reqServ.getData<any>(environment.logos.get)
      .subscribe((data: any):void=>{
        this.dataLogos = data;

        this.form = new FormGroup({
          logo1: new FormControl(data.logo1, Validators.required),
          logo2: new FormControl(data.logo2, Validators.required),
          logo3: new FormControl(data.logo3, Validators.required),
          logo4: new FormControl(data.logo4, Validators.required),
          logo5: new FormControl(data.logo5, Validators.required)
        })
      })
  }

  save():void {
    const obj = {
      logo1: this.form.get('logo1')?.value,
      logo2: this.form.get('logo2')?.value,
      logo3: this.form.get('logo3')?.value,
      logo4: this.form.get('logo4')?.value,
      logo5: this.form.get('logo5')?.value
    }

    this.reqServ.editData(environment.logos.get, obj)
      .subscribe(():void => { })
  }
}
