import { Component } from '@angular/core';
import { VarietalsService } from './services/varietals/varietals.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/switchMap';
import { SearchWineForm } from './interfaces/search-wine.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegionsService } from './services/regions/regions.service';
import { VintagesService } from './services/vintages/vintages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private varietalResults: Subscription;
  private regionResults: Subscription;

  varietals: any;
  regions: any;
  vins: any;
  searchForm: FormGroup;

  constructor(
    public varietalService: VarietalsService,
    public regionService: RegionsService,
    public vintageService: VintagesService,
    public fb: FormBuilder) {

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
        this.regions = regions;
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
        this.vins = vins;
        console.log('vins back', this.vins);
      });  
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      'varietals': ['', Validators.required],
      'regions': ['', Validators.required],
      'vintages': ['', Validators.required]
    })
  }

  ngOnDestroy() {
    if (this.varietalResults) {
      this.varietalResults.unsubscribe();
    }

    if (this.regionResults) {
      this.regionResults.unsubscribe();
    }
 }
}
