const express = require('express');
const router = express.Router();

router.post('/asesor', (req, res) => 
{
    res.send('asesor registrado')
});

module.exports = router; 