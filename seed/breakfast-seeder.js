const Breakfast = require('../models/breakfast');
const mongoose = require('mongoose');

mongoose.connect('mongodb://'+ process.env.DB_USER +':'+ process.env.DB_PASS +'@'+ process.env.DB_HOST +':63402/'+ process.env.DB_NAME,{ useNewUrlParser:true});

let breakfastMenu = [
    new Breakfast({
        imagePath: 'images/breakfast/item-1.jpg',
        name: 'Egg, bacon & sausage',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Breakfast({
        imagePath: 'images/breakfast/item-2.jpg',
        name: 'Fried egg & herbs',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Breakfast({
        imagePath: 'images/breakfast/item-3.jpg',
        name: 'Croissant',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Breakfast({
        imagePath: 'images/breakfast/item-4.jpg',
        name: 'Fruits & cereal',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Breakfast({
        imagePath: 'images/breakfast/item-5.jpg',
        name: 'Egg & ham',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Breakfast({
        imagePath: 'images/breakfast/item-6.jpg',
        name: 'Pancake & oranges',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Breakfast({
        imagePath: 'images/breakfast/item-7.jpg',
        name: 'Grilled sausage and egg',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Breakfast({
        imagePath: 'images/breakfast/item-8.jpg',
        name: 'Scrambled eggs',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Breakfast({
        imagePath: 'images/breakfast/item-9.jpg',
        name: 'Waffles',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
    new Breakfast({
        imagePath: 'images/breakfast/item-10.jpg',
        name: 'Full breakfast',
        readyTime: 15,
        servingSize: 1,
        favorite: false,
        price: 15
    }),
];

let done = 0;

for(let i = 0; i < breakfastMenu.length; i++){
    breakfastMenu[i].save((err, result) => {
        done++;
        if(done === breakfastMenu.length){
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}
