import { Injectable } from '@nestjs/common';
import { WebSession } from './models/webSession.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, LessThanOrEqual, Like } from 'typeorm';
import { WebCreateSessionOptions } from './options/webCreate-session-options';
import { Observable, from } from 'rxjs';
import { WebUpdateSessionOptions } from './options/webUpdate-session-options';
import { flatMap } from 'rxjs/operators';
import { SearchSessionOptions } from './options/search-session-options';
import { SortType } from 'src/cinema/cinema.service';

@Injectable()
export class SessionService {
    constructor(@InjectRepository(WebSession) private readonly sesRepo: Repository<WebSession>) {}
  
  create(options: WebCreateSessionOptions): Observable<WebSession> {
    return from(this.sesRepo.save(options));
  }

  getById(id: number): Observable<WebSession> {
    return from(this.sesRepo.findOneOrFail(id));
  }

  update(id: number, options: WebUpdateSessionOptions): Observable<WebSession> {
    return from(this.sesRepo.update(id, options))
      .pipe(
        flatMap(() => this.getById(id)),
      );
  }

  delete(id: number): Observable<DeleteResult> {
    return from(this.sesRepo.delete(id));
  }

  search(options: SearchSessionOptions): Observable<WebSession[]> {
    return from(this.sesRepo.find({
      where: [this.buildSearchOptions(options)],
      order: { id: options.sort || SortType.ASC },
      take: options.limit || 10,
      skip: options.offset || 0,
    }));
  }

  private buildSearchOptions(opts: SearchSessionOptions): object {
    const result: any = {};
    if (opts.maxTime) {
        result.time = LessThanOrEqual(opts.maxTime);
    }
    if (opts.maxPrice) {
        result.price = LessThanOrEqual(opts.maxPrice);
    }
    if (opts.maxPlaces) {
        result.places = LessThanOrEqual(opts.maxPlaces);
    }
    if (opts.movie_format) {
        result.movie_format = opts.movie_format;
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
