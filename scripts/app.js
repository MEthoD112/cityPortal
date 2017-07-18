const app = new initApp();
app.displayCities(app.cities);
app.initSearchList(app.cities);
app.initCountriesList(app.cities)
const events = new EventsForCities();
const eventsForAreas = new EventsForAreas();
const exampleData = new ExampleData();
const search = new Search();