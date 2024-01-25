import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-module-section',
  templateUrl: './module-section.component.html',
  styleUrls: ['./module-section.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })), 
      transition(':enter, :leave', [animate('0.9s')]),
    ]),
  ],
})
export class ModuleSectionComponent {
  @ViewChild('scrollContent') scrollContent!: ElementRef;
  @ViewChild('contentOne') contentOne!: ElementRef;
  @ViewChild('contentTwo') contentTwo!: ElementRef;
  @ViewChild('contentThree') contentThree!: ElementRef;

  private isScrollContentInViewport = false;
  private isContentOneInViewport = false;
  private isContentTwoInViewport = false;
  private isContentThreeInViewport = false;
  imageNumber = 1;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.checkScrollContentPosition();
  }

  checkScrollContentPosition() {
    this.isScrollContentInViewport = this.isElementInViewport(
      this.scrollContent.nativeElement
    );

    if (this.isScrollContentInViewport) {
      this.checkContentPosition();
    }
  }

  checkContentPosition() {
    this.isContentOneInViewport = this.isElementInViewport(
      this.contentOne.nativeElement
    );
    this.isContentTwoInViewport = this.isElementInViewport(
      this.contentTwo.nativeElement
    );
    this.isContentThreeInViewport = this.isElementInViewport(
      this.contentThree.nativeElement
    );

    if (this.isContentOneInViewport) {
      console.log('Content One is in the viewport');
      this.imageNumber = 1;
    } else if (this.isContentTwoInViewport) {
      console.log('Content Two is in the viewport');
      this.imageNumber = 2;
    } else if (this.isContentThreeInViewport) {
      console.log('Content Three is in the viewport');
      this.imageNumber = 3;
    }
  }

  isElementInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }
}
