import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isOpen: boolean;

  @Output() drawerClicked = new EventEmitter<boolean>();

  constructor() {
    this.isOpen = false;
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.isOpen = !this.isOpen;
    this.drawerClicked.emit(this.isOpen);
  }
}
