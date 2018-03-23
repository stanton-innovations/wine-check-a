import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';

const VINTAGES_YPOS = '247';

@Injectable()
export class VintagesService {
  private vintageSub: Subscription;
  private vintageUrl: string = 'assets/data/Vintage_Chart_2017.json';

  // private dataStore: {
  //   regions: any
  // }

  public vintages: Array<any>;

  constructor(public http: HttpClient) {
    this.vintages = new Array<any>();
    // this.getUSRegions()
    //   .subscribe(data => this.dataStore.regions = data);
  }

    getVintages() {
      let self = this;
      return this.http.get(this.vintageUrl)
          .map((res: any) => {
            res.document.page.map(function (rows) {
              rows.row.map(function (columns) {
                  columns.column.map(function(data) {
                    if(data.text['@y'] === VINTAGES_YPOS) {
                      self.vintages.push(data.text);
                    }
                  });
              });
          });
          console.log('vintages?', this.vintages);
          return this.vintages;
      });
    }
}

