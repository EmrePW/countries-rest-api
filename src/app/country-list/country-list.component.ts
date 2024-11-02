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
  @ViewChild('dropdown') dropdown: ElementRef | undefined;
  constructor(private countryService: CountryService) {
    this.countries = this.countryService.countries.value ?? [];
  }
  searchCountry() {
    let search_term: string = this.input?.nativeElement.value ?? '';
    let filteredCountries: Country[] | undefined = [];
    filteredCountries = this.countryService.countries.value?.filter((prd) =>
      prd.name.toLowerCase().includes(search_term.toLowerCase())
    );
    this.countries = filteredCountries;
  }
  showDropdown() {
    const arrow = document.querySelector('.fa-angle-down');
    const menu = document.querySelector('.dropdown-menu');
    if (menu?.classList.contains('hidden')) {
      arrow?.classList.add('dropdown-active');
      menu?.classList.remove('hidden');
      return;
    }
    arrow?.classList.remove('dropdown-active');
    menu?.classList.add('hidden');
  }
  dropdownFilter(region: string) {
    let filteredCountries: Country[] | undefined = [];
    filteredCountries = this.countryService.countries.value?.filter(
      (prd) => prd.region == region
    );
    this.countries = filteredCountries;
  }
}
