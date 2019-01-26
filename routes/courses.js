const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(courses);
});

const courses = [
    { id: 1, name: 'courses1' },
    { id: 2, name: 'courses2' },
    { id: 3, name: 'courses3' }
];

router.post('/', (req, res) => {
    const { error } = validateCourse(req.body); // this uses Joi schema
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

router.put('/:id', (req, res) =>{  
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found');

    const {error} = validateCourse(req.body); // this uses Joi schema
    if(error)
        return res.status(400).send(error.details[0].message);  
    course.name = req.body.name;
    res.send(course);
});

router.delete('/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found');
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

router.get('/:id', (req, res) => { // we use this 'req.params.id' to read the parameters
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course you are looking for was not found');
    res.send(course);
// res.send(req.params);
});

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}

module.exports = router;