const express = require('express');
const router = express.Router();

router.post('/portatil', (req, res) => 
{
    res.send('portatil registrada')
});

module.exports = router; 