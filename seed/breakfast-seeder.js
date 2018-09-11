const BreakfastItem = require('../models/breakfast');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chicken-fries',{ useNewUrlParser: true });

let items = [
    new BreakfastItem({
        imagePath: 'images/breakfast/alison-marras-361028-unsplash.jpg',
        name: 'Fried egg',
        description: 'Fried egg with cheese',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new BreakfastItem({
        imagePath: 'images/breakfast/alison-marras-361028-unsplash.jpg',
        name: 'ovo frito',
        description: 'Fried egg with cheese',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new BreakfastItem({
        imagePath: 'images/breakfast/alison-marras-361028-unsplash.jpg',
        name: 'Scrambled egg',
        description: 'Fried egg with cheese',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
];

let done = 0;

for(let i = 0; i < items.length; i++){
    items[i].save(function (err, result) {
        done++;
        if(done === items.length){
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}