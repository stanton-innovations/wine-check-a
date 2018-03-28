import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vintage-dropdown',
  templateUrl: './vintage-dropdown.component.html',
  styleUrls: ['./vintage-dropdown.component.scss']
})
export class VintageDropdownComponent implements OnInit {

  @Input() searchForm: FormGroup;
  @Input() vintages: any;

  constructor() { }

  ngOnInit() {
  }

}
