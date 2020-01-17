import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WebCinema } from './models/webCinema.entity';
import { Repository, DeleteResult, Like, LessThanOrEqual } from 'typeorm';
import { Observable, from, of } from 'rxjs';
import { WebCreateCinemaOptions } from './options/webCreate-cinema-options';
import { flatMap } from 'rxjs/operators';
import { WebUpdateCinemaOptions } from './options/webUpdate-cinema-options';
import { SearchCinemaOptions } from './options/search-cinema-options';

export enum SortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

@Injectable()
export class CinemaService {
  constructor(@InjectRepository(WebCinema) private readonly cimRepo: Repository<WebCinema>) {}
  
  create(options: WebCreateCinemaOptions): Observable<WebCinema> {
    return from(this.cimRepo.save(options));
  }

  getById(id: number): Observable<WebCinema> {
    return from(this.cimRepo.findOneOrFail(id, { relations: ['cinemas'] }));
  }

  update(id: number, options: WebUpdateCinemaOptions): Observable<WebCinema> {
    return from(this.cimRepo.update(id, options))
      .pipe(
        flatMap(() => this.getById(id)),
      );
  }

  delete(id: number): Observable<DeleteResult> {
    return from(this.cimRepo.delete(id));
  }

  search(options: SearchCinemaOptions): Observable<WebCinema[]> {
    return from(this.cimRepo.find({
      where: [this.buildSearchOptions(options)],
      order: { id: options.sort || SortType.ASC },
      take: options.limit || 10,
      skip: options.offset || 0,
      relations: ['cinemas'],
    }));
  }

  private buildSearchOptions(opts: SearchCinemaOptions): object {
    const result: any = {};
    if (opts.cinema_name) {
      result.cinema_name = Like(`%${opts.cinema_name}%`);
    }
    if (opts.maxAmount_of_halls) {
      result.amount_of_halls = LessThanOrEqual(opts.maxAmount_of_halls);
    }
    if (opts.maxAmount_of_places) {
      result.amount_of_places = LessThanOrEqual(opts.maxAmount_of_places);
    }
    if (opts.threeD) {
      result.threeD = opts.threeD;
    }
    if (opts.adress) {
      result.adress = Like(`%${opts.adress}%`);
    }
    if (opts.city_name) {
      result.city_name = Like(`%${opts.city_name}%`);
    }
    return result;
  }
}
