# Chicken & Fries

This is a project for the Web Application Integration online class at Full Sail University

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

To run this project on you local computer you need to have NodeJs, NPM and MongoDB installed on your machine

### Installing

A step by step series of examples that tell you how to get a development env running

First clone or download the files on your machine

Place the files in an easy to access folder on your machine

```
Desktop
```
Rename the ```sample.env``` to ```.env```

Open your terminal window, point it to the folder you just downloaded and run the following command
```
npm install
```
This command will install all the dependencies needed for your project to run.

To seed you database go to the seed directory 
```
cd seed
``` 
Run the breakfast-seeder.js 
```
node breakfast-seeder.js
```
Run the lunch-seeder.js 
```
node lunch-seeder.js
```
Run the dinner-seeder.js 
```
node dinner-seeder.js
``` 

After your database is seeded run the following command

```
node bin/www
```

Open your favorite browser and go to
```
localhost:3000
```

## Built With
* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com) - The web framework used
* [NPM](https://docs.npmjs.com/cli/install) - Dependency Management

## Version Control

We use GitHub for version control (https://github.com) 

## Author

* **Ana Cristina Piazza**

See also the list of collaborators (https://github.com/piazzaana/chicken-fries/settings/collaboration) who participated in this project.

## License
This project is licensed under the GPLv3 License - see the [LICENSE.md](https://github.com/piazzaana/chicken-fries/blob/master/docs/LICENSE.md) file for details
