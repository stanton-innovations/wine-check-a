import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SearchWineForm } from '../../interfaces/search-wine.interface';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/map';

@Injectable()
export class VarietalsService {

  public varietalUrl: string = 'assets/data/varietals.json';
  private varietalList: SearchWineForm;

  constructor(public http: HttpClient) {}

  getTypes() {
    return this.http.get(this.varietalUrl)
        .map((res:Response) => res);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

}
