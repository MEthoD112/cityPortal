class EventsForAreas {
    constructor() {
        this.addNewAreaButton = document.getElementById('add-new-area');
        this.wrapper = document.getElementById('wrapper');
        this.saveArea = document.getElementById('save-area');

        // Open modal window for adding area
        this.wrapper.addEventListener('click', (event) => {
            if (event.target.id === 'add-new-area') {
                document.getElementById('myModalLabelForEdit').innerHTML = constants.addArea;
                document.getElementById('areaname').value = '';
                document.getElementById('areadescription').value = '';
                document.getElementById('areacitizens').value = '';

                const id = event.target.getAttribute('data-id');
                app.cities.forEach((item, i) => {
                    if (item.id === +id) {
                        this.index = i;
                    }
                });
            }
        });

        // Add new area
        this.saveArea.addEventListener('click', (event) => {
            const modalLabel = document.getElementById('myModalLabelForEdit').innerHTML;
            if (modalLabel === constants.addArea) {
                const area = this.getInfoFromModalForArea();
                const arr = app.cities[this.index].cityAreas;
                this.saveArea.setAttribute('data-dismiss', 'modal');

                if (!this.validateArea(area)) {
                    this.saveArea.removeAttribute('data-dismiss');
                    return;
                }

                if (arr.length) {
                    area.id = arr[arr.length - 1].id + 1;
                } else {
                    area.id = 0;
                }

                app.cities[this.index].cityAreas.push(area);
                localStorage.setItem('cities', JSON.stringify(app.cities));
                app.clearDisplay();
                app.displayCities();
            }
        });

        // Delete area
        this.wrapper.addEventListener('click', (event) => {
            if (event.target.className === 'delete-area') {
                const areaId = event.target.getAttribute('data-id');
                const parent = event.target.parentElement;
                const cityId = parent.getAttribute('data-id');
                let indexCity, indexArea;

                app.cities.forEach((item, i) => {
                    if (item.id === +cityId) {
                        indexCity = i;
                    }
                });

                app.cities[indexCity].cityAreas.forEach((item, i) => {
                    if (item.id === +areaId) {
                        indexArea = i;
                    }
                });

                app.cities[indexCity].cityAreas.splice(indexArea, 1);
                localStorage.setItem('cities', JSON.stringify(app.cities));
                app.clearDisplay();
                app.displayCities();
            }
        });

        // Open modal window for editting area
        this.wrapper.addEventListener('click', (event) => {
            if (event.target.className === 'edit-area') {
                document.getElementById('myModalLabelForEdit').innerHTML = constants.editArea;

                const areaId = event.target.getAttribute('data-id');
                const parent = event.target.parentElement;
                const cityId = parent.getAttribute('data-id');

                app.cities.forEach((item, i) => {
                    if (item.id === +cityId) {
                        this.indexCity = i;
                    }
                });

                app.cities[this.indexCity].cityAreas.forEach((item, i) => {
                    if (item.id === +areaId) {
                        this.indexArea = i;
                    }
                });

                const area = app.cities[this.indexCity].cityAreas[this.indexArea];

                document.getElementById('areaname').value = area.name;
                document.getElementById('areadescription').value = area.description;
                document.getElementById('areacitizens').value = area.citizenAmount;
            }
        });

        // Edit area
        this.saveArea.addEventListener('click', (event) => {
            const modalLabel = document.getElementById('myModalLabelForEdit').innerHTML;
            if (modalLabel === constants.editArea) {
                this.saveArea.setAttribute('data-dismiss', 'modal');
                const area = this.getInfoFromModalForArea();

                if (!this.validateArea(area)) {
                    this.saveArea.removeAttribute('data-dismiss');
                    return;
                }
                area.id = app.cities[this.indexCity].cityAreas[this.indexArea].id;
                app.cities[this.indexCity].cityAreas[this.indexArea] = area;

                localStorage.setItem('cities', JSON.stringify(app.cities));
                app.clearDisplay();
                app.displayCities();
            }
        });
    }

    getInfoFromModalForArea() {
        let areaName = document.getElementById('areaname').value;
        areaName = areaName.charAt(0).toUpperCase() + areaName.slice(1);
        let description = document.getElementById('areadescription').value;
        let citizenAmount = parseInt(document.getElementById('areacitizens').value);

        const area = {
            name: areaName,
            description: description,
            citizenAmount: citizenAmount,
        };

        return area;
    }

    validateArea(area) {
        if (area.name === '' || area.description === '' || area.citizenAmount === '') {
            alert('Please, insert all fields');
            return false;
        }
        if (area.name.length > 100) {
            area.name = area.name.slice(0, 100);
        }
        if (area.description.length > 250) {
            area.description = area.description.slice(0, 250);
        }
        if (!parseInt(area.citizenAmount) || parseInt(area.citizenAmount) < 1) {
            alert('Please, insert correct number of citizens');
            return false;
        }
        return true;
    }
}
