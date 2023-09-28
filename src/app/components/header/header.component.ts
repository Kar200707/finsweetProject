import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  scrollToElement(): void {
    document.body.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
}
