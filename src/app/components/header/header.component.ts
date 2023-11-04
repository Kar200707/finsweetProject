import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [
    RouterModule
  ]
})
export class HeaderComponent {
  scrollToElement(): void {
    let footer:HTMLElement = document.getElementsByTagName('footer')[0];

    footer.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
}
