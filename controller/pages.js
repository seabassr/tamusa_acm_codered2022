const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/aboutus', (req, res) => {
    res.render('aboutus')
})

router.get('/charts', (req, res) => {
    res.render('charts')
})

module.exports = router;