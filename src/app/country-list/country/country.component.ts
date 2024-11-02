import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../country.service';
import { Country } from '../../country';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss',
})
export class CountryComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  countryService = inject(CountryService);
  country: Country | undefined;
  constructor() {
    const ccode = this.route.snapshot.params['ccode'];
    this.country = this.countryService.getCountryByCCode(ccode);
  }
  resolveNeighbourName(neigbour: string): string {
    let resolvedName =
      this.countryService.getCountryByCCode(neigbour)?.name ?? '';
    if (resolvedName.length > 12) {
      resolvedName = resolvedName.substring(0, 12) + '...';
    }
    return resolvedName;
  }
  formatPopulation(arg0: number | undefined) {
    return Number(arg0).toLocaleString();
  }
  changeCountry(ccode: string) {
    this.country = this.countryService.getCountryByCCode(ccode);
  }
}
