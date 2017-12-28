import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-film-addedit',
  templateUrl: './film-addedit.component.html',
  styleUrls: ['./film-addedit.component.css']
})
export class FilmAddeditComponent implements OnInit {
  film: Film;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getCurrentRecord().subscribe( d => this.film = d );
  }

  onFilmSave(formData: NgForm) {
    console.log(formData.value);
  }
}
