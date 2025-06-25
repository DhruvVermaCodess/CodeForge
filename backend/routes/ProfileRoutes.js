const express = require('express');
const { getUserProfile } = require('../controllers/UserControllers');
const auth = require('../middlewares/AuthMiddleware')
const router = express.Router();

router.get('/profile', auth,  getUserProfile)

module.exports = router;