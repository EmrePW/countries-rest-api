import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryService } from './country.service';
import { Country } from './country';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CountryListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'countries-rest-api';

  darkModeActive: boolean = true;
  constructor(private countryService: CountryService) {}
}
