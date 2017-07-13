class initApp {
    constructor() {
        this.cities = JSON.parse(localStorage.getItem('cities')) || [];
        this.wrapper = document.getElementById('wrapper');
        //this.displayCities();
    }

    // Method for rendering everything
    displayCities() {
        this.cities.forEach((item) => {
            let areasNames = [];
            let areas = '';

            const iColor = item.isIndustrial ? constants.activeColor : constants.noActiveColor;
            const cColor = item.isCriminal ? constants.activeColor : constants.noActiveColor;
            const pColor = item.isPolluted ? constants.activeColor : constants.noActiveColor;

            const iActive = item.isIndustrial ? 'true' : 'false';
            const cActive = item.isCriminal ? 'true' : 'false';
            const pActive = item.isPolluted ? 'true' : 'false';

            const iD = item.id;

            item.cityAreas.forEach((item) => {
                areasNames.push(item.name);
                areas += `<div class="areasdown" data-id=${ iD }>
                            <button class="delete-area" data-id=${ item.id }>X</button>
                            <button class="edit-area" data-id=${ item.id } data-target="#areaModal" data-toggle="modal">E</button>
                            <span class="areadown-name">${ item.name }</span>
                            <span class="description">${ item.description }</span>
                            <span class="citizenamount">${ item.citizenAmount + ' people' }</span>
                          </div>`;
            });
            areasNames = areasNames.length < 1 ? 'No Areas' : areasNames.join(', ');

            var string =
                `<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <button class="delete-city" data-id=${ item.id }>X</button>
                            <button class="edit-city" data-id=${ item.id } data-target="#myModal" data-toggle="modal">E</button>
                            
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href=${ '#collapse' + item.id }
                                                                aria-expanded="false" aria-controls=${ 'collapse' + item.id }>
                                ${ item.name }
                            </a>
                            <div class="areas"><span>${ areasNames }</span></div>
                            <div class="marks">
                                <button id="i-button" data-id=${ item.id } style="background:${ iColor }" class="attributes" data-act=${ iActive }>I</button>
                                <button id="c-button" data-id=${ item.id } style="background:${ cColor }" class="attributes" data-act=${ cActive }>C</button>
                                <button id="p-button" data-id=${ item.id } style="background:${ pColor }" class="attributes" data-act=${ pActive }>P</button>
                            </div>    
                        </div>
                    <div id=${ 'collapse' + item.id } class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body">
                            <div class="newarea">
                                <button type="button" class="newareabutton btn btn-primary" id="add-new-area"
                                data-toggle="modal" data-target="#areaModal" data-id=${ item.id }>Add New Area</button>
                            </div>    
                            ${ areas }
                        </div>
                    </div>
                </div>
            </div>`;

            this.wrapper.insertAdjacentHTML('beforeend', string);
        });
    }

    // Method for removing all cities and areas
    clearDisplay() {
        let panels = this.wrapper.getElementsByClassName('panel-group');
        panels = [...panels];
        for (let i = 0; i < panels.length; i++) {
            this.wrapper.removeChild(panels[i]);
        }
    }
}
