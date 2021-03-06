'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));
router.use('/users', require('./users'))
router.use('/items', require('./items'))
router.use('/reviews', require('./reviews'))
router.use('/orders', require('./orders'))
router.use('/cart', require('./cart'))
router.use('/promo', require('./promo'))

// Make sure this is after all of
// the registered routes!
router.use(function(req, res) {
	res.status(404).end();
});
