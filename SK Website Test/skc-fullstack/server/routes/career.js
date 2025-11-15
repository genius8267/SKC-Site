const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');

router.get('/family', careerController.family);
router.get('/life', careerController.life);
router.get('/jobs', careerController.jobs);
router.get('/recruitment', careerController.recruitment);

module.exports = router;
