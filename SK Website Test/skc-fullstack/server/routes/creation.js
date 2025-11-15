const express = require('express');
const router = express.Router();
const creationController = require('../controllers/creationController');

// Battery routes
router.get('/battery', creationController.battery.index);
router.get('/battery/copper-foil', creationController.battery.copperFoil);
router.get('/battery/silicon-anodes', creationController.battery.siliconAnodes);

// Semiconductor routes
router.get('/semiconductor', creationController.semiconductor.index);
router.get('/semiconductor/glass-substrate', creationController.semiconductor.glassSubstrate);
router.get('/semiconductor/test-socket', creationController.semiconductor.testSocket);
router.get('/semiconductor/cmp-pad', creationController.semiconductor.cmpPad);
router.get('/semiconductor/cmp-slurry', creationController.semiconductor.cmpSlurry);
router.get('/semiconductor/blank-mask', creationController.semiconductor.blankMask);

// Eco-friendly routes
router.get('/eco-friendly', creationController.ecoFriendly.index);
router.get('/eco-friendly/pbat', creationController.ecoFriendly.pbat);
router.get('/eco-friendly/limex', creationController.ecoFriendly.limex);

module.exports = router;
