const LunchItem = require('../models/lunch');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chicken-fries',{ useNewUrlParser: true });

let items = [
    new LunchItem({
        imagePath: 'images/lunch/haseeb-jamil-466109-unsplash.jpg',
        name: 'Grilled chicken',
        description: 'Fried egg with cheese',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new LunchItem({
        imagePath: 'images/lunch/haseeb-jamil-466109-unsplash.jpg',
        name: 'Chicken & Shrimp',
        description: 'Fried egg with cheese',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new LunchItem({
        imagePath: 'images/lunch/haseeb-jamil-466109-unsplash.jpg',
        name: 'Chicken & Broccoli',
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