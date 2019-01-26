const express = require('express');
const router = require.Router();

router.get('/', (req, res) => { //A call back function here is also called a route handler
    res.render('index', { title: 'MY Express App', message: 'Hello Word' });
});

module.exports = router;