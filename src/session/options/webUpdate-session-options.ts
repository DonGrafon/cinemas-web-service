import { Cinema } from "src/cinema/models/cinema.model";
import { WebMovie } from "../models/webMovie.model";

export class WebUpdateSessionOptions {
  price?: number;
  places?: number;
  cinema_name?: Cinema;
  movie_name?: WebMovie;
}