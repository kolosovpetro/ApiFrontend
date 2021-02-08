import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-get-movie-by-id',
  templateUrl: './get-movie-by-id.component.html',
  styleUrls: ['./get-movie-by-id.component.css']
})
export class GetMovieByIdComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
