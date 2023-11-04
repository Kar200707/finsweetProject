import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appAdminHeight]',
  standalone: true,
})
export class AdminHeightDirective {
  @HostListener('window:resize', ['$event'])
  onResize (event: any):void {
    this.el.nativeElement.style.height = event.currentTarget.innerHeight -64 + 'px';
  }

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.height = innerHeight -64 + 'px';
  }
}
