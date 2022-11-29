import { Component } from '@angular/core';
import { SavedplaceService } from '../services/savedplace/savedplace.service';
import { City, CityHistory } from '../models/city.model';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api/api.service';
import { HistoryService } from '../services/history.service/history.service';
import { ModalController } from '@ionic/angular';
import { DetailPage } from '../pages/detail/detail.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  histo: Observable<CityHistory>[] = [];
  constructor(
    private historser: HistoryService,
    private saved: SavedplaceService,
    private api: ApiService,
    private modalCtrl: ModalController
  ) {
      }

  ionViewWillEnter() {
    // ...
    this.ShowData();

    console.log("aaa");
  }

  async ShowData() {
    this.histo = [];
    let x = this.historser.history$;
    await x.then(data =>{
      this.histo = data;
      console.log(this.histo);}
    );
  }

  async ShowAgain(mesto) {
    let x: Observable<City>;
    x = await this.api.getInfoPSC(mesto["country abbreviation"], mesto["post code"]);
    x.subscribe(async (result) => {
      await this.saved.UlozMesto(result);
      const modal = await this.modalCtrl.create({
        component: DetailPage,
      });
      await modal.present();


      await modal.onWillDismiss();
    }
    )
  }



  Clear() {
    this.histo = [];
    this.historser.Vymaz();
  }
}
