import { DetailPage } from '../pages/detail/detail.page';
import { Component } from '@angular/core';
import { Observable} from 'rxjs';
import { City } from '../models/city.model';
import { ModalController } from '@ionic/angular';
import { AddpscPage } from '../pages/addpsc/addpsc.page';
import { SavedplaceService } from '../services/savedplace/savedplace.service';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  city: Observable <City>[] = [];

  constructor(
    private savescity : SavedplaceService,
    private modalCtrl: ModalController
    ) {
      this.ShowData();
  }
  ShowData(){
    this.city=[];

    this.savescity.city$.subscribe(places => {
      console.log(places.length);
      places.forEach(place => {
         this.city.push (new Observable (observer => {
          observer.next(place);}))
      });
    });
  }
 

  async RemoveCity(town:City){
    console.log(town);
    await this.savescity.odeber(town);
    this.ShowData();
  }
  AddCity(savevalue){
    
      this.savescity.valuebool(savevalue);

    
    this.openModal();
  }

  async ShowDetail(town:City){
    console.log(town);
    await this.savescity.UlozMesto(town);
    const modal = await this.modalCtrl.create({
      component: DetailPage,
    });
    await modal.present();

    
    await modal.onWillDismiss();
  }

  
  /**
   * Open Ionic modal
   */
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddpscPage,
    });
    await modal.present();

    
    await modal.onWillDismiss();
    this.ShowData();
  }
}
