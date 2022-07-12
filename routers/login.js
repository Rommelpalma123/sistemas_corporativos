const express = require('express');
const router = express.Router();

router.post('/', (req, res) => 
{
    res.send('registrado exitosamente')
});

router.post('/accesorios', (req, res) => 
{
    res.send('accesorios enviados')
});
module.exports = router; 
