import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() drawerClicked: EventEmitter<boolean>;

  constructor() {
    this.drawerClicked = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.drawerClicked.emit();
  }
}
