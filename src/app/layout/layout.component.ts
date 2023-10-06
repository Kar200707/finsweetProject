import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {FooterComponent} from "../components/footer/footer.component";
import {HeaderComponent} from "../components/header/header.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ]
})
export class LayoutComponent {

}
