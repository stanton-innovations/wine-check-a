import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-region-dropdown',
  templateUrl: './region-dropdown.component.html',
  styleUrls: ['./region-dropdown.component.scss']
})
export class RegionDropdownComponent implements OnInit {

  @Input() searchForm: FormGroup;
  @Input() regions: any;

  constructor() { }

  ngOnInit() {
  }

}
