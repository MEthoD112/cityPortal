import { initApp } from './initapp';
import { EventsForCities } from './eventsforcities';
import { EventsForAreas } from './eventsforareas';
import { ExampleData } from './data';
import { Search } from './search';

import jQuery from 'jquery';
global.jQuery = jQuery;
global.jquery = jQuery;
global.$ = jQuery;
let Bootstrap = require('bootstrap');

const app = new initApp();
app.displayCities(app.cities);
app.initSearchList(app.cities);
app.initCountriesList(app.cities)
const events = new EventsForCities();
const eventsForAreas = new EventsForAreas();
const exampleData = new ExampleData();
const search = new Search();

export { app, events };