import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlacesService, PlaceInfo } from 'src/app/services/places/places.service';
import { ApiService } from '../../services/api/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SavedplaceService } from 'src/app/services/savedplace/savedplace.service';
import { HistoryService } from 'src/app/services/history.service/history.service';
import { DetailPage } from '../detail/detail.page';

@Component({
  selector: 'app-addpsc',
  templateUrl: './addpsc.page.html',
  styleUrls: ['./addpsc.page.scss'],

})
export class AddpscPage implements OnInit {

  indexcity: number;
  regex: string;
  hint: string;
  psc: string;


  places: PlaceInfo[] = [];
  specPSC = new FormGroup({
    psc: new FormControl('', [
      Validators.required,
      Validators.pattern("[~]")
    ])
  });





  constructor(
    private saved: SavedplaceService,
    private apiService: ApiService,
    private modalCtrl: ModalController,
    private placeSer: PlacesService,
    private his: HistoryService
  ) {
    this.places = placeSer.places;
  }

  ngOnInit() {
  }

  async dismiss() {

    this.modalCtrl.dismiss();
  }
  ChangeData() {
    let hodnoty = this.places[this.indexcity].regex;
    this.regex = "";
    for (var i = 0; i < hodnoty.length; i++) {
      if (hodnoty[i] == "N") {
        this.regex += "[0-9]";
      }
      else if (hodnoty[i] == "C") {
        this.regex += "[a-zA-Z]";
      }
      else {
        this.regex += `[${hodnoty[i]}]`;
      }
    }
    this.specPSC = new FormGroup({
      psc: new FormControl('', [
        Validators.required,
        Validators.pattern(this.regex)
      ])
    });
    this.hint = this.places[this.indexcity].hint;
  }



  async save() {
    let x: any;
    if (this.saved.valuebool$ == true) {
      x = this.apiService.getInfoPSC(this.places[this.indexcity].namecode, this.psc);
      x.subscribe(res => {
        this.his.pridej(x);
        this.saved.pridejcity(
          x
          ,
          () => this.modalCtrl.dismiss()
        );
      },
        err => {
          console.log(err);
          alert("Město nenalezeno");
          return;
        })

    } else {


      x = await this.apiService.getInfoPSC(this.places[this.indexcity].namecode, this.psc);


      x.subscribe(async town => {
        this.his.pridej(x);
        await this.saved.UlozMesto(town);

        this.modalCtrl.dismiss();
        const modal = await this.modalCtrl.create({
          component: DetailPage,
        });
        await modal.present();


        await modal.onWillDismiss();

      }, err => {
        console.log(err);
        alert("Město nenalezeno");
      }
      )

    }
    //this.his.pridej(x);

    //await this.delay(8000);


  }
}





