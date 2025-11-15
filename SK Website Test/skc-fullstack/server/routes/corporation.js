/**
 * Corporation Section Routes
 * Handles all /eng/corporation/* routes
 */

const express = require('express');
const router = express.Router();
const corporationController = require('../controllers/corporationController');

// Introduction
router.get('/intro/company', corporationController.intro.company);
router.get('/intro/ceo', corporationController.intro.ceo);
router.get('/intro/history', corporationController.intro.history);
router.get('/intro/vision', corporationController.intro.vision);
router.get('/intro/ci', corporationController.intro.ci);
router.get('/intro/affiliates', corporationController.intro.affiliates);

// Sustainable Management
router.get('/sustain/governance', corporationController.sustain.governance);
router.get('/sustain/dbl', corporationController.sustain.dbl);
router.get('/sustain/csr', corporationController.sustain.csr);
router.get('/sustain/she', corporationController.sustain.she);
router.get('/sustain/report', corporationController.sustain.report);
router.get('/sustain/climate', corporationController.sustain.climate);
router.get('/sustain/supply-chain', corporationController.sustain.supplyChain);
router.get('/sustain/human-rights', corporationController.sustain.humanRights);

// Ethical Management
router.get('/ethics/management', corporationController.ethics.management);
router.get('/ethics/anti-corruption', corporationController.ethics.antiCorruption);
router.get('/ethics/reporting', corporationController.ethics.reporting);

// Hiring
router.get('/hiring/recruit', corporationController.hiring.recruit);
router.get('/hiring/talents', corporationController.hiring.talents);
router.get('/hiring/process', corporationController.hiring.process);
router.get('/hiring/hr-policies', corporationController.hiring.hrPolicies);

module.exports = router;
