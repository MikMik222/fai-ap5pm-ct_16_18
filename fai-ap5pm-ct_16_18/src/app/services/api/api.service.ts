import {Injectable, ɵbypassSanitizationTrustResourceUrl} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  getInfoPSC(name: string, psc: string): Observable<City> {
    
    const url = environment.api.baseURL + `${name}/${psc}`;
    let x:Observable<City> = this.http.get<City>(url);
    //let t = this.http.get(url);
    return x;
  }
}
