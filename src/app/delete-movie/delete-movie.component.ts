import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Movies} from '../models/movies';
import {ActivatedRoute, Router} from '@angular/router';
import {DeleteResponse} from '../models/delete-response';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
  id: string;
  currentDto: Movies;
  response: DeleteResponse;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apiService.getMovieById(this.id).subscribe((data: Movies) => {
      this.currentDto = data;
    });
  }

  delete(): void {
    this.apiService.deleteMovie(this.id).toPromise().then(() => {
      this.router.navigateByUrl('get-movies').finally(() => {
        console.log(`Movie ${this.id} deleted successfully`);
      });
    });
  }

}
