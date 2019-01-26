const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const home = require('./routes/home');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);


// Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

// console.log('Mail Password: ' + config.get('mail.password'));


if (app.get('env') === 'developement'){
    app.use(morgan('tiny'));
    debug('Morgan enabled....');
}

app.use(logger);






// PORT This is environment variables
// environment variables can be manually set using set on windows and export on mark
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}.......`)) 
// optionally we can add a callback function
