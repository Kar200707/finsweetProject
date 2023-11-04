import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {Contact} from "../../../models/contact";
import {RequestService} from "../../../services/request.service";
import {environment} from "../../../../environment/environment";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-contact-us-adm',
  templateUrl: './contact-us-adm.component.html',
  styleUrls: ['./contact-us-adm.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf
  ]
})
export class ContactUsAdmComponent implements OnInit{
  dataContact!: Contact[];

  constructor(private reqServ: RequestService) {  }

  ngOnInit():void {
    this.reqServ.getData<Contact[]>(environment.contactUs.get)
      .subscribe((data: Contact[]):void => {
        this.dataContact = data;
      })
  }
}
