const DinnerItem = require('../models/dinner');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chicken-fries',{ useNewUrlParser: true });

let items = [
    new DinnerItem({
        imagePath: 'images/dinner/toa-heftiba-581911-unsplash.jpg',
        name: 'Grilled chicken dinner',
        description: 'Fried egg with cheese',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new DinnerItem({
        imagePath: 'images/dinner/toa-heftiba-581911-unsplash.jpg',
        name: 'Chicken & Shrimp dinner',
        description: 'Fried egg with cheese',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new DinnerItem({
        imagePath: 'images/dinner/toa-heftiba-581911-unsplash.jpg',
        name: 'Chicken & Broccoli dinner',
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