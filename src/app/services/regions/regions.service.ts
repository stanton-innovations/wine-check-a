import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class RegionsService {
  private regionsSub: Subscription;
  private regionsXPos: string = '90';
  private regionsUrl: string = 'assets/data/Vintage_Chart_2017.json';

  public regions: any;

  constructor(public http: HttpClient) {}

  getRegions() {
    return this.http.get(this.regionsUrl)
        .flatMap(x => x.document.page)
        .map((res: any) => {
          let pages = res.document.page;
          // let whatIsThis = pages.flatMap(x => console.log('x?', x))
          console.log(pages, 'func')
        });
  }

}
