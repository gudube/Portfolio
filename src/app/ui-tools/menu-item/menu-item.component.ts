import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() public readonly imgSrc: string;

  @Input() public readonly title: string;

  @Input() public readonly route: string;

  constructor() { }

  ngOnInit(): void {
  }

}
