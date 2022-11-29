import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityHistory,City } from 'src/app/models/city.model';
import { StorageService } from '../storage/storage.service';
@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  his:CityHistory[] = [];
  constructor(
    private storage: StorageService
  ) { 
    this.init();
   
  }
  async init() {
    this.his = await this.storage.getData("history"); 
    if(!this.his){
      this.his = [];
    }
  }

  get history$(){
    
    return this.storage.getData("history");

  }

  async pridej(town:Observable<City>){
    town.subscribe((result) => {
      let x : CityHistory={
        country: result.country,
        "country abbreviation":result["country abbreviation"],
        "post code":result["post code"]
      }
      this.his.unshift(x);
      this.storage.saveData("history",this.his);
      });
      
    
  }

  Vymaz(){
    this.his = [];
    this.storage.saveData("history",this.his);
  }
}
