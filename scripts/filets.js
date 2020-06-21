var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var array = new Array();
var Locations = /** @class */ (function () {
    function Locations(name, city, address, img, type) {
        this.name = name;
        this.city = city;
        this.address = address;
        this.img = img;
        this.type = type;
    }
    Locations.prototype.displayPlace = function () {
        return "<div class=\"col-lg-3 col-md-6 col-sm-12\">\n        <div class=\"img_scale description\">\n        <a href=\"#\">\n        <img class=\"d-sm-none d-md-block\" src=\"" + this.img + "\" alt=\"" + this.name + "\"></a>\n        <hr>\n        </div>\n        <div class=\"col-lg-12 col-md-1 col-sm-12 text-secondary\">\n        <h4 class=\"h4\">" + this.name + "</h4>\n        <p><b>Address:</b><br> " + this.address + ", " + this.city + "</p>\n      \n        </div>\n        </div>";
    };
    return Locations;
}());
;
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, city, address, img, type, food_type, number, website) {
        var _this = _super.call(this, name, city, address, img, type) || this;
        _this.food_type = food_type;
        _this.number = number;
        _this.website = website;
        return _this;
    }
    Restaurants.prototype.displayRestaurant = function () {
        return "<div class=\"col-lg-3 col-lg col-md-6 col-sm-12\">\n        <div class=\"img_scale description\">\n        <a href=\"#\">\n        <img class=\"d-sm-none d-md-block\" src=\"" + this.img + "\" alt=\"" + this.name + "\"></a>\n        <hr>\n        </div>\n        <div class=\"col-lg-12 col-md-1 col-sm-12 text-secondary\">\n        <h4 class=\"h4\">" + this.name + "</h4>\n        <p><b>Address:</b><br> " + this.address + ", <br>" + this.city + "</p>\n        <p><b>Type:</b><br> " + this.food_type + "</p>\n        <p><b>Phone:</b><br> " + this.number + "</p>\n        <p><b>Website:</b><br> <a href=\"" + this.website + "\" class=\"text-danger\">" + this.website + "</a></p>\n   \n        </div>\n        </div>";
    };
    return Restaurants;
}(Locations));
;
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, city, address, img, type, date, time, entry) {
        var _this = _super.call(this, name, city, address, img, type) || this;
        _this.date = date;
        _this.time = time;
        _this.entry = entry;
        return _this;
    }
    Events.prototype.displayEvents = function () {
        return "<div class=\"col-lg-3 col-md-6 col-sm-12 w-100\">\n        <div class=\"img_scale description\">\n        <a href=\"#\">\n        <img class=\"d-sm-none d-md-block\" src=\"" + this.img + "\" alt=\"" + this.name + "\"></a>\n        <hr>\n        </div>\n        <div class=\"col-lg-12 col-md-1 col-sm-12 text-secondary\">\n        <h4 class=\"h4\">" + this.name + "</h4>\n        <p><b>Address:</b><br> " + this.address + ", <br>" + this.city + "</p>\n        <p><b>When:</b><br> " + this.date + ", " + this.time + "</p>\n        <p><b>Price:</b><br> " + this.entry + "</p>\n   \n        </div>\n        </div>";
    };
    return Events;
}(Locations));
;
function displayPlaces() {
    var arrayPlaces = new Array();
    for (var index in array) {
        if (array[index]["type"] === "place") {
            arrayPlaces.push(array[index]);
        }
    }
    for (var i = 0; i < arrayPlaces.length; i++) {
        $("#places").append(arrayPlaces[i].displayPlace());
    }
}
;
function displayRestaurants() {
    var arrayRestaurants = new Array();
    for (var index in array) {
        if (array[index]["type"] === "restaurant") {
            arrayRestaurants.push(array[index]);
        }
    }
    for (var i = 0; i < arrayRestaurants.length; i++) {
        $("#restaurants").append(arrayRestaurants[i].displayRestaurant());
    }
}
;
function displayEvents() {
    var arrayEvents = new Array();
    for (var index in array) {
        if (array[index]["type"] === "event") {
            arrayEvents.push(array[index]);
        }
    }
    for (var i = 0; i < arrayEvents.length; i++) {
        $("#events").append(arrayEvents[i].displayEvents());
    }
}
;
array.push(new Locations("Cristo Redentor", "Rio de Janeiro", "Rua Cosme Velho, 513", "img/cristo.jpg", "place"));
array.push(new Locations("Sugar Loaf Cable Car", "Rio de Janeiro", "Av. Pasteur, 520", "img/bondinho.jpg", "place"));
array.push(new Locations("Museum of Contemporany Art", "Niterói", "Mirante da Boa Viagem", "img/mac.jpg", "place"));
array.push(new Locations("Arcos da Lapa", "Lapa", "Arcos da Lapa", "img/lapa.jpg", "place"));
// creating Restaurants
array.push(new Restaurants("Boteco Belmonte", "Rio de Janeiro", "Av. Atlântica, 514", "img/belmonte.jpg", "restaurant", "Brazilian Snacks", "+55 21 2523-1135", "not available"));
array.push(new Restaurants("Bar Lagoa", "Rio de Janeiro", "Av. Epitácio Pessoa, 1674", "img/barlagoa.jpg", "restaurant", "Brazilian/German food", "+55 21 2523-1135", "www.bestrest.rio.br/bar-lagoa"));
array.push(new Restaurants("Braseiro", "Rio de Janeiro", "Praça Santos Dumont, 116", "img/braseiro.jpg", "restaurant", "Brazilian food", "+55 21 2239-7494", "www.braseirodagavea.com.br"));
array.push(new Restaurants("Joaquina Bar", "Rio de Janeiro", "R. Voluntários da Pátria, 448", "img/joaquina.jpg", "restaurant", "Brazilian food", "+55 21 2535-2774", "www.instagram.com/joaquinabar"));
// creating Events
array.push(new Events("Free Walking Tour", "City Center", "Carioca Station", "img/centro.jpg", "event", "27.06.2020", "At: 9:30", "Pay as you wish!"));
array.push(new Events("Roda de Samba", "Rio de Janeiro", "Arco do Teles", "img/samba.jpg", "event", "31.06.2020", "At: 18:00", "Pay as you wish!"));
array.push(new Events("Forest Hiking", "Floresta da Tijuca", "Estrada da Gávea, 870", "img/pedra.jpg", "event", "28.06.2020", "At: 07:00", "€ 25,00"));
array.push(new Events("Carnival Rehearsal", "HUB", "Av. Prof. Pereira Reis, 54-80", "img/amigos.jpg", "event", "26.06.2020", "At: 22:00", "€ 5,00"));
displayPlaces();
displayRestaurants();
displayEvents();
