import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VarietalDropdownComponent } from './components/varietal-dropdown/varietal-dropdown.component';
import { VarietalsService } from './services/varietals/varietals.service';
import { RegionDropdownComponent } from './components/region-dropdown/region-dropdown.component';
import { RegionsService } from './services/regions/regions.service';
import { VintagesService } from './services/vintages/vintages.service';
import { VintageDropdownComponent } from './components/vintage-dropdown/vintage-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    VarietalDropdownComponent,
    RegionDropdownComponent,
    VintageDropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    VarietalsService,
    RegionsService,
    VintagesService,
    FormBuilder
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
