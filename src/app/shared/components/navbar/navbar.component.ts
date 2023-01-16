import { Component, OnInit } from '@angular/core';
import {
  faBars,
  faSearch,
  faStar,
  faComment,
  faBank,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faBars = faBars;

  faSearch = faSearch;

  faStar = faStar;

  faComment = faComment;

  faBank = faBank;

  constructor() {}

  ngOnInit(): void {}
}
