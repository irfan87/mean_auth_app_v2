const express = require('express');

const router = express.Router();

// register
router.get('/register', (req, res, next) => {
    res.send('Register Page');
});

// authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('Authenticate Page');
});

// profile
router.get('/profile', (req, res, next) => {
    res.send('Profile Page');
});

module.exports = router;