import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupName, FormControl } from '@angular/forms';

@Component({
  selector: 'varietal-dropdown',
  templateUrl: './varietal-dropdown.component.html',
  styleUrls: ['./varietal-dropdown.component.scss']
})
export class VarietalDropdownComponent implements OnInit {


  @Input() varietals: any;

  constructor() {}

  ngOnInit() {
  }
}
