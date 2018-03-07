import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupName, FormControl } from '@angular/forms';
import { VarietalsService } from '../services/varietals/varietals.service';
import { SearchWineForm } from '../interfaces/search-wine.interface';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'varietal-dropdown',
  templateUrl: './varietal-dropdown.component.html',
  styleUrls: ['./varietal-dropdown.component.scss']
})
export class VarietalDropdownComponent implements OnInit {

  @Input() searchForm: FormGroup;
  @Input() varietals: any;
  varietal: any;

  constructor(
    public fb: FormBuilder,
    private ref: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('srch', this.searchForm)
    // this.varietals = new FormGroupName(
    // this.searchForm,
    // Validators.required,
    // null)

    // {
    //   varietals: ['', Validators.required]
    // }
  }

  ngOnChanges() {
    this.ref.detectChanges();
  }
}
