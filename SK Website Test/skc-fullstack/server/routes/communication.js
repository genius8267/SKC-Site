const express = require('express');
const router = express.Router();
const communicationController = require('../controllers/communicationController');

// Newsroom routes
router.get('/newsroom', communicationController.newsroom.index);
router.get('/newsroom/battery', communicationController.newsroom.battery);
router.get('/newsroom/semiconductor', communicationController.newsroom.semiconductor);
router.get('/newsroom/eco-friendly', communicationController.newsroom.ecoFriendly);
router.get('/newsroom/esg', communicationController.newsroom.esg);
router.get('/newsroom/inside-skc', communicationController.newsroom.insideSKC);

// PR routes
router.get('/pr/press-releases', communicationController.pr.pressReleases);
router.get('/pr/media-library', communicationController.pr.mediaLibrary);
router.get('/pr/focus-skc', communicationController.pr.focusSKC);
router.get('/pr/news/:id', communicationController.pr.newsDetail);

// IR routes
router.get('/ir/financial', communicationController.ir.financial);
router.get('/ir/dividend', communicationController.ir.dividend);
router.get('/ir/archive', communicationController.ir.archive);

module.exports = router;
