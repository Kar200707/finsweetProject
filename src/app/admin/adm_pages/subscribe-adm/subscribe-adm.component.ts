import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {Contact} from "../../../models/contact";
import {RequestService} from "../../../services/request.service";
import {environment} from "../../../../environment/environment";
import {Subscribe} from "../../../models/subscribe";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-subscribe-adm',
  templateUrl: './subscribe-adm.component.html',
  styleUrls: ['./subscribe-adm.component.css'],
  imports: [
    MatCardModule,
    NgForOf,
    MatButtonModule,
    MatIconModule
  ],
  standalone: true
})
export class SubscribeAdmComponent {
  dataSubscribe!: Subscribe[];

  constructor(private reqServ: RequestService) {  }

  ngOnInit():void {
    this.reqServ.getData<Subscribe[]>(environment.subscribe.get)
      .subscribe((data: Subscribe[]):void => {
        this.dataSubscribe = data;
      })
  }
}
