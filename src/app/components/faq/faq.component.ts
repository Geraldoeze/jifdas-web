import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  showContent: boolean = false;
  openItemId: number | null = null;
  faqItems = [
    {
      question: 'Can I share URL on my social media pages?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore ratione error, repellendus consequatur, quos distinctio atque exercitationem alias fuga velit accusantium! Laudantium repellendus minima dolorum quidem? Veniam, alias nesciunt!',
    },
    {
      question: 'Can I share URL on my IG media pages?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore ratione error, repellendus consequatur, quos distinctio atque exercitationem alias fuga velit accusantium! Laudantium repellendus minima dolorum quidem? Veniam, alias nesciunt!',
    },
    {
      question: 'Can I share URL on my Facebook media pages?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore ratione error, repellendus consequatur, quos distinctio atque exercitationem alias fuga velit accusantium! Laudantium repellendus minima dolorum quidem? Veniam, alias nesciunt!',
    },
    {
      question: 'Can I share URL on my IG media pages?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore ratione error, repellendus consequatur, quos distinctio atque exercitationem alias fuga velit accusantium! Laudantium repellendus minima dolorum quidem? Veniam, alias nesciunt!',
    },
    {
      question: 'Can I share URL on my Facebook media pages?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore ratione error, repellendus consequatur, quos distinctio atque exercitationem alias fuga velit accusantium! Laudantium repellendus minima dolorum quidem? Veniam, alias nesciunt!',
    },
    {
      question: 'Can I share URL on my IG media pages?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore ratione error, repellendus consequatur, quos distinctio atque exercitationem alias fuga velit accusantium! Laudantium repellendus minima dolorum quidem? Veniam, alias nesciunt!',
    },
    {
      question: 'Can I share URL on my Facebook media pages?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore ratione error, repellendus consequatur, quos distinctio atque exercitationem alias fuga velit accusantium! Laudantium repellendus minima dolorum quidem? Veniam, alias nesciunt!',
    },
  ];

  toggleContent(index: number): void {
    this.openItemId = this.openItemId === index ? null : index;
  }
}
