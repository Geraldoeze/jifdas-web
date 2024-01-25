import { Component } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css'],
})
export class ContentsComponent {
  benefit = [
    {
      icon: '/assets/icon1.svg',
      header: 'In-house Development',
      text: 'JIFDAS is an innovative solution developed by the JIC to address our unique challenges and requirements.',
    },
    {
      icon: '/assets/icon3.svg',

      header: 'Aimed at Efficiency and Security',
      text: 'Our main goal with JIFDAS si to improve efficiency in data collation and classification, and to enhance the security of sensitive intelligence information.',
    },
    {
      icon: '/assets/icon4.svg',

      header: 'Eliminating External Dependence ',
      text: 'By implementing JIFDAS, we significantly reduce our reliance on third-party applications, thereby protecting our sensitive data and operations',
    },

    {
      icon: '/assets/icon2.svg',

      header: 'Streaming Intelligence Collaboration',
      text: 'JIFDAS resolves challenges associated with the interaction of closely related platforms for intelligence sharing thereby simplifying workflows and facilitating better collaboration within the agency.',
    },
  ];
}
