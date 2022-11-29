
export interface WCity {
  "place name":string;
  latitude: number;
  longitude: number;
  state:String;
}

export interface  City {
  country: string;
  "post code": string;
  "country abbreviation":string;
  places: WCity[];
}


export interface  CityHistory {
  country: string;
  "post code": string;
  "country abbreviation":string;
}
