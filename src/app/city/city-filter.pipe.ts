import { Pipe, PipeTransform } from '@angular/core';
import { City } from './city';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {
  transform(value: City[], args: string): City[] {
    return args ?
    value.filter(c => c.city.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) !== -1)
    : value;
  }
}
