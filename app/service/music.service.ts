import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { MusicList } from '../models/music.model';
import { ApiUrls } from './api-factory/api-urls';

@Injectable({
  providedIn: 'root',
})
export class MusicListService {
  constructor(private http: HttpClient) {}

  public getMusicList() {
    return this.http
      .get<MusicList>(ApiUrls.GET_MUSIC_LIST)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // if error is client-side error
      errorMessage = `Error: ${err.message}`;
    } else {
      // if error is server-side error
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return throwError(errorMessage);
  }
}
