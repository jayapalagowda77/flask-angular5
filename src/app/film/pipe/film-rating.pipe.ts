import { Pipe, PipeTransform } from '@angular/core';
import { Film } from '../film';

@Pipe({
  name: 'filmRating'
})
export class FilmRatingPipe implements PipeTransform {
  transform(value: Film[], args?: string[]): any {
    return args ? value.filter( f => args.indexOf(f.rating) > 0) : value;
  }
}
