const cars = [
    {
        id: 1,
        brand: 'Renault',
        model: 'Clio',
        color: 'Gray',
        year: 2009,
        price: 4000,
        image: 'https://imganuncios.mitula.net/renault_clio_2009_nafta_renault_clio_pack_plus_12_nafta_2009_5_puertas_gris_plata_2900070549207589367.jpg',
    },
    {
        id: 2,
        brand: 'Chevrolet',
        model: 'Captiva',
        color: 'White',
        year: 2017,
        price: 16000,
        image: 'https://cdn.wallpapersafari.com/81/97/7OjIR4.jpg',
    },
    {
        id: 3,
        brand: 'Audi',
        model: 'Q5-Ambition',
        color: 'Black',
        year: 2020,
        price: 49000,
        image: 'https://http2.mlstatic.com/D_NQ_NP_806322-MCO44206732256_112020-W.jpg',
    },
    {
        id: 4,
        brand: 'Chevrolet',
        model: 'SparkGT',
        color: 'Blue',
        year: 2018,
        price: 12000,
        image: 'https://automovilescolombia.com/uploads/2018/01/d82806c9d7eadcf4d19a483328fe99e7.jpg',
    },
    {
        id: 5,
        brand: 'Tesla',
        model: 'X',
        color: 'White',
        year: 2018,
        price: 100000,
        image: 'https://i.pinimg.com/originals/cd/48/38/cd483869c3df9521a39e9bd134ab6a9d.jpg',
    },
];

let counter = 0;

let index = 0;

function printCars() {
    let content = '';
    cars.forEach((element) => content += `<div class="col-12 col-md-6 col-lg-4"><div class="card mb-5"><img class="card-img-top" src="${element.image}" alt="Card image cap"><div class="card-body"><h5 class="card-title">$${element.price}</h5><p class="card-text">${element.brand} ${element.model} ${element.year} ${element.color}</p><a  data-toggle="modal" href="#carModal" onclick="editCar(${element.id})" class="btn btn-success mr-3">Edit</a><button onclick="deleteCar(${element.id})" class="btn btn-danger"">Delete</button></div></div></div>`);
    document.getElementById('cards-container').innerHTML = content;
}

function editCar(id) {

    if (confirm('Are you sure you want to EDIT this item?')) {
        counter = 1;
        index = cars.findIndex((car) => car.id == id);
        document.getElementById('brand').value = cars[index].brand;
        document.getElementById('model').value = cars[index].model;
        document.getElementById('color').value = cars[index].color;
        document.getElementById('year').value = cars[index].year;
        document.getElementById('price').value = cars[index].price;
        document.getElementById('image-url').value = cars[index].image;
    } else {
        // stop modal from appearing
    }
}

function addOrUpdateCar() {
    if (counter == 0) {
        addCar();
    } else {
        updateCar();
    }
    counter = 0;
}

function updateCar() {
    let id = cars[index].id;
    let brand = document.getElementById('brand').value;
    let model = document.getElementById('model').value;
    let color = document.getElementById('color').value;
    let year = document.getElementById('year').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('image-url').value;

    const update = {
        id, 
        brand, 
        model,
        color,
        year,
        price,
        image,
    }

    cars.splice(index, 1, update);
    printCars();

    // Clean form
    document.getElementById('form-cars').reset();
}

function addCar() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image-url').value;

    const id = cars[cars.length - 1].id + 1;

    const newCar = {
        id,
        brand,
        model,
        color,
        year,
        price,
        image,
    }

    cars.push(newCar);
    printCars();
}

function deleteCar(id) {
    const index = cars.findIndex((car) => car.id == id);
    cars.splice(index, 1);
    printCars();
}

function cleanForm() {
    // Clean form
    document.getElementById('form-cars').reset();
}

printCars();