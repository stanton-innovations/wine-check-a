import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'region-dropdown',
  templateUrl: './region-dropdown.component.html',
  styleUrls: ['./region-dropdown.component.scss']
})
export class RegionDropdownComponent implements OnInit {

  @Input() public searchForm: FormGroup;
  @Input() regions: any;

  constructor() {
  }

  ngOnInit() {
  }

}
