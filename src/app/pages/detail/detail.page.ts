import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { City } from 'src/app/models/city.model';
import { SavedplaceService } from 'src/app/services/savedplace/savedplace.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  mesto:City;
  constructor(
    private savedplace: SavedplaceService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.mesto = this.savedplace.UlozeneMesto$;

  }

  dismiss() {

    this.modalCtrl.dismiss();
  }

}
