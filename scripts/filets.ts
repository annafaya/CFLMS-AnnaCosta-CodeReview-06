var array = new Array();

class Locations {
    name:"";
    city:"";

    address:"";
    img:"";
    type:"";

    constructor(name,city,address,img,type){
        this.name=name;
        this.city = city;

        this.address=address;
        this.img=img;
        this.type=type; // For making it easier to display stuff (place/restaurant/event)
    }

    displayPlace(){
        return `<div class="col-lg-3 col-md-6 col-sm-12">
        <div class="img_scale description">
        <a href="#">
        <img class="d-sm-none d-md-block" src="${this.img}" alt="${this.name}"></a>
        <hr>
        </div>
        <div class="col-lg-12 col-md-1 col-sm-12 text-secondary">
        <h4 class="h4">${this.name}</h4>
        <p><b>Address:</b><br> ${this.address}, ${this.city}</p>
      
        </div>
        </div>`
    }
};

class Restaurants extends Locations {
    food_type:"";
    number:"";
    website:"";
    
    constructor(name,city,address,img,type,food_type,number,website) {
        super(name,city,address,img,type);
        this.food_type = food_type;
        this.number=number;
        this.website = website;
    }
    displayRestaurant(){
        return `<div class="col-lg-3 col-lg col-md-6 col-sm-12">
        <div class="img_scale description">
        <a href="#">
        <img class="d-sm-none d-md-block" src="${this.img}" alt="${this.name}"></a>
        <hr>
        </div>
        <div class="col-lg-12 col-md-1 col-sm-12 text-secondary">
        <h4 class="h4">${this.name}</h4>
        <p><b>Address:</b><br> ${this.address}, <br>${this.city}</p>
        <p><b>Type:</b><br> ${this.food_type}</p>
        <p><b>Phone:</b><br> ${this.number}</p>
        <p><b>Website:</b><br> <a href="${this.website}" class="text-danger">${this.website}</a></p>
   
        </div>
        </div>`
    }
};

class Events extends Locations {
    date:"";
    time:"";
    entry:"";
    website:"";
    constructor(name,city,address,img,type,date,time,entry){
        super(name,city,address,img,type);
        this.date=date;
        this.time=time;
        this.entry=entry;
    }

    displayEvents(){
        return `<div class="col-lg-3 col-md-6 col-sm-12 w-100">
        <div class="img_scale description">
        <a href="#">
        <img class="d-sm-none d-md-block" src="${this.img}" alt="${this.name}"></a>
        <hr>
        </div>
        <div class="col-lg-12 col-md-1 col-sm-12 text-secondary">
        <h4 class="h4">${this.name}</h4>
        <p><b>Address:</b><br> ${this.address}, <br>${this.city}</p>
        <p><b>When:</b><br> ${this.date}, ${this.time}</p>
        <p><b>Price:</b><br> ${this.entry}</p>
   
        </div>
        </div>`
    }
};

function displayPlaces(){
    var arrayPlaces = new Array(); 
    for (let index in array) {
        if (array[index]["type"]==="place") {
            arrayPlaces.push(array[index]);
        }   
    }
    for (let i = 0; i < arrayPlaces.length; i++) {
        $("#places").append(arrayPlaces[i].displayPlace()) 
    }
};

function displayRestaurants(){
    var arrayRestaurants = new Array(); 
    for (let index in array) {
        if (array[index]["type"]==="restaurant") {
            arrayRestaurants.push(array[index]);
        }   
    }
    for (let i = 0; i < arrayRestaurants.length; i++) {
        $("#restaurants").append(arrayRestaurants[i].displayRestaurant()) 
    }
};

function displayEvents(){
    var arrayEvents = new Array(); 
    for (let index in array) {
        if (array[index]["type"]==="event") {
            arrayEvents.push(array[index]);
        }   
    }
    for (let i = 0; i < arrayEvents.length; i++) {
        $("#events").append(arrayEvents[i].displayEvents()) 
    }
};


// creating Locations
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

// displaying everything inside the HTML w/ jQuery
displayPlaces();
displayRestaurants();
displayEvents();
