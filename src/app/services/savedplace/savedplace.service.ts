import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Observable} from 'rxjs';
import { City } from 'src/app/models/city.model';
import {ReplaySubject} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class SavedplaceService {

  city: City[]=[];
  saveval:boolean;
  mestokdetailu:City;


  private privateServiceSubject = new ReplaySubject<City[]>(1);

  constructor(
    private storage:StorageService,
  ) { 

    this.init();

  }

  public UlozMesto(town:City){
    this.mestokdetailu = town;
  }

  pridejcity(mesto:Observable <City>,callBack){

    this.privateServiceSubject.next(this.city);
    mesto.subscribe((result) => {
      let town:City [];
      this.city.unshift(result);
      this.storage.saveData("cities",this.city);
      this.privateServiceSubject = new ReplaySubject<City[]>(1);
      this.privateServiceSubject.next(this.city);
      callBack();
      });
      
  }

  
  public valuebool(v : boolean) {
    this.saveval = v;
  }

  get UlozeneMesto$(){
    return this.mestokdetailu;
  }

  get valuebool$(){
    return this.saveval;
  }
  
  odeber(town:City){
    console.log(this.city);
    this.city.splice(this.city.indexOf(town),1);
     this.storage.saveData("cities",this.city);

  }
  async init() {
    this.city = await this.storage.getData("cities");
    if (!this.city) {
      this.city = [];
    }

    this.privateServiceSubject.next(this.city);
    
  }


  get city$(){

    return this.privateServiceSubject.asObservable();
  }
}
