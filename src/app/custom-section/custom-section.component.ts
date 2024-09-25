import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-section',
  templateUrl: './custom-section.component.html',
  styleUrls: ['./custom-section.component.css']
})
export class CustomSectionComponent {

  @Input() square1Content!: string;
  @Input() square2Content!: string;
  @Input() square3Content!: string;

  @Input() square1Icon!: string; 
  @Input() square2Icon!: string; 
  @Input() square3Icon!: string;


  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string) {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

}
