import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../services/request.service";
import {PrivacyPolicy} from "../../models/privacy-policy";
import {Category} from "../../models/category";
import {environment} from "../../environment/environment";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: [
    './privacy-policy.component.css',
    '../../styles/media.css'
  ],
  standalone: true,
  imports: [],
})
export class PrivacyPolicyComponent implements OnInit{
  dataPrivacyPolicy!: PrivacyPolicy;
  lastUpdate: string = 'loading...';
  title1: string = 'loading...';
  title2: string = 'loading...';
  text1: string = 'loading...';
  text2: string = 'loading...';
  text3: string = 'loading...';
  constructor(private reqServ: RequestService) {  }

  ngOnInit():void {
    this.reqServ.getData<PrivacyPolicy>(environment.privacyPolicy.get)
      .subscribe(
        (data: PrivacyPolicy):void => {
          this.dataPrivacyPolicy = data;
          this.lastUpdate = data.last_update;
          this.title1 = data.texts[0].title;
          this.title2 = data.texts[1].title;
          this.text1 = data.texts[0].text;
          this.text2 = data.texts[1].text1;
          this.text3 = data.texts[1].text2;
        }
      )
  }
}
