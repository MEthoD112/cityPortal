/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.events = exports.app = undefined;

var _initapp = __webpack_require__(4);

var _eventsforcities = __webpack_require__(3);

var _eventsforareas = __webpack_require__(2);

var _data = __webpack_require__(1);

var _search = __webpack_require__(5);

var app = new _initapp.initApp();
app.displayCities(app.cities);
app.initSearchList(app.cities);
app.initCountriesList(app.cities);
var events = new _eventsforcities.EventsForCities();
var eventsForAreas = new _eventsforareas.EventsForAreas();
var exampleData = new _data.ExampleData();
var search = new _search.Search();

exports.app = app;
exports.events = events;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExampleData = undefined;

var _app = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExampleData = exports.ExampleData = function ExampleData() {
    _classCallCheck(this, ExampleData);

    var json = [{
        'id': 0,
        'country': 'Belarus',
        'name': 'Minsk',
        'isIndustrial': true,
        'isCriminal': false,
        'isPolluted': false,
        'cityAreas': [{
            id: 0,
            name: 'Serebryanka',
            description: 'The best place in the world',
            citizenAmount: 300000
        }, {
            id: 1,
            name: 'Chigovka',
            description: 'The worst place in the world',
            citizenAmount: 200000
        }]
    }, {
        'id': 1,
        'country': 'USA',
        'name': 'New York',
        'isIndustrial': true,
        'isCriminal': true,
        'isPolluted': true,
        'cityAreas': [{
            id: 0,
            name: 'Bronx',
            description: 'The worst place in the New York',
            citizenAmount: 450000
        }, {
            id: 1,
            name: 'Brooklyn',
            description: 'The best place in the New York',
            citizenAmount: 350000
        }]
    }, {
        'id': 2,
        'country': 'Japan',
        'name': 'Tokyo',
        'isIndustrial': true,
        'isCriminal': false,
        'isPolluted': true,
        'cityAreas': [{
            id: 0,
            name: 'YakudzaDistrict',
            description: 'The best sushi in this place',
            citizenAmount: 130000
        }, {
            id: 1,
            name: 'Fukusima',
            description: 'Be carefull, it is dirty',
            citizenAmount: 70000
        }]
    }, {
        'id': 3,
        'country': 'Russia',
        'name': 'Varkuta',
        'isIndustrial': false,
        'isCriminal': true,
        'isPolluted': true,
        'cityAreas': []
    }, {
        'id': 4,
        'country': 'Russia',
        'name': 'Moscow',
        'isIndustrial': true,
        'isCriminal': true,
        'isPolluted': true,
        'cityAreas': [{
            id: 0,
            name: 'Ximki',
            description: 'Far away from Kremlin',
            citizenAmount: 190000
        }, {
            id: 1,
            name: 'Zamoskvorech\'e',
            description: 'The center of the city',
            citizenAmount: 770000
        }]
    }, {
        'id': 5,
        'country': 'USA',
        'name': 'Los Angeles',
        'isIndustrial': true,
        'isCriminal': true,
        'isPolluted': true,
        'cityAreas': [{
            id: 0,
            name: 'Hollywood',
            description: 'Here people make movies',
            citizenAmount: 120000
        }, {
            id: 1,
            name: 'Beach District',
            description: 'Here you can have a rest',
            citizenAmount: 790000
        }]
    }, {
        'id': 6,
        'country': 'Russia',
        'name': 'Ekaterenburg',
        'isIndustrial': true,
        'isCriminal': true,
        'isPolluted': true,
        'cityAreas': [{
            id: 0,
            name: 'XimMash',
            description: 'A lot of plants here',
            citizenAmount: 120000
        }, {
            id: 1,
            name: 'Center',
            description: 'Here you can have a rest',
            citizenAmount: 790000
        }]
    }, {
        'id': 7,
        'country': 'Germany',
        'name': 'Berlin',
        'isIndustrial': true,
        'isCriminal': true,
        'isPolluted': true,
        'cityAreas': [{
            id: 0,
            name: 'SchtirlitzPlatz',
            description: 'Do not think about the seconds from height',
            citizenAmount: 670000
        }, {
            id: 1,
            name: 'Damschtrasse',
            description: 'Here you can attend interesting places',
            citizenAmount: 867000
        }]
    }, {
        'id': 8,
        'country': 'France',
        'name': 'Paris',
        'isIndustrial': true,
        'isCriminal': false,
        'isPolluted': true,
        'cityAreas': [{
            id: 0,
            name: 'District of 13th',
            description: 'Nice frog legs here',
            citizenAmount: 260000
        }, {
            id: 1,
            name: 'Notre dam de paris',
            description: 'Very beatiful church',
            citizenAmount: 912000
        }]
    }, {
        'id': 9,
        'country': 'Urugvay',
        'name': 'Montevideo',
        'isIndustrial': true,
        'isCriminal': false,
        'isPolluted': false,
        'cityAreas': [{
            id: 0,
            name: 'Center of the city',
            description: 'Very nice nature',
            citizenAmount: 460000
        }]
    }];
    this.loadButton = document.getElementById('load-data');
    this.loadButton.addEventListener('click', function () {
        localStorage.setItem('cities', JSON.stringify(json));
        _app.app.clearDisplay();
        _app.app.displayCities(json);
        _app.app.clearSearchList();
        _app.app.initSearchList(json);
    });
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventsForAreas = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(0);

var _constants = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventsForAreas = exports.EventsForAreas = function () {
    function EventsForAreas() {
        var _this = this;

        _classCallCheck(this, EventsForAreas);

        this.addNewAreaButton = document.getElementById('add-new-area');
        this.wrapper = document.getElementById('wrapper');
        this.saveArea = document.getElementById('save-area');
        this.errorEl = document.getElementById('area-error');

        // Open modal window for adding area
        this.wrapper.addEventListener('click', function (event) {
            if (event.target.id === 'add-new-area') {
                var modalLabel = document.getElementById('myModalLabelForEdit');
                modalLabel.innerHTML = _constants.constants.addArea;
                modalLabel.setAttribute('data-mode', 'add');
                _this.errorEl.innerHTML = '';
                document.getElementById('areaname').value = '';
                document.getElementById('areadescription').value = '';
                document.getElementById('areacitizens').value = '';

                _this.element = event.target;
                _this.id = event.target.getAttribute('data-id');

                _app.app.cities.forEach(function (item, i) {
                    if (item.id === +_this.id) {
                        _this.index = i;
                    }
                });
            }
        });

        // Add new area
        this.saveArea.addEventListener('click', function (event) {
            var modalLabel = document.getElementById('myModalLabelForEdit').getAttribute('data-mode');
            if (modalLabel === 'add') {
                var area = _this.getInfoFromModalForArea();
                var arr = _app.app.cities[_this.index].cityAreas;
                _this.saveArea.setAttribute('data-dismiss', 'modal');

                if (!_this.validateArea(area)) {
                    _this.saveArea.removeAttribute('data-dismiss');
                    return;
                }
                area.id = arr.length ? arr[arr.length - 1].id + 1 : 0;
                var areaElement = _this.formArea(area, _this.id);

                var parent = _this.element.parentNode.parentNode;
                parent.insertAdjacentHTML('beforeend', areaElement);

                var areaId = _this.id + 'areas';

                var areasNameElement = document.getElementById(areaId);
                areasNameElement.innerHTML = areasNameElement.innerHTML === _constants.constants.noAreas ? area.name : areasNameElement.innerHTML + ', ' + area.name;

                _app.app.cities[_this.index].cityAreas.push(area);
                localStorage.setItem('cities', JSON.stringify(_app.app.cities));
            }
        });

        // Delete area
        this.wrapper.addEventListener('click', function (event) {
            if (event.target.className === 'delete-area') {
                var areaId = event.target.getAttribute('data-id');
                var parent = event.target.parentNode;
                var parentOfParent = parent.parentNode;
                var cityId = parent.getAttribute('data-id');
                var indexCity = void 0,
                    indexArea = void 0;

                _app.app.cities.forEach(function (item, i) {
                    if (item.id === +cityId) {
                        indexCity = i;
                    }
                });

                _app.app.cities[indexCity].cityAreas.forEach(function (item, i) {
                    if (item.id === +areaId) {
                        indexArea = i;
                    }
                });
                parentOfParent.removeChild(parent);
                _app.app.cities[indexCity].cityAreas.splice(indexArea, 1);

                var id = cityId + 'areas';
                var areasName = document.getElementById(id);

                var areasNames = [];
                _app.app.cities[indexCity].cityAreas.forEach(function (item) {
                    areasNames.push(item.name);
                });
                areasNames = areasNames.length < 1 ? _constants.constants.noAreas : areasNames.join(', ');

                areasName.innerHTML = areasNames;

                localStorage.setItem('cities', JSON.stringify(_app.app.cities));
            }
        });

        // Open modal window for editting area
        this.wrapper.addEventListener('click', function (event) {
            if (event.target.className === 'edit-area') {
                var modalLabel = document.getElementById('myModalLabelForEdit');
                modalLabel.innerHTML = _constants.constants.editArea;
                modalLabel.setAttribute('data-mode', 'edit');
                _this.errorEl.innerHTML = '';

                var areaId = event.target.getAttribute('data-id');
                var parent = event.target.parentElement;
                var cityId = parent.getAttribute('data-id');
                _this.element = event.target;

                _app.app.cities.forEach(function (item, i) {
                    if (item.id === +cityId) {
                        _this.indexCity = i;
                    }
                });

                _app.app.cities[_this.indexCity].cityAreas.forEach(function (item, i) {
                    if (item.id === +areaId) {
                        _this.indexArea = i;
                    }
                });

                var area = _app.app.cities[_this.indexCity].cityAreas[_this.indexArea];

                document.getElementById('areaname').value = area.name;
                document.getElementById('areadescription').value = area.description;
                document.getElementById('areacitizens').value = area.citizenAmount;
            }
        });

        // Edit area
        this.saveArea.addEventListener('click', function (event) {
            var modalLabel = document.getElementById('myModalLabelForEdit').getAttribute('data-mode');
            if (modalLabel === 'edit') {
                _this.saveArea.setAttribute('data-dismiss', 'modal');
                var area = _this.getInfoFromModalForArea();

                if (!_this.validateArea(area)) {
                    _this.saveArea.removeAttribute('data-dismiss');
                    return;
                }
                area.id = _app.app.cities[_this.indexCity].cityAreas[_this.indexArea].id;

                var areaNameEl = _this.element.nextElementSibling;
                var areaDescrEl = areaNameEl.nextElementSibling;
                var areaCitizenEl = areaDescrEl.nextElementSibling;

                areaNameEl.innerHTML = area.name;
                areaDescrEl.innerHTML = area.description;
                areaCitizenEl.innerHTML = area.citizenAmount;

                var id = _app.app.cities[_this.indexCity].id + 'areas';
                var areasName = document.getElementById(id);

                _app.app.cities[_this.indexCity].cityAreas[_this.indexArea] = area;
                var areasNames = [];
                _app.app.cities[_this.indexCity].cityAreas.forEach(function (item) {
                    areasNames.push(item.name);
                });
                areasNames = areasNames.length < 1 ? _constants.constants.noAreas : areasNames.join(', ');

                areasName.innerHTML = areasNames;
                localStorage.setItem('cities', JSON.stringify(_app.app.cities));
            }
        });
    }

    // Get info from modal window for new or eddited area


    _createClass(EventsForAreas, [{
        key: 'getInfoFromModalForArea',
        value: function getInfoFromModalForArea() {
            var areaName = document.getElementById('areaname').value;
            areaName = areaName.charAt(0).toUpperCase() + areaName.slice(1).toLowerCase();
            var description = document.getElementById('areadescription').value;
            var citizenAmount = parseInt(document.getElementById('areacitizens').value);

            var area = {
                name: areaName,
                description: description,
                citizenAmount: citizenAmount
            };

            return area;
        }

        // Validate new or eddited area

    }, {
        key: 'validateArea',
        value: function validateArea(area) {
            if (area.name === '' || area.description === '' || area.citizenAmount === '') {
                this.errorEl.innerHTML = _constants.constants.alertMessageForAreaFields;
                return false;
            }
            if (area.name.length > 100) {
                area.name = area.name.slice(0, 100);
            }
            if (area.description.length > 250) {
                area.description = area.description.slice(0, 250);
            }
            if (!parseInt(area.citizenAmount) || parseInt(area.citizenAmount) < 1) {
                this.errorEl.innerHTML = _constants.constants.alertMessageForAreaCitizens;
                return false;
            }
            return true;
        }

        // Form HTMLElement for new area

    }, {
        key: 'formArea',
        value: function formArea(area, id) {
            var string = '<div class="areasdown" data-id=' + id + '>\n                            <button class="delete-area" data-id=' + area.id + '></button>\n                            <button class="edit-area" data-id=' + area.id + ' data-target="#areaModal" data-toggle="modal"></button>\n                            <span class="areadown-name">' + area.name + '</span>\n                            <span class="description">' + area.description + '</span>\n                            <span class="citizenamount">' + (area.citizenAmount + ' people') + '</span>\n                          </div>';
            return string;
        }
    }]);

    return EventsForAreas;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventsForCities = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(0);

var _constants = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventsForCities = exports.EventsForCities = function () {
    function EventsForCities() {
        var _this = this;

        _classCallCheck(this, EventsForCities);

        this.wrapper = document.getElementById('wrapper');
        this.saveNewCity = document.getElementById('save-new-city');
        this.modalCity = document.getElementById('modal-city');
        this.saveNewButton = document.getElementById('add-new-city-button');
        this.errorEl = document.getElementById('city-error');

        // Add new City
        this.saveNewCity.addEventListener('click', function (event) {
            var modalLabel = document.getElementById('myModalLabel').getAttribute('data-mode');
            if (modalLabel === 'add') {
                _this.saveNewCity.setAttribute('data-dismiss', 'modal');
                var city = _this.getInfoFromModal();

                if (!_this.validateCity(city)) {
                    _this.saveNewCity.removeAttribute('data-dismiss');
                    return;
                }
                _app.app.cities.push(city);
                localStorage.setItem('cities', JSON.stringify(_app.app.cities));

                _app.app.displayCities(city);
                _app.app.clearSearchList();
                _app.app.initSearchList(_app.app.cities);
                _app.app.clearCountriesList();
                _app.app.initCountriesList(_app.app.cities);
            }
        });

        // Open new city modal window
        this.saveNewButton.addEventListener('click', function (event) {
            var modalLabel = document.getElementById('myModalLabel');
            modalLabel.innerHTML = _constants.constants.addCity;
            modalLabel.setAttribute('data-mode', 'add');
            _this.errorEl.innerHTML = '';
            document.getElementById('addnewcity').value = '';
            document.getElementById('addnewcountry').value = '';
            var isIndustrial = document.getElementById('i');
            var isCriminal = document.getElementById('c');
            var isPolluted = document.getElementById('p');
            isIndustrial.setAttribute('data-act', 'true');
            isIndustrial.style.background = _constants.constants.activeColor;
            isCriminal.setAttribute('data-act', 'false');
            isCriminal.style.background = _constants.constants.noActiveColor;
            isPolluted.setAttribute('data-act', 'false');
            isPolluted.style.background = _constants.constants.noActiveColor;
        });

        // Toogle buttons in new city modal window
        this.modalCity.addEventListener('click', function (event) {
            var id = event.target.id;
            if (id === 'c' || id === 'p' || id === 'i') {
                _this.toogleColor(event.target);
            }
        });

        // Toogle buttons in main menu
        this.wrapper.addEventListener('click', function (event) {
            if (event.target.className === 'attributes') {
                var id = event.target.getAttribute('data-id');
                var attr = event.target.id.charAt(0);
                var index = void 0;

                _app.app.cities.forEach(function (item, i) {
                    if (item.id === +id) {
                        index = i;
                    }
                });

                if (attr === 'i') {
                    _app.app.cities[index].isIndustrial = !_app.app.cities[index].isIndustrial;
                } else if (attr === 'c') {
                    _app.app.cities[index].isCriminal = !_app.app.cities[index].isCriminal;
                } else {
                    _app.app.cities[index].isPolluted = !_app.app.cities[index].isPolluted;
                };

                localStorage.setItem('cities', JSON.stringify(_app.app.cities));
                _this.toogleColor(event.target);
            }
        });

        // Delete city
        this.wrapper.addEventListener('click', function (event) {
            if (event.target.className === 'delete-city') {
                var id = event.target.getAttribute('data-id');
                var index = void 0;

                _app.app.cities.forEach(function (item, i) {
                    if (item.id === +id) {
                        index = i;
                    }
                });
                _this.removeCity(event.target);

                _app.app.cities.splice(index, 1);
                localStorage.setItem('cities', JSON.stringify(_app.app.cities));
                _app.app.clearSearchList();
                _app.app.initSearchList(_app.app.cities);
                _app.app.clearCountriesList();
                _app.app.initCountriesList(_app.app.cities);
            }
        });

        // Open modal window for edditing city
        this.wrapper.addEventListener('click', function (event) {
            if (event.target.className === 'edit-city') {
                var modalLabel = document.getElementById('myModalLabel');
                modalLabel.innerHTML = _constants.constants.editCity;
                modalLabel.setAttribute('data-mode', 'edit');
                _this.errorEl.innerHTML = '';
                var id = event.target.getAttribute('data-id');
                _this.element = event.target;
                _app.app.cities.forEach(function (item, i) {
                    if (item.id === +id) {
                        _this.index = i;
                    }
                });

                document.getElementById('addnewcity').value = _app.app.cities[_this.index].name;
                document.getElementById('addnewcountry').value = _app.app.cities[_this.index].country;
                document.getElementById('i').setAttribute('data-act', _app.app.cities[_this.index].isIndustrial);
                document.getElementById('c').setAttribute('data-act', _app.app.cities[_this.index].isCriminal);
                document.getElementById('p').setAttribute('data-act', _app.app.cities[_this.index].isPolluted);

                _this.detectColor(document.getElementById('i'));
                _this.detectColor(document.getElementById('c'));
                _this.detectColor(document.getElementById('p'));
            }
        });

        // Save eddited city
        this.saveNewCity.addEventListener('click', function (event) {
            var modalLabel = document.getElementById('myModalLabel').getAttribute('data-mode');
            if (modalLabel === 'edit') {
                _this.saveNewCity.setAttribute('data-dismiss', 'modal');
                var city = _this.getInfoFromModal();

                if (!_this.validateCity(city)) {
                    _this.saveNewCity.removeAttribute('data-dismiss');
                    return;
                }
                var cityNameElement = _this.element.nextElementSibling;
                cityNameElement.innerHTML = city.name;

                var parentNode = cityNameElement.parentNode;
                var attributesContainer = parentNode.children[parentNode.children.length - 1];

                attributesContainer.children[0].setAttribute('data-act', city.isIndustrial);
                attributesContainer.children[1].setAttribute('data-act', city.isCriminal);
                attributesContainer.children[2].setAttribute('data-act', city.isPolluted);

                _this.detectColor(attributesContainer.children[0]);
                _this.detectColor(attributesContainer.children[1]);
                _this.detectColor(attributesContainer.children[2]);

                city.cityAreas = _app.app.cities[_this.index].cityAreas;
                city.id = _app.app.cities[_this.index].id;
                _app.app.cities.splice(_this.index, 1, city);
                localStorage.setItem('cities', JSON.stringify(_app.app.cities));
                _app.app.clearSearchList();
                _app.app.initSearchList(_app.app.cities);
                _app.app.clearCountriesList();
                _app.app.initCountriesList(_app.app.cities);
            }
        });
    }

    // Detect color of toogled buttons


    _createClass(EventsForCities, [{
        key: 'detectColor',
        value: function detectColor(item) {
            if (item.getAttribute('data-act') === 'true') {
                item.style.background = _constants.constants.activeColor;
            } else {
                item.style.background = _constants.constants.noActiveColor;
            }
        }

        // Get info from modal window for new or eddited city

    }, {
        key: 'getInfoFromModal',
        value: function getInfoFromModal() {
            var cityName = document.getElementById('addnewcity').value;
            cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

            var countryName = document.getElementById('addnewcountry').value;
            countryName = countryName.charAt(0).toUpperCase() + countryName.slice(1).toLowerCase();

            var isIndustrial = document.getElementById('i').getAttribute('data-act');
            var isCriminal = document.getElementById('c').getAttribute('data-act');
            var isPolluted = document.getElementById('p').getAttribute('data-act');

            isIndustrial = isIndustrial === 'true' ? true : false;
            isCriminal = isCriminal === 'true' ? true : false;
            isPolluted = isPolluted === 'true' ? true : false;

            var id = _app.app.cities.length ? _app.app.cities[_app.app.cities.length - 1].id + 1 : 0;

            var city = {
                id: id,
                country: countryName,
                name: cityName,
                isIndustrial: isIndustrial,
                isCriminal: isCriminal,
                isPolluted: isPolluted,
                cityAreas: []
            };

            return city;
        }

        // Validate new or editted city

    }, {
        key: 'validateCity',
        value: function validateCity(city) {
            if (city.name === '') {
                this.errorEl.innerHTML = _constants.constants.alertMessageForCity;
                return false;
            }
            if (city.country === '') {
                this.errorEl.innerHTML = _constants.constants.alertMessageForCountry;
                return false;
            }
            if (city.name.length > _constants.constants.maxLengthForCityName) {
                city.name = city.name.slice(0, _constants.constants.maxLengthForCityName);
            }
            if (this.index) {
                if (city.name === _app.app.cities[this.index].name) {
                    return true;
                }
            }
            var bool = _app.app.cities.every(function (item) {
                return item.name.toUpperCase() !== city.name.toUpperCase();
            });
            if (!bool) {
                this.errorEl.innerHTML = _constants.constants.alertMessageForExistingCity;
                return false;
            }
            return true;
        }

        // Toogle color of button attributes

    }, {
        key: 'toogleColor',
        value: function toogleColor(target) {
            if (target.getAttribute('data-act') === 'true') {
                target.style.background = _constants.constants.noActiveColor;
                target.setAttribute('data-act', 'false');
            } else {
                target.style.background = _constants.constants.activeColor;
                target.setAttribute('data-act', 'true');
            }
        }

        // Remove city

    }, {
        key: 'removeCity',
        value: function removeCity(element) {
            var parent = element;
            while (parent.id !== 'accordion') {
                parent = parent.parentNode;
            }
            this.wrapper.removeChild(parent);
            return parent;
        }
    }]);

    return EventsForCities;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initApp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(6);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var initApp = exports.initApp = function () {
    function initApp() {
        _classCallCheck(this, initApp);

        this.cities = JSON.parse(localStorage.getItem('cities')) || [];
        this.wrapper = document.getElementById('wrapper');
        this.cityList = document.getElementById('cities-list');
        this.countriesList = document.getElementById('countries-list');
    }

    // Method for initial rendering and rendering block of city with areas


    _createClass(initApp, [{
        key: 'displayCities',
        value: function displayCities(cities) {
            var _this = this;

            if (!cities.join) {
                cities = [cities];
            }
            cities.forEach(function (item) {
                var areasNames = [];
                var areas = '';

                var iColor = item.isIndustrial ? _constants.constants.activeColor : _constants.constants.noActiveColor;
                var cColor = item.isCriminal ? _constants.constants.activeColor : _constants.constants.noActiveColor;
                var pColor = item.isPolluted ? _constants.constants.activeColor : _constants.constants.noActiveColor;

                var iActive = item.isIndustrial ? 'true' : 'false';
                var cActive = item.isCriminal ? 'true' : 'false';
                var pActive = item.isPolluted ? 'true' : 'false';

                var iD = item.id;
                item.cityAreas.forEach(function (item) {
                    areasNames.push(item.name);
                    areas += '<div class="areasdown" data-id=' + iD + '>\n                            <button class="delete-area" data-id=' + item.id + '></button>\n                            <button class="edit-area" data-id=' + item.id + ' data-target="#areaModal" data-toggle="modal"></button>\n                            <span class="areadown-name">' + item.name + '</span>\n                            <span class="description">' + item.description + '</span>\n                            <span class="citizenamount">' + (item.citizenAmount + ' people') + '</span>\n                          </div>';
                });
                areasNames = areasNames.length < 1 ? _constants.constants.noAreas : areasNames.join(', ');

                var string = '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">\n                    <div class="panel panel-default">\n                        <div class="panel-heading" role="tab" id="headingOne">\n                            <button class="delete-city" data-id=' + item.id + '></button>\n                            <button class="edit-city" data-id=' + item.id + ' data-target="#myModal" data-toggle="modal"></button>\n                            \n                            <a role="button" data-toggle="collapse" data-parent="#accordion" href=' + ('#collapse' + item.id) + '\n                                                                aria-expanded="false" aria-controls=' + ('collapse' + item.id) + '>\n                                ' + item.name + '\n                            </a>\n                            <div class="areas"><span id=' + (item.id + 'areas') + '>' + areasNames + '</span></div>\n                            <div class="marks">\n                                <button id="i-button" data-id=' + item.id + ' style="background:' + iColor + '" class="attributes" data-act=' + iActive + '>I</button>\n                                <button id="c-button" data-id=' + item.id + ' style="background:' + cColor + '" class="attributes" data-act=' + cActive + '>C</button>\n                                <button id="p-button" data-id=' + item.id + ' style="background:' + pColor + '" class="attributes" data-act=' + pActive + '>P</button>\n                            </div>    \n                        </div>\n                    <div id=' + ('collapse' + item.id) + ' class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">\n                        <div class="panel-body">\n                            <div class="newarea">\n                                <button type="button" class="newareabutton btn btn-primary btn-sm" id="add-new-area"\n                                data-toggle="modal" data-target="#areaModal" data-id=' + item.id + '>Add New Area</button>\n                            </div>    \n                            ' + areas + '\n                        </div>\n                    </div>\n                </div>\n            </div>';

                _this.wrapper.insertAdjacentHTML('beforeend', string);
            });
        }

        // Method for removing all cities and areas

    }, {
        key: 'clearDisplay',
        value: function clearDisplay() {
            var panels = this.wrapper.getElementsByClassName('panel-group');
            panels = [].concat(_toConsumableArray(panels));
            for (var i = 0; i < panels.length; i++) {
                this.wrapper.removeChild(panels[i]);
            }
        }

        // Init cities in search list

    }, {
        key: 'initSearchList',
        value: function initSearchList(cities) {
            var _this2 = this;

            cities.forEach(function (item) {
                var string = '<option value="' + item.name + '"></option>';
                _this2.cityList.insertAdjacentHTML('beforeend', string);
            });
        }

        // Clear cities in search list

    }, {
        key: 'clearSearchList',
        value: function clearSearchList() {
            var children = [].concat(_toConsumableArray(this.cityList.children));
            for (var i = 0; i < children.length; i++) {
                this.cityList.removeChild(children[i]);
            }
        }

        // Init countries in search list

    }, {
        key: 'initCountriesList',
        value: function initCountriesList(countries) {
            var _this3 = this;

            var countriesArr = [];
            countries.forEach(function (item) {
                if (countriesArr.indexOf(item.country) === -1) {
                    countriesArr.push(item.country);
                }
            });
            countriesArr.forEach(function (item) {
                var string = '<option value="' + item + '"></option>';
                _this3.countriesList.insertAdjacentHTML('beforeend', string);
            });
        }

        // Clear countries in search list

    }, {
        key: 'clearCountriesList',
        value: function clearCountriesList() {
            var children = [].concat(_toConsumableArray(this.countriesList.children));
            for (var i = 0; i < children.length; i++) {
                this.countriesList.removeChild(children[i]);
            }
        }
    }]);

    return initApp;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Search = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(0);

var _constants = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Search = exports.Search = function () {
    function Search() {
        var _this = this;

        _classCallCheck(this, Search);

        this.wrapper = document.getElementById('wrapper');
        this.searchButton = document.getElementById('search-button-cities');
        this.resetSearchButton = document.getElementById('reset-button-cities');
        this.searchButtonCountries = document.getElementById('search-country-button');
        this.wrapperForFilterAttr = document.getElementById('filter-attributes');
        this.dropDownButton = document.getElementById('dropdown-button');
        this.searchAttrButton = document.getElementById('search-attributes-button');
        this.dropDownWrapper = document.getElementById('dropdown-menu');
        this.searchForCitizens = document.getElementById('search-by-citizens');

        // Search for cities
        this.searchButton.addEventListener('click', function () {
            var searchInputValue = document.getElementById('input-search-cities').value;
            if (!searchInputValue) {
                return;
            }
            var city = _app.app.cities.filter(function (item) {
                if (item.name.toUpperCase() === searchInputValue.toUpperCase()) {
                    return item;
                }
            });
            _this.showAlertOrRenderCities(_constants.constants.alertNoCities, city);
            document.getElementById('input-search-cities').value = '';
        });

        // Reset search
        this.resetSearchButton.addEventListener('click', function () {
            var searchInput = document.getElementById('input-search-cities');
            searchInput.value = '';
            _app.app.clearDisplay();
            _app.app.displayCities(_app.app.cities);
        });

        // Search for countries
        this.searchButtonCountries.addEventListener('click', function () {
            var searchInputValue = document.getElementById('input-search-countries').value;
            if (!searchInputValue) {
                return;
            }
            var countries = _app.app.cities.filter(function (item) {
                if (item.country.toUpperCase() === searchInputValue.toUpperCase()) {
                    return item;
                }
            });
            _this.showAlertOrRenderCities(_constants.constants.alertNoCountries, countries);
            document.getElementById('input-search-countries').value = '';
        });

        // Open dropdown window
        this.dropDownButton.addEventListener('click', function () {
            var isIndustrial = document.getElementById('i-filter');
            var isCriminal = document.getElementById('c-filter');
            var isPolluted = document.getElementById('p-filter');
            isIndustrial.setAttribute('data-act', 'true');
            isIndustrial.style.background = _constants.constants.activeColor;
            isCriminal.setAttribute('data-act', 'false');
            isCriminal.style.background = _constants.constants.noActiveColor;
            isPolluted.setAttribute('data-act', 'false');
            isPolluted.style.background = _constants.constants.noActiveColor;

            var minCitizensInput = document.getElementById('min-value-citizens');
            var maxCitizensInput = document.getElementById('max-value-citizens');
            var arrOfMinAndMax = _this.findMinAndMaxValuesOfCitizens();
            minCitizensInput.value = arrOfMinAndMax[0] || '';
            maxCitizensInput.value = arrOfMinAndMax[1] || '';
        });

        // Toogle attributes in filter window
        this.wrapperForFilterAttr.addEventListener('click', function (event) {
            var element = event.target;
            if (element.id === 'i-filter' || element.id === 'c-filter' || element.id === 'p-filter') {
                _app.events.toogleColor(element);
            }
        });

        // Search for attributes
        this.searchAttrButton.addEventListener('click', function () {
            var isIndustrial = document.getElementById('i-filter').getAttribute('data-act');
            var isCriminal = document.getElementById('c-filter').getAttribute('data-act');
            var isPolluted = document.getElementById('p-filter').getAttribute('data-act');

            isIndustrial = isIndustrial === 'true' ? true : false;
            isCriminal = isCriminal === 'true' ? true : false;
            isPolluted = isPolluted === 'true' ? true : false;

            var cities = _app.app.cities.filter(function (item) {
                if (item.isIndustrial === isIndustrial && item.isCriminal === isCriminal && item.isPolluted === isPolluted) {
                    return item;
                }
            });
            _this.showAlertOrRenderCities(_constants.constants.alertNoCitiesWithAttr, cities);
        });

        // Search for areas by citizens
        this.searchForCitizens.addEventListener('click', function () {
            var minCitizensValue = +document.getElementById('min-value-citizens').value;
            var maxCitizensValue = +document.getElementById('max-value-citizens').value;

            var cities = _this.findAreasByRangeOfCitizens(minCitizensValue, maxCitizensValue);
            _this.showAlertOrRenderCities(_constants.constants.alertNoAreasWithSuchCitizens, cities);
        });
    }

    // Find minimal and maximum values of area citizens


    _createClass(Search, [{
        key: 'findMinAndMaxValuesOfCitizens',
        value: function findMinAndMaxValuesOfCitizens() {
            var arr = [];
            _app.app.cities.forEach(function (item) {
                item.cityAreas.forEach(function (item) {
                    if (item.citizenAmount) {
                        arr.push(item.citizenAmount);
                    }
                });
            });

            arr.sort(function (a, b) {
                return a - b;
            });
            return [arr[0], arr[arr.length - 1]];
        }

        // Find areas with amount of citizens in define range

    }, {
        key: 'findAreasByRangeOfCitizens',
        value: function findAreasByRangeOfCitizens(min, max) {
            var arr = JSON.parse(JSON.stringify(_app.app.cities));
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[i].cityAreas.length; j++) {
                    if (arr[i].cityAreas[j].citizenAmount < min || arr[i].cityAreas[j].citizenAmount > max) {
                        arr[i].cityAreas.splice(j, 1);
                        j--;
                    }
                }
            }
            for (var _i = 0; _i < arr.length; _i++) {
                if (!arr[_i].cityAreas.length) {
                    arr.splice(_i, 1);
                    _i--;
                }
            }
            return arr;
        }

        // Render cities or show alert message

    }, {
        key: 'showAlertOrRenderCities',
        value: function showAlertOrRenderCities(message, cities) {
            _app.app.clearDisplay();
            this.dropDownWrapper.classList.remove('open');

            if (!cities.length) {
                var string = '<div class="panel-group alert-no-search"><span>' + message + '<span></div>';
                this.wrapper.insertAdjacentHTML('beforeend', string);
            } else {
                _app.app.displayCities(cities);
            }
        }
    }]);

    return Search;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var constants = {
    activeColor: '#4ee321',
    noActiveColor: '#f39846',
    addCity: 'Add New City',
    editCity: 'Edit City',
    addArea: 'Add New Area',
    editArea: 'Edit Area',
    noAreas: 'No Areas',
    alertMessageForCity: 'Please, insert the name of the city!!!',
    alertMessageForCountry: 'Please, insert the name of the country',
    alertMessageForExistingCity: 'Such city is already exist!!!',
    maxLengthForCityName: 100,
    alertMessageForAreaFields: 'Please, insert all fields!!!',
    alertMessageForAreaCitizens: 'Please, insert correct number of citizens!!!',
    alertNoCities: 'No such city in database, use dropdown menu!!!',
    alertNoCountries: 'No such country in database, use dropdown menu',
    alertNoCitiesWithAttr: 'No cities with such attributes',
    alertNoAreasWithSuchCitizens: 'No areas with such number of citizens'
};

exports.constants = constants;

/***/ })
/******/ ]);