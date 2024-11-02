import { Component } from '@angular/core';
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
  countries: Country[] = [];
  constructor(private countryService: CountryService) {
    this.countries = this.countryService.countries.value ?? [];
  }
}
