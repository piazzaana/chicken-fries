const Lunch = require('../models/lunch');
const mongoose = require('mongoose');

process.env.NODE_ENV === 'production' ? (
    //set up database for live connection
    mongoose.connect('mongodb://'+ process.env.DB_USER +':'+ process.env.DB_PASS +'@'+ process.env.DB_HOST +':63402/'+ process.env.DB_NAME,{ useNewUrlParser:true})
  ) : (
    //set up database for local connection
    mongoose.connect('mongodb://localhost:27017/'+process.env.DB_NAME,{ useNewUrlParser:true})
  )

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
    LunchItems[i].save((err, result) => {
        done++;
        if(done === LunchItems.length){
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}
