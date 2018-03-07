import { Component } from '@angular/core';
import { VarietalsService } from './services/varietals/varietals.service';
import { Subscription } from 'rxjs/Subscription';
import { SearchWineForm } from './interfaces/search-wine.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegionsService } from './services/regions/regions.service';

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
  searchForm: FormGroup;

  constructor(
    public varietalService: VarietalsService,
    public fb: FormBuilder,
    public regionService: RegionsService) {

    this.varietalResults = this.varietalService.getTypes()
      .subscribe(data => {
        
        this.varietals = data;
        console.log('var back', this.varietals);
      });

    this.regionResults = this.regionService.getRegions()
      .subscribe(data => {
        
        this.regions = data;
        console.log('reg back', this.regions);
      });  
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      'varietals': ['', Validators.required]
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
