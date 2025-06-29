const express = require('express');
const { mailCareerCounselling } = require('../controllers/CareerCounsellingController');
const router = express.Router();

router.post('/get-free-counselling', mailCareerCounselling);

module.exports = router; 