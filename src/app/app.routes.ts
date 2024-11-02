import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountryComponent } from './country-list/country/country.component';
import { CountryListComponent } from './country-list/country-list.component';

export const routes: Routes = [
  {
    path: '',
    component: CountryListComponent,
    title: `Countries`,
  },
  {
    path: ':ccode',
    component: CountryComponent,
    title: 'Country Details',
  },
];
