const express = require('express');
const router = express.Router();

router.post('/venta', (req, res) => 
{
    res.send('venta registrada')
});

module.exports = router; 