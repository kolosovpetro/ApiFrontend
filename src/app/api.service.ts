import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movies} from './models/movies';
import {PostMovieDto} from './dto/post-movie-dto';
import {IPostResponse} from './models/post-response';
import {DeleteResponse} from './models/delete-response';
import {PatchMovieDto} from './dto/patch-movie-dto';
import {PatchResponse} from './models/patch-response';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://cqrs-movies-api.herokuapp.com/api/movies';

  constructor(private httpClient: HttpClient) {
  }

  getMoviesList(): Observable<Movies[]> {
    return this.httpClient.get<Movies[]>(this.apiUrl);
  }

  getMovieById(id: string): Observable<Movies> {
    return this.httpClient.get<Movies>(`${this.apiUrl}/${id}`);
  }

  postMovie(dto: PostMovieDto): Observable<IPostResponse> {
    return this.httpClient.post<IPostResponse>(this.apiUrl, dto);
  }

  deleteMovie(id: string): Observable<DeleteResponse> {
    return this.httpClient.delete<DeleteResponse>(`${this.apiUrl}/${id}`);
  }

  patchMovie(dto: PatchMovieDto): Observable<PatchResponse> {
    return this.httpClient.patch<PatchResponse>(this.apiUrl, dto);
  }
}
