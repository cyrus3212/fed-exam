import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isShowMenu = false;

  showMenu() {
    this.isShowMenu = true;
  }

  closeMenu() {
    this.isShowMenu = false;
  }

}
