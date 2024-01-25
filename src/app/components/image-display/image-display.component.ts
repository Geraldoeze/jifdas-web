// image-display.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css'],
})
export class ImageDisplayComponent {
  @Input() imageNumber: number = 1;
  number: number = 1;
  imagePath: string = '';

  ngOnChanges(): void {
    console.log('Image', this.imageNumber);
    if (this.imageNumber === 1) {
      this.number = 1;
    } else if (this.imageNumber === 2) {
      this.number = 2;
    } else if (this.imageNumber === 3) {
      this.number = 3;
    }
  }
}
