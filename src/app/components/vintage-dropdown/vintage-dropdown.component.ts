import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'vintage-dropdown',
  templateUrl: './vintage-dropdown.component.html',
  styleUrls: ['./vintage-dropdown.component.scss']
})
export class VintageDropdownComponent implements OnInit {

  @Input() public searchForm: FormGroup;
  @Input() vintages: any;

  constructor() { }

  ngOnInit() {
  }

}
