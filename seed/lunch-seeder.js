const Lunch = require('../models/lunch');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chicken-fries',{ useNewUrlParser: true });

let LunchItems = [
    new Lunch({
        imagePath: 'images/lunch/item-1.jpg',
        name: 'Cheese Burger',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Lunch({
        imagePath: 'images/lunch/item-2.jpg',
        name: 'Beef wrap',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Lunch({
        imagePath: 'images/lunch/item-3.jpg',
        name: 'Chicken Burger',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Lunch({
        imagePath: 'images/lunch/item-4.jpg',
        name: 'Beef Burger',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Lunch({
        imagePath: 'images/lunch/item-5.jpg',
        name: 'Beef & guacamole',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Lunch({
        imagePath: 'images/lunch/item-6.jpg',
        name: 'Nachos',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Lunch({
        imagePath: 'images/lunch/item-7.jpg',
        name: 'Beef & Chicken',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Lunch({
        imagePath: 'images/lunch/item-8.jpg',
        name: 'Arugula Salad',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Lunch({
        imagePath: 'images/lunch/item-9.jpg',
        name: 'Hamburger',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Lunch({
        imagePath: 'images/lunch/item-10.jpg',
        name: 'Chicken Salad Sandwich',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
];

let done = 0;

for(let i = 0; i < LunchItems.length; i++){
    LunchItems[i].save(function (err, result) {
        done++;
        if(done === LunchItems.length){
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}
