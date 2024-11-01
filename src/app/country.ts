import { Currency } from './currency';
import { Language } from './language';
import { RegionalBloc } from './regional-bloc';

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numbericCode: string;
  flags: object;
  currencies: Currency[];
  languages: Language[];
  translations: object;
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
}
