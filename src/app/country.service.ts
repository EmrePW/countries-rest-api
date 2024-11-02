import { Injectable } from '@angular/core';
import { Country } from './country';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countries = new BehaviorSubject<Country[] | undefined>(undefined);
  url: string = 'http://localhost:3000/countries';

  constructor(private http: HttpClient) {
    this.http.get<Country[]>(this.url).subscribe((subscriber) => {
      this.countries.next(subscriber);
    });
  }

  getCountryByCCode(ccode: string): Country | undefined {
    return (
      this.countries.value?.find((cntry) => cntry.alpha3Code == ccode) ??
      undefined
    );
  }
}
