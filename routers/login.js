const express = require('express');
const router = express.Router();
const login = require('../models/login');

router.post('/login',async (req, res) => 
{
    const login = await new login(req.body);
    login.save();
    console.log(new login(req.body));
    console.log(req.body)
    res.redirect('/')   
});

router.post('/accesorios', (req, res) => 
{
    res.send('accesorios registrados')
});

router.post('/computadoras', (req, res) => 
{
    res.send('computadora registrada')
});
module.exports = router;
