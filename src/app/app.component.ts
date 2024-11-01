import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryService } from './country.service';
import { Country } from './country';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'countries-rest-api';
  countries: Country[] = [];
  constructor(private countryService: CountryService) {
    this.countries = this.countryService.countries.value ?? [];
  }
}
