import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movies} from './models/movies';
import {PostMovieDto} from './dto/post-movie-dto';

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

  postMovie(dto: PostMovieDto): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, dto);
  }
}
