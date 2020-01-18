import { Controller, Get, Query, InternalServerErrorException, Param, NotFoundException, Delete, Post, Body, Put } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { SessionService } from './session.service';
import { SearchSessionOptions } from './options/search-session-options';
import { Observable } from 'rxjs';
import { WebSession } from './models/webSession.entity';
import { catchError } from 'rxjs/operators';
import { DeleteResult } from 'typeorm';
import { CreateSessionOptions } from './options/create-session-options';
import { UpdateSessionOptions } from './options/update-session-options';

@ApiTags('sessions')
// @UseInterceptors(LoggingInterceptor)
@Controller('sessions')
export class SessionController {
    constructor(private readonly sessionService: SessionService) {
    }
  
    @Get(':id')
    @ApiOkResponse({ type: WebSession })
    getById(@Param('id') id: number): Observable<WebSession> {
      return this.sessionService.getById(id)
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
      return this.sessionService.delete(id)
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
    create(@Body() options: CreateSessionOptions): Observable<WebSession> {
      return this.sessionService.create(options)
      .pipe(
          catchError(err => {
            throw new InternalServerErrorException(err.response || err);
          }),
        );
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() options: UpdateSessionOptions): Observable<WebSession> {
      return this.sessionService.update(id, options)
        .pipe(
          catchError(err => {
            throw new InternalServerErrorException(err.response || err);
          }),
        );
    }
}