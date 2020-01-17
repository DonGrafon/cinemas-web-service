import { Controller, HttpService, Body, Post, InternalServerErrorException, Get, Param, Query, NotFoundException, Delete, Put } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { CreateCinemaOptions } from './options/create-cinema-options';
import { Observable, zip, of } from 'rxjs';
import { catchError, flatMap, map, first } from 'rxjs/operators';
import { WebCinema } from './models/webCinema.entity';
import { SearchCinemaOptions } from './options/search-cinema-options';
import { ApiOkResponse } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { UpdateCinemaOptions } from './options/update-cinema-options';

@Controller('cinema')
export class CinemaController {

  constructor(private readonly cinemaService: CinemaService,
              private readonly httpService: HttpService) {
  }

  @Get()
  search(@Query() searchOptions: SearchCinemaOptions): Observable<WebCinema[]> {
    return this.cinemaService.search(searchOptions)
      .pipe(
        catchError(err => {
          throw new InternalServerErrorException(err.response || err);
        }),
      );
  }

  @Get(':id')
  @ApiOkResponse({ type: WebCinema })
  getById(@Param('id') id: number): Observable<WebCinema> {
    return this.cinemaService.getById(id)
      .pipe(
        catchError(err => {
          if (err.name === 'EntityNotFound') {
            throw new NotFoundException(err.message);
          }
          throw new InternalServerErrorException(err.response || err);
        }),
      );
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.cinemaService.delete(id)
      .pipe(
        catchError(err => {
          if (err.name === 'EntityNotFound') {
            throw new NotFoundException(err.message);
          }
          throw new InternalServerErrorException(err.response || err);
        }),
      );
  }

  @Post()
  create(@Body() options: CreateCinemaOptions): Observable<WebCinema> {
    return this.cinemaService.create(options)
    .pipe(
        catchError(err => {
          throw new InternalServerErrorException(err.response || err);
        }),
      );
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() options: UpdateCinemaOptions): Observable<WebCinema> {
    return this.cinemaService.update(id, options)
      .pipe(
        catchError(err => {
          throw new InternalServerErrorException(err.response || err);
        }),
      );
  }
}