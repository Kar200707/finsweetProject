import { Component } from '@angular/core';
import {SharedModule} from "../components/shared/shared.module";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "../components/footer/footer.component";
import {HeaderComponent} from "../components/header/header.component";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [
    SharedModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ]
})
export class LayoutComponent {

}
