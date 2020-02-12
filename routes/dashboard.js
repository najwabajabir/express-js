var express = require('express');
var router = express.Router();
const inventory = require('../model/inventory');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('dashboard');
});

router.post('/store', async function(req, res){
    inventory.store(req.body, function(err,result){
        res.redirect('/dashboard');
    })
})



module.exports = router;
