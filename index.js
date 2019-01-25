const startupDebugger = require('debug')('app:startup');
const deBugger = require('debug')('app:db')
const morgan = require('morgan');
const express = require('express');
const app = express();

if (app.get('env') === 'developement'){
    app.use(morgan('tiny'));
    console.log('Morgan enabled....');
}


// const config = require('config');
// const morgan = require('morgan');
// const helmet = require('helmet');
// const Joi = require('joi');
// const logger = require('./logger');
// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.use(helmet());

// // Configuration
// console.log('Application Name: ' + config.get('name'));
// console.log('Mail Server: ' + config.get('mail.host'));
// console.log('Mail Password: ' + config.get('mail.password'));

// // console.log('Mail Password: ' + config.get('mail.password'));


// if (app.get('env') === 'developement'){
//     app.use(morgan('tiny'));
//     console.log('Morgan enabled....');
// }

// app.use(logger);


// const courses = [
//     { id: 1, name: 'courses1' },
//     { id: 2, name: 'courses2' },
//     { id: 3, name: 'courses3' }
// ];

// app.get('/', (req, res) => { //A call back function here is also called a route handler
//     res.send('Hello World!!!');
// });

// app.get('/api/courses', (req, res) => {
//     res.send(courses);
// });

// app.post('/api/courses', (req, res) => {
//     const { error } = validateCourse(req.body); // this uses Joi schema
//     if(error){
//         res.status(400).send(error.details[0].message);
//         return;
//     }

//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });

// app.put('/api/courses/:id', (req, res) =>{  
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) return res.status(404).send('The course with the given ID was not found');

//     const {error} = validateCourse(req.body); // this uses Joi schema
//     if(error)
//         return res.status(400).send(error.details[0].message);
        
    

//     course.name = req.body.name;
//     res.send(course);
// });

// app.delete('/api/courses/:id', (req, res) =>{
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) res.status(404).send('The course with the given ID was not found');

//     const index = courses.indexOf(course);
//     courses.splice(index, 1);

// });



// function validateCourse(course){

//     const schema = {
//         name: Joi.string().min(3).required()
//     };

//     return Joi.validate(course, schema);

// }

// app.get('/api/courses/:id', (req, res) => { // we use this 'req.params.id' to read the parameters
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) res.status(404).send('The course you are looking for was not found');
//     res.send(course);
// // res.send(req.params);
// });

// // PORT This is environment variables
// // environment variables can be manually set using set on windows and export on mark
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`listening on ${port}.......`)) 
// // optionally we can add a callback function
