import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  @Input() show: boolean;

  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

}
