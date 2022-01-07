const express = require('express');

const router = express.Router();

router.get('/sum', sumOperation);
router.get('/rest', restOperation);

function sumOperation(req, res) {
    res.send('10');
}

function restOperation(req, res) {
    res.send('11');
}

module.exports = router;