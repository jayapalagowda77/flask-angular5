import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './country';

@Pipe({
  name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {
  transform(value: Country[], args: string): Country[] {
    return args ?
      value.filter(c => c.country.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) !== -1)
      : value;
  }
}
