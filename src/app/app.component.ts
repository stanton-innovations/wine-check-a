import { Component, ViewChild, ElementRef, AfterViewInit, HostBinding } from '@angular/core';
import { VarietalsService } from './services/varietals/varietals.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/switchMap';
import { SearchWineForm } from './interfaces/search-wine.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegionsService } from './services/regions/regions.service';
import { VintagesService } from './services/vintages/vintages.service';

import { OwlCarousel }  from 'ngx-owl-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private varietalResults: Subscription;
  private regionResults: Subscription;
  private vintageResults: Subscription;

  @ViewChild('owlCarousel') owlElement: OwlCarousel
  
  varietals: any;
  regions: Array<string>;
  vintages: Array<string>;
  searchForm: FormGroup;
  images: any = ['1', '2', '3', '4', '5'];

  constructor(
    public varietalService: VarietalsService,
    public regionService: RegionsService,
    public vintageService: VintagesService,
    public fb: FormBuilder) {

    this.vintages = new Array<string>();
    this.regions = new Array<string>();

    this.varietalResults = this.varietalService
      .getTypes()
      .subscribe(data => {
        this.varietals = data;
      });


    this.regionService.getUSRegions()
      .switchMap((regions: any) => {
        return regions; 
      })
      .filter((regions) => regions['#text'] !== 'Region')
      .distinct(function(x) {
        return x['#text'];
      })
      .subscribe(regions => {
        this.regions.push(regions['#text']);
      });


    this.vintageService.getVintages()
      .switchMap((vins: any) => {
        return vins; 
      })
      .filter((vins) => vins['#text'] !== '2006')
      .distinct(function(x) {
        return x['#text'];
      })
      .subscribe(vins => {
        this.vintages.push(vins['#text']);
      });  
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      'varietals': ['', Validators.required],
      'regions': ['', Validators.required],
      'vintages': ['', Validators.required]
    });
  }

  ngOnDestroy() {
    if (this.varietalResults) {
      this.varietalResults.unsubscribe();
    }

    if (this.regionResults) {
      this.regionResults.unsubscribe();
    }

    if (this.vintageResults) {
      this.vintageResults.unsubscribe();
    }
 }

 initOwl() {
  console.log('owl', this.owlElement);
  // console.log('owl jq', $('.owl-carousel'));
  this.owlElement.$owlChild.$owl.owlCarousel({});
 }

 ngAfterViewInit() {
   this.initOwl();
 }
}
