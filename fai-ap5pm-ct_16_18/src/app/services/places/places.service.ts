import {Injectable} from '@angular/core';


export interface PlaceInfo {
  id:number;
  name: string;
  regex: string;
  namecode: string;
  hint:string
}

@Injectable({
  providedIn: 'root'
})
export class PlacesService {


  

  private privatePlaces: PlaceInfo[] = [
    {
      id :0,
      name: "Andora",
      regex:"CCNNN",
      namecode:"AD",
      hint:"AD100"
    },
    {
      id:1,
      name: "Argentina",
      regex:"NNNN",
      namecode:"AR",
      hint:"1601"
    },
    {
      id:2,
      name: "American Samoa",
      regex:"NNNNN",
      namecode:"AS",
      hint:"96799"
    },
    {
      id:3,
      name: "Austria",
      regex:"NNNN",
      namecode:"AT",
      hint:"1010"
    },
    {
      id:4,
      name: "Australia",
      regex:"NNNN",
      namecode:"AU",
      hint:"0200"
    },
    {
      id:5,
      name: "Bangladesh",
      regex:"NNNN",
      namecode:"BD",
      hint:"1000"
    },
    {
      id:6,
      name: "Belgium",
      regex:"NNNN",
      namecode:"BE",
      hint:"1000"
    },
    {
      id:7,
      name: "Bulgaria",
      regex:"NNNN",
      namecode:"BG",
      hint:"1000"
    },
    {
      id:8,
      name: "Brazil",
      regex:"NNNNN-NNN",
      namecode:"BR",
      hint:"01000-000"
    },
    {
      id:9,
      name: "Canada",
      regex:"SNS",
      namecode:"CA",
      hint:"A0A"
    },
    {
      id:10,
      name: "Switzerland",
      regex:"NNNN",
      namecode:"CH",
      hint:"1000"
    },
    {
      id:11,
      name: "Czech Republic",
      regex:"NNN NN",
      namecode:"CZ",
      hint:"100 00"
    },
    {
      id:12,
      name: "Germany",
      regex:"NNNNN",
      namecode:"DE",
      hint:"01067"
    },
    {
      id:13,
      name: "Denmark",
      regex:"NNNN",
      namecode:"DK",
      hint:"0800"
    },
    {
      id:14,
      name: "Dominican Republic",
      regex:"NNNNN",
      namecode:"DO",
      hint:"10101"
    },
    {
      id:15,
      name: "Spain",
      regex:"NNNNN",
      namecode:"ES",
      hint:"01001"
    },
    {
      id:16,
      name: "Finland",
      regex:"NNNNN",
      namecode:"FI",
      hint:"00001"
    },
    {
      id:17,
      name: "France",
      regex:"NNNNN",
      namecode:"FR",
      hint:"01000"
    },
    {
      id:18,
      name: "United States",
      regex:"NNNNN",
      namecode:"US",
      hint:"00210"
    }
  ];


  get places(): PlaceInfo[] {
    return this.privatePlaces;
  }
}
