import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DealersService {

  constructor(private http: HttpClient) {
    
  }

  getDealers(): Observable<any> {
      return this.http.get("assets/mock/dealers.json")
  }

}
