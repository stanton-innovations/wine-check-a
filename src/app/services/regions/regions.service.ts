import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import { Region } from '../../classes/search-wine.class';

const US_REGIONS_XPOS = '90';

@Injectable()
export class RegionsService {
  private regionsSub: Subscription;
  private regionsUrl: string = 'assets/data/Vintage_Chart_2017.json';

  public regions: Array<any>;

  constructor(public http: HttpClient) {
    this.regions = new Array<any>();
  }

  getUSRegions() {
    let self = this;
    return this.http.get(this.regionsUrl)
        .map((res: any) => {
          res.document.page.map(function (rows) {
            rows.row.map(function (columns) {
                columns.column.map(function(data) {
                  if(data.text['@x'] === US_REGIONS_XPOS) {
                    self.regions.push(data.text);
                  }
                });
            });
        });
        
        return this.regions;
    });
  }
}
