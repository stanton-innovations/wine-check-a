import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'varietal-dropdown',
  templateUrl: './varietal-dropdown.component.html',
  styleUrls: ['./varietal-dropdown.component.scss']
})
export class VarietalDropdownComponent implements OnInit {


  @Input() varietals: any;

  constructor() {
  }

  ngOnInit() {
  }
}
