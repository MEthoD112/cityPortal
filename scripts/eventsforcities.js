class EventsForCities {
    constructor() {
        this.wrapper = document.getElementById('wrapper');
        this.saveNewCity = document.getElementById('save-new-city');
        this.modalCity = document.getElementById('modal-city');
        this.saveNewButton = document.getElementById('add-new-city-button');

        // Add new City
        this.saveNewCity.addEventListener('click', (event) => {
            const modalLabel = document.getElementById('myModalLabel').innerHTML;
            if (modalLabel === constants.addCity) {
                this.saveNewCity.setAttribute('data-dismiss', 'modal');
                const city = this.getInfoFromModal();

                if (!this.validateCity(city)) {
                    this.saveNewCity.removeAttribute('data-dismiss');
                    alert('Please, insert the name of the city');
                    return;
                }
                app.cities.push(city);
                localStorage.setItem('cities', JSON.stringify(app.cities));

                app.clearDisplay();
                app.displayCities();
            }
        });

        // Open new city modal window
        this.saveNewButton.addEventListener('click', (event) => {
            document.getElementById('myModalLabel').innerHTML = constants.addCity;
            document.getElementById('addnewcity').value = '';
            let isIndustrial = document.getElementById('i');
            let isCriminal = document.getElementById('c');
            let isPolluted = document.getElementById('p');
            isIndustrial.setAttribute('data-act', 'true');
            isIndustrial.style.background = constants.activeColor;
            isCriminal.setAttribute('data-act', 'false');
            isCriminal.style.background = constants.noActiveColor;
            isPolluted.setAttribute('data-act', 'false');
            isPolluted.style.background = constants.noActiveColor;
        });

        // Toogle buttons in new city modal window
        this.modalCity.addEventListener('click', (event) => {
            const id = event.target.id;
            if (id === 'c' || id === 'p' || id === 'i') {
                this.toogleColor(event.target);
            }
        });

        // Toogle buttons in main menu
        this.wrapper.addEventListener('click', (event) => {
            if (event.target.className === 'attributes') {
                const id = event.target.getAttribute('data-id');
                const attr = event.target.id.charAt(0);
                let index;

                app.cities.forEach((item, i) => {
                    if (item.id === +id) {
                        index = i;
                    }
                });

                if (attr === 'i') {
                    app.cities[index].isIndustrial = !app.cities[index].isIndustrial;
                } else if (attr === 'c') {
                    app.cities[index].isCriminal = !app.cities[index].isCriminal;
                } else {
                    app.cities[index].isPolluted = !app.cities[index].isPolluted;
                };

                localStorage.setItem('cities', JSON.stringify(app.cities));

                this.toogleColor(event.target);
            }
        });

        // Delete city
        this.wrapper.addEventListener('click', (event) => {
            if (event.target.className === 'delete-city') {
                const id = event.target.getAttribute('data-id');
                let index;

                app.cities.forEach((item, i) => {
                    if (item.id === +id) {
                        index = i;
                    }
                });

                app.cities.splice(index, 1);
                localStorage.setItem('cities', JSON.stringify(app.cities));
                app.clearDisplay();
                app.displayCities();
            }
        });

        // Open modal window for edditing city
        this.wrapper.addEventListener('click', (event) => {
            if (event.target.className === 'edit-city') {
                document.getElementById('myModalLabel').innerHTML = constants.editCity;
                const id = event.target.getAttribute('data-id');

                app.cities.forEach((item, i) => {
                    if (item.id === +id) {
                        this.index = i;
                    }
                });

                document.getElementById('addnewcity').value = app.cities[this.index].name;
                document.getElementById('i').setAttribute('data-act', app.cities[this.index].isIndustrial);
                document.getElementById('c').setAttribute('data-act', app.cities[this.index].isCriminal);
                document.getElementById('p').setAttribute('data-act', app.cities[this.index].isPolluted);

                this.detectColor(document.getElementById('i'));
                this.detectColor(document.getElementById('c'));
                this.detectColor(document.getElementById('p'));
            }
        });

        // Save eddited city
        this.saveNewCity.addEventListener('click', (event) => {
            const modalLabel = document.getElementById('myModalLabel').innerHTML;
            if (modalLabel === constants.editCity) {
                this.saveNewCity.setAttribute('data-dismiss', 'modal');
                const city = this.getInfoFromModal();

                if (!this.validateCity(city)) {
                    this.saveNewCity.removeAttribute('data-dismiss');
                    alert('Please, insert the name of the city');
                    return;
                }

                city.cityAreas = app.cities[this.index].cityAreas;
                city.id = app.cities[this.index].id;
                app.cities.splice(this.index, 1, city);
                localStorage.setItem('cities', JSON.stringify(app.cities));

                app.clearDisplay();
                app.displayCities();
            }
        });
    }
    detectColor(item) {
        if (item.getAttribute('data-act') === 'true') {
            item.style.background = constants.activeColor;
        } else {
            item.style.background = constants.noActiveColor;
        }
    }

    getInfoFromModal() {
        let cityName = document.getElementById('addnewcity').value;
        cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

        let isIndustrial = document.getElementById('i').getAttribute('data-act');
        let isCriminal = document.getElementById('c').getAttribute('data-act');
        let isPolluted = document.getElementById('p').getAttribute('data-act');

        isIndustrial = isIndustrial === 'true' ? true : false;
        isCriminal = isCriminal === 'true' ? true : false;
        isPolluted = isPolluted === 'true' ? true : false;

        let id;

        if (app.cities.length === 0) {
            id = 0;
        } else {
            id = app.cities[app.cities.length - 1].id + 1;
        }
        const city = {
            id: id,
            name: cityName,
            isIndustrial: isIndustrial,
            isCriminal: isCriminal,
            isPolluted: isPolluted,
            cityAreas: []
        };

        return city;
    }

    validateCity(city) {
        if (city.name === '') {
            return false;
        }
        if (city.name.length > 100) {
            city.name = city.name.slice(0, 100);
        }
        return true;
    }

    toogleColor(target) {
        if (target.getAttribute('data-act') === 'true') {
            target.style.background = constants.noActiveColor;
            target.setAttribute('data-act', 'false');
        } else {
            target.style.background = constants.activeColor;
            target.setAttribute('data-act', 'true');
        }
    }
}
