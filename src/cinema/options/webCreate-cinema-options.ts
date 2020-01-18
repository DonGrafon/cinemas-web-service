import { WebCity } from "../models/WebCity.model";

export class WebCreateCinemaOptions {
    readonly cinema_name: string;
    readonly amount_of_halls?: number;
    readonly amount_of_places?: number;
    readonly threeD?: boolean;
    readonly adress: string;
    readonly city_name: string;
  }
  