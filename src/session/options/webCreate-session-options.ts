import { MovieFormat } from "../models/movie_format.emun";
import { Cinema } from "src/cinema/models/cinema.model";
import { WebMovie } from "../models/webMovie.model";

export class WebCreateSessionOptions {
    readonly time: Date;
    readonly price: number;
    readonly places: number;
    readonly movie_format: MovieFormat;
    readonly cinema_name: string;
    readonly movie_name: string;
  }