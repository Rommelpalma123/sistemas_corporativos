const express = require('express');
const router = express.Router();

router.post('/', (req, res) => 
{
    res.send('registrado exitosamente')
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
