const Dinner = require('../models/dinner');
const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:root01@ds163402.mlab.com:63402/chicken-fries',{ useNewUrlParser:true});

let DinnerItems = [
    new Dinner({
        imagePath: 'images/dinner/item-1.jpg',
        name: 'Cheese Wrap',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Dinner({
        imagePath: 'images/dinner/item-2.jpg',
        name: 'Pasta & tomato sauce',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Dinner({
        imagePath: 'images/dinner/item-3.jpg',
        name: 'Meatballs',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Dinner({
        imagePath: 'images/dinner/item-4.jpg',
        name: 'Grilled chicken',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Dinner({
        imagePath: 'images/dinner/item-5.jpg',
        name: 'Pizza',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Dinner({
        imagePath: 'images/dinner/item-6.jpg',
        name: 'Caesar Salad',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Dinner({
        imagePath: 'images/dinner/item-7.jpg',
        name: 'Steak',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Dinner({
        imagePath: 'images/dinner/item-8.jpg',
        name: 'Barbecue',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Dinner({
        imagePath: 'images/dinner/item-9.jpg',
        name: 'Baby Back Ribs',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Dinner({
        imagePath: 'images/dinner/item-10.jpg',
        name: 'Sea Food',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
];

let done = 0;

for(let i = 0; i < DinnerItems.length; i++){
    DinnerItems[i].save(function (err, result) {
        done++;
        if(done === DinnerItems.length){
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}
