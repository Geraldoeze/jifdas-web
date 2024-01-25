import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent {
  navItems = [
    { path: '/home', label: 'Home' },
    { path: '/about-us', label: 'Who are we?' },
    { path: '/capabilities', label: 'What do we do?' },
    { path: '/join-us', label: 'Join Us' },
  ];

  showList: boolean = false;

  onShowList = () => {
    this.showList = !this.showList;
  };

  closeShowList = () => {
    this.showList = false;
  };
}
