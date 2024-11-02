import { Component, ElementRef, ViewChild } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryListComponent {
  countries: Country[] | undefined = [];
  @ViewChild('search_box') input: ElementRef | undefined;
  constructor(private countryService: CountryService) {
    this.countries = this.countryService.countries.value ?? [];
  }
  searchCountry() {
    let search_term = this.input?.nativeElement.value ?? '';
    let filteredCountries: Country[] | undefined = [];
    filteredCountries = this.countryService.countries.value?.filter((prd) =>
      prd.name.includes(search_term)
    );
    this.countries = filteredCountries;
  }
}
