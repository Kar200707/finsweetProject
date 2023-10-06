import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loader-bar',
  templateUrl: './loader-bar.component.html',
  styleUrls: ['./loader-bar.component.css'],
  standalone: true
})
export class LoaderBarComponent {
  @Input() Height:string = '100 px'
}
